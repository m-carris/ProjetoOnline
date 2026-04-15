// ============================================================
// API: GET/POST /api/messages
// ============================================================
// GET  → Devolve mensagens com filtros opcionais
// POST → Cria e envia uma nova mensagem (apenas coordenadores)
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

    // ---- GET: Listar mensagens com filtros ----
    if (req.method === 'GET') {
        // Começar a construir a query
        var query = supabase
            .from('mensagens')
            .select('*')
            .order('criada_em', { ascending: false });

        // Aplicar filtro de pesquisa (texto no conteúdo)
        if (req.query.search) {
            query = query.ilike('conteudo', '%' + req.query.search + '%');
        }

        // Aplicar filtro de prioridade
        if (req.query.prioridade) {
            query = query.eq('prioridade', req.query.prioridade);
        }

        // Aplicar filtro de data
        if (req.query.data) {
            // Filtrar mensagens desse dia (entre 00:00 e 23:59)
            var dataInicio = req.query.data + 'T00:00:00.000Z';
            var dataFim = req.query.data + 'T23:59:59.999Z';
            query = query.gte('criada_em', dataInicio).lte('criada_em', dataFim);
        }

        var resultado = await query;

        if (resultado.error) {
            res.status(500).json({ erro: 'Erro ao consultar mensagens.' });
            return;
        }

        // Converter nomes das colunas de snake_case para camelCase
        // para manter compatibilidade com o frontend existente
        var mensagens = [];
        for (var i = 0; i < resultado.data.length; i = i + 1) {
            mensagens.push(converterParaCamelCase(resultado.data[i]));
        }

        res.json(mensagens);
        return;
    }

    // ---- POST: Criar nova mensagem ----
    if (req.method === 'POST') {
        // Verificar se é coordenador
        if (utilizador.role !== 'coordenador') {
            res.status(403).json({ erro: 'Apenas coordenadores podem enviar mensagens.' });
            return;
        }

        var conteudo = req.body.conteudo;
        var prioridade = req.body.prioridade;
        var tipo = req.body.tipo;
        var destinatario = req.body.destinatario;

        // Verificar conteúdo
        if (!conteudo) {
            res.status(400).json({ erro: 'O conteúdo da mensagem é obrigatório.' });
            return;
        }

        // Valores padrão
        if (!prioridade) {
            prioridade = 'normal';
        }
        if (!tipo) {
            tipo = 'geral';
        }
        if (!destinatario) {
            destinatario = 'todos';
        }

        // Inserir a mensagem na base de dados
        var insercao = await supabase
            .from('mensagens')
            .insert({
                conteudo: conteudo,
                prioridade: prioridade,
                tipo: tipo,
                destinatario: destinatario,
                remetente_id: utilizador.id,
                remetente_nome: utilizador.nome
            })
            .select('*');

        if (insercao.error) {
            res.status(500).json({ erro: 'Erro ao criar mensagem.' });
            return;
        }

        // Devolver a mensagem criada (em camelCase)
        res.status(201).json(converterParaCamelCase(insercao.data[0]));
        return;
    }

    // Método não suportado
    res.status(405).json({ erro: 'Método não permitido.' });
};

// ============================================================
// Função auxiliar: converter colunas snake_case → camelCase
// ============================================================
// A base de dados usa snake_case (remetente_id, criada_em)
// mas o frontend espera camelCase (remetenteId, criadaEm).

function converterParaCamelCase(mensagem) {
    return {
        id: mensagem.id,
        conteudo: mensagem.conteudo,
        prioridade: mensagem.prioridade,
        tipo: mensagem.tipo,
        destinatario: mensagem.destinatario,
        remetenteId: mensagem.remetente_id,
        remetenteNome: mensagem.remetente_nome,
        criadaEm: mensagem.criada_em
    };
}
