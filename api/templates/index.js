// ============================================================
// API: GET/POST /api/templates
// ============================================================
// GET  → Devolve a lista de templates ativos
// POST → Cria um novo template (apenas coordenadores)
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

    // ---- GET: Listar templates ativos ----
    if (req.method === 'GET') {
        var resultado = await supabase
            .from('templates')
            .select('*')
            .eq('ativo', true);

        if (resultado.error) {
            res.status(500).json({ erro: 'Erro ao consultar templates.' });
            return;
        }

        res.json(resultado.data);
        return;
    }

    // ---- POST: Criar template ----
    if (req.method === 'POST') {
        // Verificar se é coordenador
        if (utilizador.role !== 'coordenador') {
            res.status(403).json({ erro: 'Apenas coordenadores podem criar templates.' });
            return;
        }

        var nome = req.body.nome;
        var conteudo = req.body.conteudo;
        var prioridade = req.body.prioridade;
        var tipo = req.body.tipo;

        // Verificar campos obrigatórios
        if (!nome || !conteudo) {
            res.status(400).json({ erro: 'Nome e conteúdo são obrigatórios.' });
            return;
        }

        // Valores padrão
        if (!prioridade) {
            prioridade = 'normal';
        }
        if (!tipo) {
            tipo = 'geral';
        }

        // Inserir o novo template
        var insercao = await supabase
            .from('templates')
            .insert({
                nome: nome,
                conteudo: conteudo,
                prioridade: prioridade,
                tipo: tipo,
                ativo: true
            })
            .select('*');

        if (insercao.error) {
            res.status(500).json({ erro: 'Erro ao criar template.' });
            return;
        }

        res.status(201).json(insercao.data[0]);
        return;
    }

    // Método não suportado
    res.status(405).json({ erro: 'Método não permitido.' });
};
