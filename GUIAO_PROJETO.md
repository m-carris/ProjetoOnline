# 📋 GUIÃO DO PROJETO — Sistema de Notificações do Coordenador

> Este guião lista **todos os ficheiros criados**, explica para que servem,
> e dá-te uma **ordem de trabalho** para desenvolveres o projeto passo a passo.

---

## 📁 Estrutura Completa do Projeto

```
Project/
├── estagio.md                          ← Briefing do estágio (leitura)
├── GUIAO.md                            ← Guião de aprendizagem (leitura)
├── GUIAO_PROJETO.md                    ← ESTE FICHEIRO — guião de desenvolvimento
├── .gitignore                          ← Ficheiros a ignorar pelo Git
│
├── docs/
│   └── arquitetura.md                  ← Diagrama e documentação da arquitetura
│
├── backend/                            ← 🔧 SERVIDOR (NestJS + TypeScript)
│   ├── docker-compose.yml              ← Base de dados PostgreSQL (Docker)
│   ├── .env.example                    ← Template das variáveis de ambiente
│   ├── .gitignore                      ← Ignorar node_modules, .env, etc.
│   ├── package.json                    ← Dependências do backend
│   ├── tsconfig.json                   ← Configuração TypeScript
│   └── src/
│       ├── main.ts                     ← Ponto de entrada do servidor
│       ├── app.module.ts               ← Módulo raiz (junta tudo)
│       │
│       ├── auth/                       ← 🔐 AUTENTICAÇÃO
│       │   ├── auth.module.ts          ← Módulo de autenticação
│       │   ├── auth.controller.ts      ← Rotas: POST /auth/login
│       │   ├── auth.service.ts         ← Lógica: validar credenciais, gerar JWT
│       │   ├── auth.guard.ts           ← Proteção de rotas (verificar token)
│       │   ├── dto/
│       │   │   └── login.dto.ts        ← Validação dos dados de login
│       │   └── strategies/
│       │       └── jwt.strategy.ts     ← Configuração JWT/Passport
│       │
│       ├── users/                      ← 👤 UTILIZADORES
│       │   ├── users.module.ts         ← Módulo de utilizadores
│       │   ├── users.controller.ts     ← Rotas: GET/POST /users
│       │   ├── users.service.ts        ← Lógica: criar, listar, encontrar
│       │   ├── entities/
│       │   │   └── user.entity.ts      ← Modelo da tabela "users"
│       │   └── dto/
│       │       └── create-user.dto.ts  ← Validação para criar utilizador
│       │
│       ├── messages/                   ← 📢 MENSAGENS
│       │   ├── messages.module.ts      ← Módulo de mensagens
│       │   ├── messages.controller.ts  ← Rotas: GET/POST /messages
│       │   ├── messages.service.ts     ← Lógica: criar, filtrar, histórico
│       │   ├── messages.gateway.ts     ← WebSocket: envio em tempo real
│       │   ├── entities/
│       │   │   └── message.entity.ts   ← Modelo da tabela "messages"
│       │   └── dto/
│       │       ├── create-message.dto.ts   ← Validação para criar mensagem
│       │       └── filter-messages.dto.ts  ← Validação dos filtros de pesquisa
│       │
│       └── templates/                  ← ⚡ MENSAGENS RÁPIDAS
│           ├── templates.module.ts     ← Módulo de templates
│           ├── templates.controller.ts ← Rotas: CRUD /templates
│           ├── templates.service.ts    ← Lógica: criar, listar, seed
│           ├── entities/
│           │   └── template.entity.ts  ← Modelo da tabela "templates"
│           └── dto/
│               └── create-template.dto.ts ← Validação para criar template
│
├── backoffice/                         ← 🖥️ INTERFACE WEB (Vue.js 3)
│   ├── package.json                    ← Dependências do backoffice
│   └── src/
│       ├── main.ts                     ← Ponto de entrada Vue.js
│       ├── App.vue                     ← Componente raiz
│       │
│       ├── router/
│       │   └── index.ts                ← Rotas da aplicação (navegação)
│       │
│       ├── stores/                     ← Estado global (Pinia)
│       │   ├── auth.ts                 ← Estado de autenticação
│       │   └── messages.ts             ← Estado de mensagens/templates
│       │
│       ├── services/                   ← Comunicação com o backend
│       │   ├── api.ts                  ← Cliente HTTP (Axios)
│       │   └── websocket.ts            ← Cliente WebSocket (Socket.io)
│       │
│       ├── views/                      ← Páginas da aplicação
│       │   ├── LoginView.vue           ← Página de login
│       │   ├── DashboardView.vue       ← Painel principal
│       │   ├── MessagesView.vue        ← Envio de mensagens
│       │   └── HistoryView.vue         ← Histórico com filtros
│       │
│       ├── components/                 ← Componentes reutilizáveis
│       │   ├── Navbar.vue              ← Barra de navegação
│       │   ├── MessageForm.vue         ← Formulário de envio
│       │   ├── MessageList.vue         ← Lista de mensagens
│       │   ├── TemplateButtons.vue     ← Botões de mensagens rápidas
│       │   └── PrioritySelector.vue    ← Seletor Normal/Alta
│       │
│       ├── types/
│       │   └── index.ts                ← Interfaces TypeScript
│       │
│       └── assets/styles/
│           └── main.css                ← Estilos globais
│
└── extension/                          ← 🔔 EXTENSÃO CHROME (Operadores)
    ├── manifest.json                   ← Configuração da extensão
    ├── popup/
    │   ├── popup.html                  ← Estrutura HTML do popup
    │   ├── popup.css                   ← Estilos do popup
    │   └── popup.ts                    ← Lógica do popup
    ├── background/
    │   └── service-worker.ts           ← WebSocket + push notifications
    ├── types/
    │   └── index.ts                    ← Interfaces TypeScript
    └── assets/icons/
        └── README.md                   ← Instruções para criar ícones
```

