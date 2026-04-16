# 📖 EXPLICAÇÃO COMPLETA DO PROJETO — Sistema de Notificações Carris

> Este documento explica, de forma simples e detalhada, como funciona todo o sistema.
> Foi escrito para que qualquer pessoa — mesmo sem conhecimentos técnicos — consiga ler, perceber e apresentar este projeto com confiança.

---

## 1. 🧭 Visão Geral do Projeto

### O que faz esta aplicação?

Imagina que trabalhas na Carris (a empresa de autocarros de Lisboa). Há um **coordenador** responsável por gerir o tráfego e vários **operadores** que estão nos seus postos de trabalho. Quando acontece alguma coisa — um acidente, trânsito intenso, uma avaria num autocarro, ou a necessidade de um desvio — o coordenador precisa de avisar rapidamente todos os operadores.

Este sistema faz exatamente isso: permite ao coordenador **enviar mensagens/notificações em tempo real** para os operadores. É como um sistema de avisos interno, onde o coordenador escreve "Acidente na Av. da República — desviar linha 735" e todos os operadores recebem esse aviso instantaneamente nos seus computadores.

### Que problema resolve?

Antes deste sistema, a comunicação entre coordenadores e operadores podia estar dispersa por vários canais — telefone, rádio, mensagens de texto — o que tornava tudo mais lento, menos organizado e difícil de rastrear. Este projeto centraliza essa comunicação num único sítio, com registo de histórico e entrega imediata.

### Quem são os utilizadores?

Existem dois tipos de utilizadores:

| Tipo | O que faz | Como acede |
|------|-----------|------------|
| **Coordenador** | Envia mensagens, gere utilizadores, consulta histórico | Através de uma **página web** (o "backoffice") |
| **Operador** | Recebe e consulta mensagens | Através de uma **extensão no browser** (Chrome ou Edge) |

---

## 2. 🏗️ Arquitetura Geral

### Como está dividido o projeto?

O projeto tem **4 partes principais** que trabalham em conjunto:

1. **API (Serverless Functions)** — As "funções inteligentes" que vivem na nuvem e processam todos os pedidos (login, enviar mensagens, buscar dados). Correm no **Vercel** (um serviço de alojamento na internet).

2. **Backoffice (Interface Web)** — A página web que o coordenador usa. É composta por ficheiros HTML, CSS e JavaScript puros — sem frameworks complicados.

3. **Extensão de Browser** — Uma extensão para Chrome ou Edge que os operadores instalam. Mostra as mensagens recebidas num pequeno painel e envia notificações automáticas.

4. **Base de Dados (Supabase)** — O "armazém" onde ficam guardados todos os dados (utilizadores, mensagens, templates). O Supabase é um serviço online que oferece uma base de dados PostgreSQL (um tipo de base de dados muito robusto e usado no mundo profissional) com funcionalidades de tempo real incluídas.

Existe também uma versão **local/offline** (pasta `backend/`) que usa ficheiros JSON como base de dados e o Socket.io para tempo real — serve para testes sem precisar de internet.

### Diagrama de como as peças comunicam

```
┌────────────────────────────────┐
│     COORDENADOR                │
│     (Backoffice — página web)  │
│                                │
│  1. Escreve uma mensagem       │
│  2. Clica "Enviar"             │
└────────────┬───────────────────┘
             │
             │  Pedido HTTP POST /api/messages
             ▼
┌────────────────────────────────┐
│     VERCEL (API Serverless)    │
│                                │
│  3. Recebe o pedido            │
│  4. Verifica se o token é      │
│     válido (autenticação)      │
│  5. Guarda a mensagem na       │
│     base de dados Supabase     │
└────────────┬───────────────────┘
             │
             │  A mensagem fica guardada no Supabase
             ▼
┌────────────────────────────────┐
│     SUPABASE (Base de Dados)   │
│                                │
│  6. Guarda a mensagem          │
│  7. Avisa em tempo real quem   │
│     estiver a "escutar"        │
│     (Supabase Realtime)        │
└──────┬─────────────┬───────────┘
       │             │
       │             │  Supabase Realtime (WebSocket)
       │             ▼
       │  ┌──────────────────────────┐
       │  │  BACKOFFICE              │
       │  │  (está a "escutar")      │
       │  │                          │
       │  │  8. Recebe a mensagem    │
       │  │     instantaneamente     │
       │  │  9. Mostra na lista      │
       │  │     lateral              │
       │  └──────────────────────────┘
       │
       │  Polling a cada 1 minuto (pedido HTTP)
       ▼
┌──────────────────────────────┐
│  OPERADORES                  │
│  (Extensão de Browser)       │
│                              │
│  10. A cada minuto, pergunta │
│      ao servidor se há       │
│      mensagens novas         │
│  11. Se sim, mostra uma      │
│      notificação no ecrã     │
│  12. O operador pode clicar  │
│      no ícone da extensão    │
│      para ver todas as       │
│      mensagens recentes      │
└──────────────────────────────┘
```

