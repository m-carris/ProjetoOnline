// ============================================================
// API: POST /api/auth/login
// ============================================================
// Verifica o username e password, devolve um token JWT.
// Equivalente à rota POST /auth/login do servidor Express.
// ============================================================

var bcryptjs = require('bcryptjs');
var jwt = require('jsonwebtoken');
var supabase = require('../lib/supabase');
var auth = require('../lib/auth');

var SEGREDO_JWT = process.env.JWT_SECRET;
var DURACAO_TOKEN = '24h';

module.exports = async function handler(req, res) {
    // Adicionar cabeçalhos CORS
    auth.adicionarCORS(res);

    // Responder a pedidos OPTIONS (preflight do CORS)
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Esta rota só aceita POST
    if (req.method !== 'POST') {
        res.status(405).json({ erro: 'Método não permitido.' });
        return;
    }

    // Buscar o username e password enviados pelo cliente
    var username = req.body.username;
    var password = req.body.password;

    // Verificar se os campos foram preenchidos
    if (!username || !password) {
        res.status(400).json({ erro: 'Username e password são obrigatórios.' });
        return;
    }

    // Buscar o utilizador na base de dados Supabase
    var resultado = await supabase
        .from('utilizadores')
        .select('*')
        .eq('username', username)
        .limit(1);

    // Se houve erro na consulta
    if (resultado.error) {
        res.status(500).json({ erro: 'Erro ao consultar a base de dados.' });
        return;
    }

    // Se não encontrou nenhum utilizador
    if (resultado.data.length === 0) {
        res.status(401).json({ erro: 'Username ou password incorretos.' });
        return;
    }

    var utilizador = resultado.data[0];

    // Comparar a password enviada com a password encriptada
    var passwordCorreta = bcryptjs.compareSync(password, utilizador.password);

    if (!passwordCorreta) {
        res.status(401).json({ erro: 'Username ou password incorretos.' });
        return;
    }

    // Criar o token JWT
    var dadosParaToken = {
        id: utilizador.id,
        username: utilizador.username,
        role: utilizador.role,
        nome: utilizador.nome
    };

    var token = jwt.sign(dadosParaToken, SEGREDO_JWT, { expiresIn: DURACAO_TOKEN });

    // Devolver o token e os dados do utilizador
    res.json({
        token: token,
        utilizador: {
            id: utilizador.id,
            username: utilizador.username,
            role: utilizador.role,
            nome: utilizador.nome
        }
    });
};
