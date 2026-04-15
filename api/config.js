// ============================================================
// API: GET /api/config
// ============================================================
// Devolve a configuração pública do Supabase (URL e anon key).
// A anon key é SEGURA para usar no frontend — é uma chave
// pública que, junto com Row Level Security (RLS), controla
// o acesso aos dados.
// ============================================================

var auth = require('./lib/auth');

module.exports = function handler(req, res) {
    // Adicionar cabeçalhos CORS
    auth.adicionarCORS(res);

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    res.json({
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseAnonKey: process.env.SUPABASE_ANON_KEY
    });
};
