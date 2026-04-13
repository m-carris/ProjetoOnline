// ============================================================
// SERVICES/WEBSOCKET.TS — Cliente WebSocket (Socket.io)
// ============================================================
// O QUE FAZER AQUI:
// Configurar a conexão WebSocket com o backend para receber
// mensagens em tempo real no backoffice.
//
// FUNCIONALIDADE:
// - Conectar ao servidor WebSocket ao fazer login
// - Ouvir o evento 'nova-mensagem'
// - Quando receber uma mensagem, atualizar a lista
// - Desconectar ao fazer logout
//
// EXEMPLO:
//   import { io, Socket } from 'socket.io-client';
//
//   let socket: Socket | null = null;
//
//   export function connectWebSocket(token: string) {
//     socket = io('http://localhost:3000', {
//       auth: { token },
//     });
//
//     socket.on('connect', () => {
//       console.log('WebSocket conectado');
//     });
//
//     socket.on('nova-mensagem', (message) => {
//       console.log('Nova mensagem recebida:', message);
//       // Aqui podes atualizar a store ou mostrar notificação
//     });
//
//     socket.on('disconnect', () => {
//       console.log('WebSocket desconectado');
//     });
//   }
//
//   export function disconnectWebSocket() {
//     socket?.disconnect();
//     socket = null;
//   }
//
// DEPENDÊNCIAS:
//   npm install socket.io-client
// ============================================================
