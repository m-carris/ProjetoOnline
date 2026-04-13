# 📐 Arquitetura do Sistema

## Visão Geral

O sistema é composto por **3 componentes** que comunicam entre si:

```
┌──────────────────────┐     HTTP/REST      ┌──────────────────┐
│   BACKOFFICE (Web)   │ ◄───────────────► │    BACKEND API   │
│   Vue.js 3 + Vite    │                    │   NestJS + TS    │
│   (Coordenador)      │     WebSocket      │   Socket.io      │
│                      │ ◄───────────────► │                  │
└──────────────────────┘                    │   PostgreSQL     │
                                            │   (Docker)       │
┌──────────────────────┐     HTTP/REST      │                  │
│  EXTENSÃO CHROME     │ ◄───────────────► │                  │
│  Manifest V3         │                    │                  │
│  (Operadores)        │     WebSocket      │                  │
│                      │ ◄───────────────► │                  │
└──────────────────────┘                    └──────────────────┘
```

## Fluxo de Comunicação

### Enviar Mensagem (Coordenador → Operadores)
1. Coordenador preenche o formulário no **Backoffice**
2. Backoffice envia POST /messages ao **Backend**
3. Backend guarda a mensagem no **PostgreSQL**
4. Backend emite a mensagem via **WebSocket**
5. **Extensão** recebe a mensagem em tempo real
6. Extensão mostra uma **push notification** no browser

### Login
1. Utilizador (coordenador ou operador) introduz credenciais
2. POST /auth/login ao Backend
3. Backend valida e retorna **JWT token**
4. Token é guardado (localStorage no Backoffice, chrome.storage na Extensão)
5. Todas as chamadas seguintes incluem o token no header

## Tabelas da Base de Dados

### users
| Campo     | Tipo    | Notas                        |
|-----------|---------|------------------------------|
| id        | int     | PK, auto-increment          |
| username  | varchar | Único                        |
| password  | varchar | Hash bcrypt                  |
| role      | enum    | 'coordenador' ou 'operador' |
| nome      | varchar | Nome completo                |
| createdAt | date    | Automático                   |

### messages
| Campo        | Tipo    | Notas                       |
|--------------|---------|------------------------------|
| id           | int     | PK, auto-increment          |
| conteudo     | text    | Texto da mensagem            |
| prioridade   | enum    | 'normal' ou 'alta'          |
| tipo         | varchar | acidente, transito, etc.    |
| destinatario | varchar | 'todos' ou nome do grupo    |
| remetenteId  | int     | FK → users.id               |
| createdAt    | date    | Automático                   |

### templates
| Campo      | Tipo    | Notas                        |
|------------|---------|------------------------------|
| id         | int     | PK, auto-increment          |
| nome       | varchar | Ex: "Acidente"              |
| conteudo   | text    | Texto pré-definido           |
| prioridade | enum    | 'normal' ou 'alta'          |
| tipo       | varchar | Categoria do template        |
| ativo      | boolean | Soft delete                  |

## API Endpoints

### Autenticação
- `POST /auth/login` — Login (retorna JWT)

### Utilizadores
- `GET /users` — Listar utilizadores
- `POST /users` — Criar utilizador

### Mensagens
- `POST /messages` — Enviar mensagem
- `GET /messages` — Listar com filtros (search, data, prioridade)
- `GET /messages/recent` — Últimas N mensagens

### Templates
- `GET /templates` — Listar templates ativos
- `POST /templates` — Criar template
- `PATCH /templates/:id` — Atualizar
- `DELETE /templates/:id` — Desativar

### WebSocket
- Evento `nova-mensagem` — Emitido quando uma mensagem é criada
