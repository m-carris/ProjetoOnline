// ============================================================
// AUTH.JS — Funções auxiliares de autenticação
// ============================================================
// Este módulo contém funções partilhadas pelas serverless
// functions para verificar tokens JWT.
// ============================================================

var jwt = require('jsonwebtoken');

// O segredo para verificar os tokens JWT
var SEGREDO_JWT = process.env.JWT_SECRET;

// ============================================================
// Função: verificarToken
// ============================================================
// Recebe um objeto 'req' (pedido HTTP) e verifica se tem
// um token JWT válido no cabeçalho Authorization.
// Devolve os dados do utilizador se o token for válido,
// ou null se for inválido.

function verificarToken(req) {
    // Buscar o cabeçalho Authorization
    var cabecalho = req.headers['authorization'];

    // Se não existe cabeçalho, não há token
    if (!cabecalho) {
        return null;
    }

    // O token vem no formato "Bearer XXXXXX"
    var partes = cabecalho.split(' ');

    if (partes.length < 2) {
        return null;
    }

    var token = partes[1];

    if (!token) {
        return null;
    }

    // Tentar verificar o token
    try {
        var dadosDoToken = jwt.verify(token, SEGREDO_JWT);
        return dadosDoToken;
    } catch (erro) {
        return null;
    }
}

// ============================================================
// Função: adicionarCORS
// ============================================================
// Adiciona os cabeçalhos CORS à resposta para que o backoffice
// e a extensão possam comunicar com a API.

function adicionarCORS(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

module.exports = {
    verificarToken: verificarToken,
    adicionarCORS: adicionarCORS
};
