-- ============================================================
-- SUPABASE SETUP — Corre este SQL no SQL Editor do Supabase
-- ============================================================
-- Este ficheiro cria as tabelas e os dados iniciais necessários
-- para o sistema de notificações funcionar.
--
-- COMO USAR:
-- 1. Vai ao Supabase Dashboard → SQL Editor
-- 2. Cola TODO este conteúdo
-- 3. Clica "Run"
-- ============================================================


-- ============================================================
-- PASSO 1: Criar as tabelas
-- ============================================================

-- Tabela de utilizadores (coordenadores e operadores)
CREATE TABLE IF NOT EXISTS utilizadores (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('coordenador', 'operador')),
    nome TEXT NOT NULL
);

-- Tabela de mensagens
CREATE TABLE IF NOT EXISTS mensagens (
    id SERIAL PRIMARY KEY,
    conteudo TEXT NOT NULL,
    prioridade TEXT NOT NULL DEFAULT 'normal',
    tipo TEXT NOT NULL DEFAULT 'geral',
    destinatario TEXT NOT NULL DEFAULT 'todos',
    remetente_id INTEGER REFERENCES utilizadores(id),
    remetente_nome TEXT NOT NULL,
    criada_em TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de templates (mensagens rápidas)
CREATE TABLE IF NOT EXISTS templates (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    conteudo TEXT NOT NULL,
    prioridade TEXT NOT NULL DEFAULT 'normal',
    tipo TEXT NOT NULL DEFAULT 'geral',
    ativo BOOLEAN DEFAULT TRUE
);


-- ============================================================
-- PASSO 2: Inserir dados iniciais
-- ============================================================

-- Utilizadores padrão (password = "1234" encriptada com bcrypt)
INSERT INTO utilizadores (username, password, role, nome) VALUES
    ('coordenador', '$2a$10$SNPfJQ4jInwb9GXCH5wU3OhQkM2uHUy/qiKUK2uRgTnI9dDY4.DTS', 'coordenador', 'João Silva (Coordenador)'),
    ('operador', '$2a$10$R4pehJYR4modngUiev1ge.25eHphnSd0fZ9TwMbiQAQe0u31/fH8u', 'operador', 'Maria Santos (Operadora)')
ON CONFLICT (username) DO NOTHING;

-- Templates padrão
INSERT INTO templates (nome, conteudo, prioridade, tipo) VALUES
    ('Acidente', 'Atenção: acidente reportado na zona. Proceder com cuidado e seguir desvios indicados.', 'alta', 'acidente'),
    ('Trânsito Intenso', 'Aviso: trânsito intenso na zona. Possíveis atrasos nas carreiras.', 'normal', 'transito'),
    ('Avaria', 'Informação: viatura com avaria reportada. Aguardar instruções de substituição.', 'alta', 'avaria'),
    ('Desvio', 'Atenção: desvio em vigor na zona. Seguir percurso alternativo indicado.', 'normal', 'desvio');


-- ============================================================
-- PASSO 3: Ativar Realtime na tabela de mensagens
-- ============================================================
-- Isto permite que o backoffice receba mensagens novas
-- em tempo real (substitui o Socket.io).

ALTER PUBLICATION supabase_realtime ADD TABLE mensagens;
