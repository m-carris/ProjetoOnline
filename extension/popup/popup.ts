// ============================================================
// POPUP.TS — Lógica do Popup da Extensão
// ============================================================
// O QUE FAZER AQUI:
// Este ficheiro controla toda a lógica do popup (a janelesinha
// que aparece ao clicar no ícone da extensão).
//
// FUNCIONALIDADES:
//
// 1. VERIFICAR SE ESTÁ LOGADO
//    - Ao abrir o popup, verificar chrome.storage se há token
//    - Se sim: mostrar mensagens
//    - Se não: mostrar formulário de login
//
// 2. LOGIN
//    - Enviar credenciais para POST /auth/login
//    - Guardar token e dados do user no chrome.storage
//    - Após login, iniciar conexão WebSocket (via service worker)
//
// 3. MOSTRAR MENSAGENS
//    - Buscar mensagens recentes da API (GET /messages/recent)
//    - Também mostrar mensagens guardadas no chrome.storage
//    - Ordenar por data (mais recentes primeiro)
//    - Destacar mensagens de alta prioridade
//
// 4. LOGOUT
//    - Limpar chrome.storage
//    - Desconectar WebSocket
//    - Mostrar formulário de login
//
// COMUNICAÇÃO COM SERVICE WORKER:
//   Usar chrome.runtime.sendMessage() para comunicar com o
//   background/service-worker.ts
//
// EXEMPLO — Verificar login:
//   chrome.storage.local.get(['token', 'user'], (result) => {
//     if (result.token) {
//       showMessages(result.user);
//     } else {
//       showLogin();
//     }
//   });
//
// EXEMPLO — Login:
//   async function login(username, password) {
//     const response = await fetch('http://localhost:3000/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password }),
//     });
//     const data = await response.json();
//     chrome.storage.local.set({ token: data.access_token, user: data.user });
//   }
//
// NOTA: Este ficheiro será compilado para popup.js
//   (podes usar TypeScript e compilar, ou escrever JS direto)
// ============================================================