---

## 🚀 ORDEM DE TRABALHO — Passo a Passo

### FASE 1: Setup Inicial (Semana 1)

#### Passo 1.1 — Instalar ferramentas
- [ ] Instalar Node.js (https://nodejs.org/)
- [ ] Instalar Docker Desktop (https://docker.com/)
- [ ] Instalar Git (https://git-scm.com/)
- [ ] Instalar VS Code + extensões recomendadas

#### Passo 1.2 — Inicializar o backend NestJS
```bash
cd backend
npm install -g @nestjs/cli
nest new . --skip-git
```
Isto vai gerar os ficheiros base do NestJS. Depois instalar dependências:
```bash
npm install @nestjs/config @nestjs/typeorm typeorm pg
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
npm install bcrypt class-validator class-transformer
npm install -D @types/bcrypt @types/passport-jwt
```

#### Passo 1.3 — Iniciar a base de dados
```bash
cd backend
copy .env.example .env
docker-compose up -d
```

#### Passo 1.4 — Inicializar o backoffice Vue.js
```bash
npm create vite@latest backoffice -- --template vue-ts
cd backoffice
npm install vue-router@4 pinia axios socket.io-client
```

---

### FASE 2: Backend — Autenticação (Semana 2)

#### Passo 2.1 — Criar o modelo User
- [ ] Implementar `backend/src/users/entities/user.entity.ts`
- [ ] Implementar `backend/src/users/dto/create-user.dto.ts`
- [ ] Implementar `backend/src/users/users.service.ts`
- [ ] Implementar `backend/src/users/users.controller.ts`
- [ ] Implementar `backend/src/users/users.module.ts`

#### Passo 2.2 — Criar a autenticação
- [ ] Implementar `backend/src/auth/dto/login.dto.ts`
- [ ] Implementar `backend/src/auth/strategies/jwt.strategy.ts`
- [ ] Implementar `backend/src/auth/auth.guard.ts`
- [ ] Implementar `backend/src/auth/auth.service.ts`
- [ ] Implementar `backend/src/auth/auth.controller.ts`
- [ ] Implementar `backend/src/auth/auth.module.ts`

#### Passo 2.3 — Configurar o módulo raiz
- [ ] Implementar `backend/src/app.module.ts` (importar todos os módulos)
- [ ] Implementar `backend/src/main.ts` (arrancar o servidor)

#### Passo 2.4 — Testar
```bash
cd backend
npm run start:dev
```
Testar com Thunder Client ou Postman:
- POST http://localhost:3000/auth/login → `{ "username": "admin", "password": "123456" }`

---

### FASE 3: Backend — Mensagens e Templates (Semana 3-4)

#### Passo 3.1 — Criar o modelo Message
- [ ] Implementar `backend/src/messages/entities/message.entity.ts`
- [ ] Implementar `backend/src/messages/dto/create-message.dto.ts`
- [ ] Implementar `backend/src/messages/dto/filter-messages.dto.ts`
- [ ] Implementar `backend/src/messages/messages.service.ts`
- [ ] Implementar `backend/src/messages/messages.controller.ts`

#### Passo 3.2 — WebSocket Gateway
- [ ] Implementar `backend/src/messages/messages.gateway.ts`
- [ ] Implementar `backend/src/messages/messages.module.ts`

#### Passo 3.3 — Templates
- [ ] Implementar `backend/src/templates/entities/template.entity.ts`
- [ ] Implementar `backend/src/templates/dto/create-template.dto.ts`
- [ ] Implementar `backend/src/templates/templates.service.ts`
- [ ] Implementar `backend/src/templates/templates.controller.ts`
- [ ] Implementar `backend/src/templates/templates.module.ts`

#### Passo 3.4 — Testar tudo
- POST /messages com token JWT → deve guardar e emitir via WebSocket
- GET /messages?search=acidente → deve filtrar
- GET /templates → deve listar templates

---

### FASE 4: Backoffice — Interface do Coordenador (Semana 5-7)

#### Passo 4.1 — Estrutura base
- [ ] Implementar `backoffice/src/main.ts`
- [ ] Implementar `backoffice/src/App.vue`
- [ ] Implementar `backoffice/src/types/index.ts`
- [ ] Implementar `backoffice/src/assets/styles/main.css`

#### Passo 4.2 — Serviços
- [ ] Implementar `backoffice/src/services/api.ts`
- [ ] Implementar `backoffice/src/services/websocket.ts`

#### Passo 4.3 — Estado global
- [ ] Implementar `backoffice/src/stores/auth.ts`
- [ ] Implementar `backoffice/src/stores/messages.ts`

#### Passo 4.4 — Router e Login
- [ ] Implementar `backoffice/src/router/index.ts`
- [ ] Implementar `backoffice/src/views/LoginView.vue`

#### Passo 4.5 — Componentes
- [ ] Implementar `backoffice/src/components/Navbar.vue`
- [ ] Implementar `backoffice/src/components/PrioritySelector.vue`
- [ ] Implementar `backoffice/src/components/TemplateButtons.vue`
- [ ] Implementar `backoffice/src/components/MessageForm.vue`
- [ ] Implementar `backoffice/src/components/MessageList.vue`

#### Passo 4.6 — Páginas
- [ ] Implementar `backoffice/src/views/DashboardView.vue`
- [ ] Implementar `backoffice/src/views/MessagesView.vue`
- [ ] Implementar `backoffice/src/views/HistoryView.vue`

```bash
cd backoffice
npm run dev
```
Testar no browser em http://localhost:5173

---

### FASE 5: Extensão Chrome (Semana 8-10)

#### Passo 5.1 — Popup
- [ ] Implementar `extension/popup/popup.ts` (→ compilar para popup.js)
- [ ] Implementar `extension/popup/popup.html`
- [ ] Implementar `extension/popup/popup.css`

#### Passo 5.2 — Service Worker (Background)
- [ ] Implementar `extension/background/service-worker.ts` (→ compilar para .js)
- [ ] Configurar conexão WebSocket
- [ ] Implementar push notifications

#### Passo 5.3 — Testar
- [ ] Ir a chrome://extensions/
- [ ] Ativar "Modo de programador"
- [ ] Carregar pasta `extension` sem compactar
- [ ] Fazer login na extensão
- [ ] Enviar mensagem do backoffice → deve aparecer notificação

#### Passo 5.4 — Criar ícones
- [ ] Criar icon16.png, icon48.png, icon128.png

---

### FASE 6: Integração e Polimento (Semana 11-12)

- [ ] Testar fluxo completo: Login → Enviar → Receber notificação
- [ ] Testar mensagens de alta prioridade (som/destaque)
- [ ] Testar filtros e pesquisa no histórico
- [ ] Testar templates/mensagens rápidas
- [ ] Corrigir bugs
- [ ] Melhorar UI/UX
- [ ] Preparar demonstração final

---

## 📝 Resumo dos Ficheiros — Referência Rápida

| Ficheiro | Descrição |
|----------|-----------|
| `backend/docker-compose.yml` | Cria a base de dados PostgreSQL via Docker |
| `backend/.env.example` | Template de variáveis de ambiente (copiar para .env) |
| `backend/src/main.ts` | Arranca o servidor NestJS na porta 3000 |
| `backend/src/app.module.ts` | Módulo raiz — importa todos os outros módulos |
| `backend/src/auth/*` | Login, JWT, proteção de rotas |
| `backend/src/users/*` | CRUD de utilizadores (coordenadores e operadores) |
| `backend/src/messages/*` | Envio, listagem, filtro e WebSocket de mensagens |
| `backend/src/templates/*` | CRUD de mensagens rápidas pré-definidas |
| `backoffice/src/main.ts` | Arranca a app Vue.js |
| `backoffice/src/router/index.ts` | Define as páginas e proteção de rotas |
| `backoffice/src/stores/auth.ts` | Estado de login (token, user) |
| `backoffice/src/stores/messages.ts` | Estado de mensagens e templates |
| `backoffice/src/services/api.ts` | Cliente HTTP com token JWT automático |
| `backoffice/src/services/websocket.ts` | Conexão WebSocket para tempo real |
| `backoffice/src/views/LoginView.vue` | Página de login do coordenador |
| `backoffice/src/views/DashboardView.vue` | Painel principal com envio rápido |
| `backoffice/src/views/MessagesView.vue` | Página dedicada ao envio de mensagens |
| `backoffice/src/views/HistoryView.vue` | Histórico com pesquisa e filtros |
| `backoffice/src/components/Navbar.vue` | Barra de navegação no topo |
| `backoffice/src/components/MessageForm.vue` | Formulário de envio de mensagem |
| `backoffice/src/components/MessageList.vue` | Lista de mensagens (cards) |
| `backoffice/src/components/TemplateButtons.vue` | Botões de mensagens rápidas |
| `backoffice/src/components/PrioritySelector.vue` | Selector Normal/Alta |
| `extension/manifest.json` | Configuração da extensão Chrome |
| `extension/popup/*` | Interface do operador (popup ao clicar no ícone) |
| `extension/background/service-worker.ts` | WebSocket + push notifications (background) |
| `docs/arquitetura.md` | Documentação técnica da arquitetura |

---

## 💡 Dicas Importantes

1. **Cada ficheiro tem instruções detalhadas** — Abre qualquer ficheiro e lê os comentários no topo.
2. **Trabalha por fases** — Não saltes passos. Cada fase depende da anterior.
3. **Testa frequentemente** — Após cada passo, testa para ver se funciona.
4. **Usa o Thunder Client** (extensão VS Code) para testar a API antes de ter frontend.
5. **O `npm run start:dev`** reinicia automaticamente quando guardas ficheiros.
6. **Se algo não funcionar**, lê o erro no terminal — normalmente diz o que está mal.

---

> **Boa sorte com o projeto!** 🚀
> Segue este guião passo a passo e terás o sistema completo.