### Que tecnologias são usadas e porquê?

| Parte | Tecnologia | Porquê esta escolha? |
|-------|-----------|----------------------|
| **API** | Node.js + Serverless Functions (Vercel) | Node.js é a forma mais popular de correr JavaScript no servidor. As serverless functions do Vercel eliminam a necessidade de manter um servidor ligado 24h — cada pedido "acorda" uma função, que responde e "adormece". É gratuito para projetos pequenos. |
| **Backoffice** | HTML + CSS + JavaScript puro | Sem frameworks (como React ou Vue) — torna o código mais simples de perceber para quem está a aprender. Cada ficheiro tem um propósito claro. |
| **Extensão** | Chrome Extension Manifest V3 | É o formato atual exigido pelo Chrome e Edge para extensões. Usa JavaScript puro e as APIs nativas do browser. |
| **Base de Dados** | Supabase (PostgreSQL) | Supabase é uma alternativa gratuita e fácil de usar ao Firebase. Oferece uma base de dados real (PostgreSQL) com funcionalidades de tempo real incluídas — ou seja, consegue avisar o backoffice instantaneamente quando uma nova mensagem é guardada. |
| **Autenticação** | JWT (JSON Web Tokens) | JWT é um padrão da indústria para autenticação. Depois do login, o utilizador recebe um "bilhete digital" (token) que prova quem ele é durante 24 horas. |
| **Passwords** | bcryptjs | Biblioteca que encripta passwords de forma segura. Nunca se guarda uma password em texto — ela é transformada num código irreversível. |

---

## 3. ⚙️ Como Funciona Por Dentro

### O fluxo principal, passo a passo

Vamos seguir o que acontece quando o **coordenador envia uma mensagem**:

1. O coordenador abre o browser e vai ao endereço do backoffice (ex: `https://carris-extensao.vercel.app`).
2. Faz login com o seu username e password. O backoffice envia esses dados para a API (`POST /api/auth/login`).
3. A API verifica se o username existe na base de dados Supabase e se a password corresponde. Se estiver tudo certo, cria um **token JWT** (um "bilhete" digital) e devolve-o ao backoffice.
4. O backoffice guarda o token no **localStorage** (uma "gaveta" do browser que guarda dados entre sessões) e mostra o painel principal.
5. O backoffice liga-se ao **Supabase Realtime** — fica à "escuta" de novas mensagens na base de dados.
6. O coordenador escreve uma mensagem (ou clica num botão de mensagem rápida/template), escolhe a prioridade e clica "Enviar".
7. O backoffice envia a mensagem para a API (`POST /api/messages`) com o token no cabeçalho.
8. A API verifica o token, confirma que é um coordenador, e **insere a mensagem na base de dados Supabase**.
9. O Supabase deteta a nova inserção e avisa automaticamente o backoffice via **Realtime** — a mensagem aparece instantaneamente na lista lateral.
10. Entretanto, a **extensão dos operadores** tem um "alarme" que dispara a cada 1 minuto. Quando dispara, faz um pedido à API (`GET /api/messages/recentes`) para verificar se há mensagens novas.
11. Se houver mensagens novas (com IDs maiores que o último visto), a extensão mostra uma **notificação push** no canto do ecrã do operador.
12. O operador pode clicar no ícone da extensão para ver todas as mensagens recentes num painel organizado.

### Ficheiros e pastas mais importantes

#### 📂 `api/` — As funções que processam pedidos (serverless)

