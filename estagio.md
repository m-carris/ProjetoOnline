# 📄 Briefing de Estágio

## Sistema de Notificações do Coordenador (Extensão de Browser)

## 🏢 Contexto

No contexto da operação diária, a comunicação entre coordenadores e operadores de tráfego é crítica para garantir a eficiência e resposta rápida a incidentes.

Atualmente, essa comunicação pode estar dispersa por diferentes canais (telefone, rádio, etc.), o que pode dificultar o registo, rastreabilidade e rapidez na transmissão da informação.

## 🎯 Objetivo do Projeto

Desenvolver um sistema simples e eficiente que permita ao coordenador enviar notificações em tempo real para os operadores de tráfego.

A solução deve funcionar com o mínimo de instalação e fricção para os utilizadores.

## 🧠 Descrição da Solução

A solução consiste em dois componentes principais:

### 🧑‍💼 Backoffice (Coordenador)

Interface web onde o coordenador:

- Envia mensagens
- Define prioridades
- Consulta histórico

### 🧑‍💻 Extensão de Browser (Operadores)

Nos computadores dos operadores basta:

- Ter uma extensão de browser instalada (Chrome/Edge)

A extensão:

- Recebe mensagens em tempo real
- Mostra push notifications
- Permite consultar mensagens recentes

> 👉 Não é necessária instalação de aplicações adicionais — apenas a extensão.

## 🧩 Funcionalidades Principais

### 1. 👤 Gestão de Utilizadores (Simples)

Dois tipos de utilizador:

- **Coordenador** (acesso ao backoffice)
- **Operador** (apenas extensão)
- Autenticação básica (login)

### 2. 📢 Envio de Mensagens (Backoffice)

O coordenador deve conseguir:

- Enviar mensagens para:
  - Todos os operadores
  - Grupos (ex: por zona — opcional)
- Definir prioridade da mensagem:
  - **Normal**
  - **Alta** (com destaque visual e/ou som)

**Exemplo:**

> "Atenção: acidente na Av. de Roma, desviar linha 735"

### 3. 🔔 Notificações em Tempo Real (Extensão)

- Receção imediata de mensagens
- Push notification no browser
- Destaque para mensagens urgentes
- Possibilidade de som/alerta visual

### 4. 📜 Histórico de Mensagens

**No backoffice:**

- Lista de mensagens enviadas
- Pesquisa por texto
- Filtro por data

**Na extensão:**

- Visualização simplificada de mensagens recentes

### 5. ⚡ Mensagens Rápidas (Templates)

No backoffice, o coordenador deve ter acesso a botões pré-definidos:

- Acidente
- Trânsito intenso
- Avaria
- Desvio

Com possibilidade de adicionar uma descrição curta antes de enviar.

## 🏗️ Arquitetura Sugerida

| Componente | Descrição |
|---|---|
| **Extensão (Operadores)** | Interface leve (popup ou notificações); Comunicação em tempo real com backend |
| **Backoffice (Coordenador)** | Aplicação web simples; Interface para envio e gestão de mensagens |
| **Backend** | API REST; WebSockets (tempo real) |
| **Base de Dados** | Utilizadores; Mensagens |

## 🔧 Tecnologias Sugeridas

- **Frontend (extensão):** JavaScript / TypeScript
- **Backoffice:** React (opcional)
- **Backend:** Node.js (Socket.io) ou Python (FastAPI)
- **Base de dados:** Firebase / Supabase / PostgreSQL

## 📅 Planeamento (4 Meses)

### Mês 1

- Definição da arquitetura
- Setup do projeto
- Sistema de login
- Envio de mensagens básico (backoffice → extensão)

### Mês 2

- Implementação de WebSockets
- Push notifications na extensão
- Interface inicial do backoffice

### Mês 3

- Prioridades de mensagens
- Templates
- Melhorias de UI/UX

### Mês 4

- Histórico e pesquisa
- Estabilização do sistema
- Testes
- Preparação da demonstração final

## 📦 Entregáveis

- Extensão de browser funcional
- Backoffice funcional (web)
- Backend funcional
- Código fonte
- Documentação técnica básica
- Demonstração final

## ✅ Critérios de Avaliação

- Funcionalidade (cumprimento dos requisitos)
- Qualidade do código
- Usabilidade
- Performance e fiabilidade
- Clareza da arquitetura
- Capacidade de resolução de problemas

## 🚀 Possíveis Extensões (Opcional)

- Confirmação de leitura das mensagens
- Dashboard de atividade
- Envio para grupos dinâmicos
- Integração com eventos operacionais

## 📝 Nota Final

O foco principal do projeto é a criação de uma solução:

- **Simples**
- **Funcional**
- **De fácil adoção pelos operadores**

> 👉 A extensão deve exigir zero complexidade para o utilizador final.
