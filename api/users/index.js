// ============================================================
// API: GET/POST /api/users
// ============================================================
// GET  → Devolve a lista de utilizadores (sem passwords)
// POST → Cria um novo utilizador (apenas coordenadores)
// ============================================================

var bcryptjs = require('bcryptjs');
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

    // Verificar se o utilizador tem um token válido
    var utilizador = auth.verificarToken(req);
    if (!utilizador) {
        res.status(401).json({ erro: 'Token não fornecido ou inválido. Faz login primeiro.' });
        return;
    }

    // ---- GET: Listar utilizadores ----
    if (req.method === 'GET') {
        var resultado = await supabase
            .from('utilizadores')
            .select('id, username, role, nome');

        if (resultado.error) {
            res.status(500).json({ erro: 'Erro ao consultar a base de dados.' });
            return;
        }

        res.json(resultado.data);
        return;
    }

    // ---- POST: Criar utilizador ----
    if (req.method === 'POST') {
        // Verificar se é coordenador
        if (utilizador.role !== 'coordenador') {
            res.status(403).json({ erro: 'Apenas coordenadores podem criar utilizadores.' });
            return;
        }

        var username = req.body.username;
        var password = req.body.password;
        var role = req.body.role;
        var nome = req.body.nome;

        // Verificar campos obrigatórios
        if (!username || !password || !role || !nome) {
            res.status(400).json({ erro: 'Todos os campos são obrigatórios: username, password, role, nome.' });
            return;
        }

        // Verificar se o role é válido
        if (role !== 'coordenador' && role !== 'operador') {
            res.status(400).json({ erro: 'O role deve ser "coordenador" ou "operador".' });
            return;
        }

        // Verificar se o username já existe
        var verificacao = await supabase
            .from('utilizadores')
            .select('id')
            .eq('username', username)
            .limit(1);

        if (verificacao.data && verificacao.data.length > 0) {
            res.status(400).json({ erro: 'Já existe um utilizador com esse username.' });
            return;
        }

        // Encriptar a password
        var passwordEncriptada = bcryptjs.hashSync(password, 10);

        // Inserir o novo utilizador na base de dados
        var insercao = await supabase
            .from('utilizadores')
            .insert({
                username: username,
                password: passwordEncriptada,
                role: role,
                nome: nome
            })
            .select('id, username, role, nome');

        if (insercao.error) {
            res.status(500).json({ erro: 'Erro ao criar utilizador.' });
            return;
        }

        res.status(201).json(insercao.data[0]);
        return;
    }

    // Método não suportado
    res.status(405).json({ erro: 'Método não permitido.' });
};