| Ficheiro | O que faz |
|----------|-----------|
| `api/auth/login.js` | Processa o login — verifica username e password, devolve um token JWT |
| `api/messages/index.js` | Duas funções num só ficheiro: GET para listar mensagens (com filtros de pesquisa, prioridade e data) e POST para criar novas mensagens |
| `api/messages/recentes.js` | Devolve as últimas N mensagens (usado pela extensão para verificar novidades) |
| `api/templates/index.js` | GET para listar templates ativos e POST para criar novos |
| `api/templates/[id].js` | PATCH para atualizar e DELETE para desativar um template específico. O `[id]` no nome significa que o ficheiro aceita qualquer número no URL (ex: `/api/templates/3`) |
| `api/users/index.js` | GET para listar utilizadores (sem passwords!) e POST para criar novos |
| `api/config.js` | Devolve a configuração pública do Supabase (URL e chave pública) para o backoffice se poder ligar ao Realtime |
| `api/lib/supabase.js` | Cria a ligação à base de dados Supabase — usado por todas as outras funções |
| `api/lib/auth.js` | Funções auxiliares: verificar tokens JWT e adicionar cabeçalhos CORS (permissões para o browser aceitar pedidos entre domínios diferentes) |

#### 📂 `backoffice/` — A interface web do coordenador

| Ficheiro | O que faz |
|----------|-----------|
| `index.html` | A estrutura da página — o "esqueleto" HTML com o formulário de login, o painel de envio de mensagens, o histórico e a gestão de utilizadores |
| `estilo.css` | Todos os estilos visuais — cores, tamanhos, posicionamentos. Usa a paleta oficial da Carris (azul `#003f8f`, amarelo `#ffd400`, etc.) com a fonte Roboto |
| `aplicacao.js` | **O ficheiro mais importante do backoffice** — contém toda a lógica: login, logout, envio de mensagens, carregamento de templates, pesquisa no histórico, gestão de utilizadores e a ligação ao Supabase Realtime |

#### 📂 `extension/` — A extensão para os operadores

| Ficheiro | O que faz |
|----------|-----------|
| `manifest.json` | O "bilhete de identidade" da extensão — diz ao Chrome o nome, permissões necessárias e que ficheiros usar |
| `popup/popup.html` | A estrutura da janelinha que aparece quando o operador clica no ícone da extensão |
| `popup/popup.css` | Os estilos visuais da janelinha (mesma paleta Carris) |
| `popup/popup.js` | A lógica do popup: login, mostrar mensagens, comunicar com o service worker |
| `background/service-worker.js` | O "trabalhador invisível" — corre em segundo plano mesmo com o popup fechado, verifica mensagens a cada minuto e mostra notificações push |

#### 📂 `backend/` — Versão local (para testes sem internet)

| Ficheiro | O que faz |
|----------|-----------|
| `servidor.js` | Um servidor Express completo com todas as rotas, Socket.io para tempo real e que serve o backoffice localmente em `http://localhost:3000` |
| `basededados.js` | Funções para ler e escrever dados em ficheiros JSON (em vez de usar Supabase) |
| `dados/` | Pasta com ficheiros JSON que funcionam como base de dados local |

#### 📄 Ficheiros na raiz

| Ficheiro | O que faz |
|----------|-----------|
| `package.json` | Lista as dependências (bibliotecas) necessárias para a versão online |
| `vercel.json` | Configuração do Vercel — define como os URLs são redirecionados (ex: `/api/*` vai para as serverless functions, tudo o resto vai para o backoffice) |
| `supabase-setup.sql` | Código SQL para criar as tabelas na base de dados Supabase — basta copiar e colar no painel do Supabase |
| `.env.example` | Modelo das variáveis de ambiente (chaves secretas) que precisam de ser configuradas |

### Conceitos técnicos explicados de forma simples

- **API REST**: É como um "balcão de atendimento" digital. O backoffice ou a extensão fazem pedidos (como "dá-me as mensagens" ou "guarda esta mensagem") e a API responde. REST é uma forma organizada de estruturar esses pedidos usando URLs e métodos como GET (pedir dados) e POST (enviar dados).

- **Serverless Functions**: São funções que vivem "na nuvem" (nos servidores do Vercel). Não precisas de ter um computador ligado 24h — cada vez que alguém faz um pedido, a função "acorda", faz o trabalho, e "adormece". É como ter um empregado que só aparece quando há trabalho.

