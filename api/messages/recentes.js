// ============================================================
// API: GET /api/messages/recentes
// ============================================================
// Devolve as últimas N mensagens (padrão: 20).
// Parâmetro opcional: ?limite=10
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

    // Apenas GET
    if (req.method !== 'GET') {
        res.status(405).json({ erro: 'Método não permitido.' });
        return;
    }

    // Verificar token
    var utilizador = auth.verificarToken(req);
    if (!utilizador) {
        res.status(401).json({ erro: 'Token não fornecido ou inválido.' });
        return;
    }

    // Determinar o limite
    var limite = 20;
    if (req.query.limite) {
        limite = parseInt(req.query.limite);
    }

    // Buscar as mensagens mais recentes
    var resultado = await supabase
        .from('mensagens')
        .select('*')
        .order('criada_em', { ascending: false })
        .limit(limite);

    if (resultado.error) {
        res.status(500).json({ erro: 'Erro ao consultar mensagens.' });
        return;
    }

    // Converter para camelCase
    var mensagens = [];
    for (var i = 0; i < resultado.data.length; i = i + 1) {
        mensagens.push(converterParaCamelCase(resultado.data[i]));
    }

    res.json(mensagens);
};

// Converter colunas snake_case → camelCase
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
