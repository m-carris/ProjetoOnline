// ============================================================
// SERVICE-WORKER.TS — Background Script da Extensão
// ============================================================
// O QUE FAZER AQUI:
// O Service Worker corre em segundo plano, MESMO quando o popup
// está fechado. É aqui que a magia acontece:
// - Mantém a conexão WebSocket ativa
// - Recebe mensagens em tempo real
// - Mostra push notifications no browser
//
// FUNCIONALIDADES:
//
// 1. CONEXÃO WEBSOCKET
//    - Quando o utilizador faz login, conectar ao WebSocket
//    - Ouvir evento 'nova-mensagem'
//    - Manter a conexão ativa (reconectar se cair)
//
// 2. PUSH NOTIFICATIONS
//    - Quando recebe 'nova-mensagem', criar uma notificação:
//      chrome.notifications.create({
//        type: 'basic',
//        iconUrl: '../assets/icons/icon128.png',
//        title: 'Nova Mensagem',
//        message: conteudo_da_mensagem,
//        priority: prioridade === 'alta' ? 2 : 0,
//      });
//
// 3. GUARDAR MENSAGENS
//    - Guardar mensagens recebidas no chrome.storage
//    - O popup lê essas mensagens ao abrir
//
// 4. COMUNICAÇÃO COM O POPUP
//    - Responder a mensagens do popup (chrome.runtime.onMessage)
//    - Ex: popup pede "estado da conexão" → responder "conectado"
//
// EXEMPLO:
//   // Conexão WebSocket (usando Socket.io client)
//   // NOTA: Em extensões Manifest V3, importar a library via importScripts
//   //       ou usar WebSocket nativo
//
//   let socket = null;
//
//   // Quando recebe mensagem do popup
//   chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//     if (msg.type === 'LOGIN') {
//       connectWebSocket(msg.token);
//       sendResponse({ status: 'ok' });
//     }
//     if (msg.type === 'LOGOUT') {
//       disconnectWebSocket();
//       sendResponse({ status: 'ok' });
//     }
//     if (msg.type === 'GET_STATUS') {
//       sendResponse({ connected: socket?.connected || false });
//     }
//     return true; // Manter o canal aberto para resposta assíncrona
//   });
//
//   function connectWebSocket(token) {
//     // Opção A: Socket.io (precisa importar a library)
//     // Opção B: WebSocket nativo
//     socket = new WebSocket('ws://localhost:3000');
//     socket.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       showNotification(message);
//       saveMessage(message);
//     };
//   }
//
//   function showNotification(message) {
//     chrome.notifications.create({
//       type: 'basic',
//       iconUrl: '../assets/icons/icon128.png',
//       title: message.prioridade === 'alta' ? '🚨 URGENTE' : '📢 Nova Mensagem',
//       message: message.conteudo,
//       priority: message.prioridade === 'alta' ? 2 : 0,
//       requireInteraction: message.prioridade === 'alta',
//     });
//   }
//
//   function saveMessage(message) {
//     chrome.storage.local.get(['messages'], (result) => {
//       const messages = result.messages || [];
//       messages.unshift(message);
//       // Guardar apenas as últimas 50 mensagens
//       chrome.storage.local.set({ messages: messages.slice(0, 50) });
//     });
//   }
//
// NOTA IMPORTANTE:
// Em Manifest V3, o Service Worker pode ser terminado pelo browser
// para poupar recursos. Implementar lógica de reconexão!
// ============================================================