- **JWT (JSON Web Token)**: É um "bilhete digital" que provas quem és. Depois de fazeres login, recebes este bilhete. Em cada pedido seguinte, mostras o bilhete para o servidor saber que és tu e não um estranho. O bilhete expira ao fim de 24 horas.

- **CORS (Cross-Origin Resource Sharing)**: É uma regra de segurança do browser. Normalmente, uma página web só pode falar com o seu próprio servidor. O CORS é uma "autorização especial" que permite que o backoffice e a extensão (que estão noutros endereços) falem com a API.

- **WebSocket / Supabase Realtime**: Enquanto os pedidos HTTP normais são como enviar cartas (pedimos e esperamos resposta), o Realtime é como um walkie-talkie — mantém uma ligação aberta e o servidor avisa imediatamente quando há novidades, sem precisar de perguntar.

- **Polling**: É a técnica usada pela extensão — a cada minuto, pergunta ao servidor "há novidades?". É menos eficiente que o Realtime, mas é necessário porque as extensões de browser (Manifest V3) não conseguem manter ligações permanentes.

- **Hash/Encriptação de passwords (bcrypt)**: As passwords nunca são guardadas como texto. São transformadas num código irreversível (hash). Quando fazes login, o sistema transforma a password que escreveste no mesmo tipo de código e compara — se os códigos correspondem, a password está certa.

- **localStorage**: Uma "gaveta" que o browser oferece para guardar dados. É usada para manter a sessão do utilizador — mesmo que feches e reabras o browser, os dados do login continuam lá.

- **chrome.storage**: Semelhante ao localStorage, mas específico para extensões de browser. Permite guardar dados como o token de autenticação e as últimas mensagens vistas.

---

## 4. 🧠 Decisões Técnicas

### Porque é que se usou esta stack e não outra?

O projeto foi construído com o objetivo de ser **simples, funcional e fácil de entender**. Muito provavelmente, a escolha das tecnologias foi orientada por IA (inteligência artificial), o que explica algumas decisões interessantes:

- **JavaScript puro em vez de React/Vue/Angular**: Usar JavaScript sem frameworks torna o código mais verboso (mais linhas), mas muito mais fácil de seguir para alguém que está a aprender. Não há "magia" escondida — tudo o que acontece é visível no código.

- **Vercel + Supabase em vez de um servidor próprio**: Esta combinação permite ter o projeto online **gratuitamente** e sem precisar de gerir servidores. O Vercel aloja o código e executa as funções, o Supabase fornece a base de dados. É uma escolha moderna e pragmática.

- **Duas versões do backend** (local e online): O projeto tem uma versão local (`backend/servidor.js` com ficheiros JSON e Socket.io) e uma versão online (`api/` com Supabase). Isto sugere que o projeto evoluiu — começou local para ser mais fácil de desenvolver e testar, e depois foi adaptado para funcionar online.

- **Código muito comentado em português**: Quase todas as linhas têm comentários explicativos em português. Isto é invulgar em projetos profissionais (onde os comentários são em inglês e mais escassos), mas faz todo o sentido num projeto educativo ou de estágio.

### Bibliotecas e dependências principais

| Biblioteca | Para que serve |
|-----------|----------------|
| `@supabase/supabase-js` | Permite comunicar com a base de dados Supabase (ler, escrever, escutar mudanças em tempo real) |
| `jsonwebtoken` | Cria e verifica tokens JWT para autenticação |
| `bcryptjs` | Encripta passwords de forma segura |
| `express` (só na versão local) | Cria o servidor web local |
| `cors` (só na versão local) | Permite pedidos entre diferentes origens |
| `socket.io` (só na versão local) | Comunicação em tempo real entre servidor e clientes (versão local) |

### O que seria diferente numa versão mais simples ou mais complexa?

**Versão mais simples:**
- Sem autenticação (qualquer pessoa podia enviar mensagens)
- Sem extensão de browser (os operadores usariam uma segunda página web)
- Sem Supabase — tudo com ficheiros JSON locais
- Sem templates de mensagens rápidas

