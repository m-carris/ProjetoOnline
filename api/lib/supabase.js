// ============================================================
// SUPABASE.JS — Ligação à base de dados Supabase
// ============================================================
// Este módulo cria o "cliente" que nos permite comunicar
// com a base de dados Supabase (PostgreSQL na cloud).
//
// É usado por todas as serverless functions para ler e
// escrever dados nas tabelas.
// ============================================================

var supabaseJs = require('@supabase/supabase-js');

// Ler as variáveis de ambiente (configuradas no Vercel)
var SUPABASE_URL = process.env.SUPABASE_URL;
var SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

// Criar o cliente Supabase com a service_role key
// A service_role key tem acesso total à base de dados
// (Só é usada no backend/serverless — NUNCA no frontend!)
var supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

module.exports = supabase;
