// ============================================================
// MESSAGES.GATEWAY.TS — WebSocket Gateway para Mensagens
// ============================================================
// O QUE FAZER AQUI:
// Este é o componente de TEMPO REAL. Usa WebSockets (Socket.io)
// para enviar mensagens instantaneamente para os operadores
// conectados, sem que eles precisem de fazer refresh.
//
// COMO FUNCIONA:
// 1. Os operadores (extensão) conectam-se ao WebSocket ao abrir a extensão
// 2. Quando o coordenador envia uma mensagem, o controller chama
//    este gateway para "emitir" a mensagem para todos os conectados
// 3. A extensão recebe a mensagem e mostra uma notificação
//
// MÉTODOS A IMPLEMENTAR:
//
// handleConnection(client) — Quando um operador se conecta
//   - Log da conexão
//   - Autenticar o token JWT do cliente
//
// handleDisconnect(client) — Quando um operador desconecta
//   - Log da desconexão
//
// sendNotification(message) — Enviar mensagem para todos
//   - this.server.emit('nova-mensagem', message)
//
// EXEMPLO:
//   import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
//   import { Server, Socket } from 'socket.io';
//
//   @WebSocketGateway({
//     cors: { origin: '*' },  // Em produção, restringir!
//   })
//   export class MessagesGateway implements OnGatewayConnection, OnGatewayDisconnect {
//     @WebSocketServer()
//     server: Server;
//
//     handleConnection(client: Socket) {
//       console.log('Operador conectado:', client.id);
//     }
//
//     handleDisconnect(client: Socket) {
//       console.log('Operador desconectado:', client.id);
//     }
//
//     sendNotification(message: any) {
//       this.server.emit('nova-mensagem', message);
//     }
//   }
//
// DEPENDÊNCIAS:
//   npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
// ============================================================