**Versão mais complexa:**
- Confirmação de leitura (saber quais operadores já viram cada mensagem)
- Grupos de operadores (enviar só para uma zona geográfica)
- Dashboard com estatísticas (quantas mensagens por dia, tempo médio de resposta)
- Aplicação móvel para operadores em vez de extensão
- Sistema de notificações por email ou SMS como backup
- Testes automáticos para garantir que tudo funciona
- Base de dados com mais tabelas (equipas, zonas, turnos)

---

## 5. 🚀 Como Correr o Projeto

### Versão Online (Vercel + Supabase) — Recomendada

Esta é a versão principal do projeto, que vive na internet.

#### Pré-requisitos

- Uma conta no [Vercel](https://vercel.com/) (gratuito)
- Uma conta no [Supabase](https://supabase.com/) (gratuito)
- [Node.js](https://nodejs.org/) versão 18 ou superior instalado
- [Git](https://git-scm.com/) instalado

#### Passo 1: Configurar o Supabase

1. Cria uma conta em [supabase.com](https://supabase.com/) e cria um novo projeto.
2. Vai a **SQL Editor** no painel do Supabase.
3. Cola todo o conteúdo do ficheiro `supabase-setup.sql` e clica **Run**. Isto cria as tabelas (utilizadores, mensagens, templates) e insere os dados iniciais.
4. Vai a **Settings → API** e copia:
   - O **URL** do projeto (ex: `https://xxxxx.supabase.co`)
   - A **anon key** (chave pública)
   - A **service_role key** (chave privada — só para o backend)

#### Passo 2: Configurar o Vercel

1. Vai a [vercel.com](https://vercel.com/) e importa o repositório do GitHub.
2. Nas **Environment Variables** do projeto no Vercel, adiciona:
   - `SUPABASE_URL` → o URL do teu projeto Supabase
   - `SUPABASE_SERVICE_KEY` → a service_role key do Supabase
   - `SUPABASE_ANON_KEY` → a anon key do Supabase
   - `JWT_SECRET` → uma string longa e aleatória (ex: `minha-chave-super-secreta-2024-xyz`)
3. O Vercel faz o deploy automaticamente.

#### Passo 3: Aceder à aplicação

- **Backoffice**: Abre o URL que o Vercel te deu (ex: `https://carris-extensao.vercel.app`)
- **Login**: username `coordenador`, password `1234`

#### Passo 4: Instalar a extensão

1. Abre `chrome://extensions/` (Chrome) ou `edge://extensions/` (Edge).
2. Ativa o **Modo de programador**.
3. Clica em **Carregar sem compactação** e seleciona a pasta `extension/` do projeto.
4. Clica no ícone da extensão e faz login com username `operador`, password `1234`.

---

### Versão Local (para testes sem internet)

Esta versão usa o servidor Express local com ficheiros JSON.

#### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior

#### Passo 1: Instalar dependências

```bash
cd backend
npm install
```

#### Passo 2: Arrancar o servidor

```bash
npm start
```

O servidor arranca em `http://localhost:3000`. Na primeira vez, cria automaticamente os utilizadores e templates de teste.

#### Passo 3: Abrir o backoffice

Abre o browser e vai a `http://localhost:3000`. Faz login com `coordenador` / `1234`.

> **Nota**: Na versão local, o backoffice é servido diretamente pelo servidor Express. A extensão precisa que o endereço no ficheiro `popup.js` e `service-worker.js` aponte para `http://localhost:3000` em vez do URL do Vercel.

---

## 6. 🎤 Guia de Apresentação

### Script de apresentação (2-3 minutos)

> "Bom dia/Boa tarde. Vou apresentar o meu projeto de estágio: um **Sistema de Notificações para a Carris**.
>
> **O problema:** Na operação diária da Carris, quando acontece um acidente, trânsito intenso, uma avaria ou a necessidade de um desvio, o coordenador precisa de avisar rapidamente os operadores de tráfego. Hoje, essa comunicação pode estar dispersa por telefone, rádio ou outros canais, o que dificulta a rapidez e o registo das comunicações.
>
> **A solução:** Desenvolvi um sistema web com três componentes. Primeiro, um **backoffice** — uma página web onde o coordenador faz login, escreve uma mensagem, define a prioridade e envia. Segundo, uma **extensão de browser** instalada nos computadores dos operadores — quando o coordenador envia uma mensagem, o operador recebe automaticamente uma notificação no ecrã. Terceiro, uma **API na nuvem** que liga tudo e guarda os dados numa base de dados Supabase.
>
> **Demonstração rápida:** *(Mostrar o backoffice)* Aqui posso fazer login como coordenador, usar um botão de mensagem rápida — por exemplo "Acidente" — que preenche automaticamente o formulário, e enviar. *(Mostrar a extensão)* Do lado do operador, a mensagem aparece aqui no popup da extensão, e também recebeu uma notificação push.
>
> **Funcionalidades adicionais:** O sistema tem histórico de mensagens com pesquisa e filtros, gestão de utilizadores e mensagens chegam em tempo real graças ao Supabase Realtime.
>
> O projeto está alojado no Vercel e usa o Supabase como base de dados, o que permite que funcione online sem necessidade de manter um servidor próprio."

### As 5 perguntas mais prováveis e as respostas

**1. "Que tecnologias usaste?"**

> "Usei JavaScript para todo o projeto. O backend são serverless functions no Vercel com Node.js, a base de dados é PostgreSQL via Supabase, o backoffice é HTML/CSS/JavaScript puro e a extensão usa as APIs nativas do Chrome (Manifest V3). Para autenticação uso JWT e as passwords são encriptadas com bcrypt."

**2. "Porque não usaste React ou outro framework?"**

> "Optei por JavaScript puro para manter o código mais simples e transparente. Num projeto desta dimensão, um framework acrescentaria complexidade desnecessária. Cada função e cada interação é visível diretamente no código, o que facilita a compreensão e manutenção."

**3. "Como funciona o tempo real? Como é que os operadores recebem as mensagens?"**

> "Existem dois mecanismos. No backoffice, uso o Supabase Realtime, que mantém uma ligação aberta (WebSocket) e avisa instantaneamente quando há uma nova mensagem na base de dados. Na extensão, uso polling — a cada minuto, a extensão pergunta ao servidor se há novidades. Isto porque as extensões de browser em Manifest V3 não permitem manter ligações permanentes."

**4. "E se o servidor cair? Os dados perdem-se?"**

> "Não, os dados estão seguros. A base de dados está no Supabase, que é um serviço na nuvem com backups automáticos. As serverless functions no Vercel não têm estado próprio — apenas leem e escrevem na base de dados. Se houver um problema temporário, os dados continuam lá e o sistema recupera quando voltar a estar disponível."

**5. "O que farias diferente se tivesses mais tempo?"**

> "Adicionaria confirmação de leitura para saber quais operadores já viram cada mensagem, criaria grupos de operadores por zona geográfica para enviar mensagens mais direcionadas, e desenvolveria um dashboard com estatísticas de uso. Também adicionaria testes automáticos e, possivelmente, uma aplicação móvel para os operadores."

### Pontos mais impressionantes para destacar

1. **Tempo real funcional**: As mensagens chegam instantaneamente ao backoffice graças ao Supabase Realtime — podes demonstrar isso ao vivo enviando uma mensagem e vendo-a aparecer imediatamente.

2. **Extensão de browser real**: Não é apenas uma página web — é uma extensão Chrome/Edge real com notificações push nativas e funcionamento em segundo plano. Isto mostra capacidade de trabalhar com APIs do browser mais avançadas.

3. **Sistema completo de ponta a ponta**: O projeto cobre tudo — autenticação segura, autorização por papel (coordenador vs. operador), CRUD completo (criar, ler, atualizar, apagar), templates pré-definidos, histórico com filtros e pesquisa, e deploy na nuvem.

4. **Zero instalação para operadores**: Os operadores só precisam de instalar a extensão — não precisam de instalar software, criar contas complexas ou configurar nada. É simples e direto.

5. **Design profissional**: O backoffice e a extensão usam a paleta de cores oficial da Carris e a fonte Roboto, dando um aspeto profissional e coerente com a identidade visual da empresa.

---

> 💡 **Nota final**: Este projeto foi desenvolvido no contexto de um estágio e grande parte do código foi provavelmente gerada ou assistida por inteligência artificial. Isso não é um problema — é uma forma cada vez mais comum de trabalhar em engenharia de software. O importante é perceber o que cada parte faz, como se ligam entre si e ser capaz de explicar as decisões tomadas. É exatamente isso que este documento te prepara para fazer.
