// ============================================================
// API: PATCH/DELETE /api/templates/[id]
// ============================================================
// PATCH  → Atualiza um template existente
// DELETE → Desativa um template (soft delete)
// O [id] no nome do ficheiro indica que é uma rota dinâmica.
// Ex: /api/templates/3 → req.query.id = "3"
// ============================================================

var supabase = require('../lib/supabase');
var auth = require('../lib/auth');

module.exports = async function handler(req, res) {
    // Adicionar cabeçalhos CORS
    auth.adicionarCORS(res);

    // Responder a pedidos OPTIONS (preflight do CORS)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Verificar token
    var utilizador = auth.verificarToken(req);
    if (!utilizador) {
        res.status(401).json({ erro: 'Token não fornecido ou inválido.' });
        return;
    }

    // Verificar se é coordenador
    if (utilizador.role !== 'coordenador') {
        res.status(403).json({ erro: 'Apenas coordenadores podem gerir templates.' });
        return;
    }

    // Buscar o ID da URL
    var idProcurado = parseInt(req.query.id);

    if (!idProcurado) {
        res.status(400).json({ erro: 'ID do template é obrigatório.' });
        return;
    }

    // ---- PATCH: Atualizar template ----
    if (req.method === 'PATCH') {
        // Construir o objeto com os campos a atualizar
        var camposParaAtualizar = {};

        if (req.body.nome) {
            camposParaAtualizar.nome = req.body.nome;
        }
        if (req.body.conteudo) {
            camposParaAtualizar.conteudo = req.body.conteudo;
        }
        if (req.body.prioridade) {
            camposParaAtualizar.prioridade = req.body.prioridade;
        }
        if (req.body.tipo) {
            camposParaAtualizar.tipo = req.body.tipo;
        }

        // Atualizar na base de dados
        var atualizacao = await supabase
            .from('templates')
            .update(camposParaAtualizar)
            .eq('id', idProcurado)
            .select('*');

        if (atualizacao.error) {
            res.status(500).json({ erro: 'Erro ao atualizar template.' });
            return;
        }

        if (atualizacao.data.length === 0) {
            res.status(404).json({ erro: 'Template não encontrado.' });
            return;
        }

        res.json(atualizacao.data[0]);
        return;
    }

    // ---- DELETE: Desativar template (soft delete) ----
    if (req.method === 'DELETE') {
        var desativacao = await supabase
            .from('templates')
            .update({ ativo: false })
            .eq('id', idProcurado)
            .select('id');

        if (desativacao.error) {
            res.status(500).json({ erro: 'Erro ao desativar template.' });
            return;
        }

        if (desativacao.data.length === 0) {
            res.status(404).json({ erro: 'Template não encontrado.' });
            return;
        }

        res.json({ mensagem: 'Template desativado com sucesso.' });
        return;
    }

    // Método não suportado
    res.status(405).json({ erro: 'Método não permitido.' });
};
