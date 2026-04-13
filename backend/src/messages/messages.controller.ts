// ============================================================
// MESSAGES.CONTROLLER.TS — Rotas/Endpoints das Mensagens
// ============================================================
// O QUE FAZER AQUI:
// Definir as rotas HTTP da API para mensagens.
//
// ENDPOINTS A IMPLEMENTAR:
//
// POST /messages — Enviar nova mensagem
//   - Protegido (só coordenadores)
//   - Recebe: { conteudo, prioridade, tipo?, destinatario? }
//   - Após guardar, emitir via WebSocket
//   - Retorna: mensagem criada
//
// GET /messages — Listar mensagens (com filtros)
//   - Protegido
//   - Query params: search, dataInicio, dataFim, prioridade, page, limit
//   - Retorna: lista de mensagens
//
// GET /messages/recent — Últimas mensagens (para a extensão)
//   - Protegido
//   - Query param: limit (default: 20)
//   - Retorna: últimas N mensagens
//
// GET /messages/:id — Obter mensagem por ID
//   - Protegido
//   - Retorna: mensagem
//
// EXEMPLO:
//   @Controller('messages')
//   @UseGuards(JwtAuthGuard)
//   export class MessagesController {
//     constructor(
//       private messagesService: MessagesService,
//       private notificationsGateway: NotificationsGateway,
//     ) {}
//
//     @Post()
//     async create(@Body() dto: CreateMessageDto, @Request() req) {
//       const message = await this.messagesService.create(dto, req.user.id);
//       // Emitir para todos os operadores via WebSocket
//       this.notificationsGateway.sendNotification(message);
//       return message;
//     }
//
//     @Get()
//     findAll(@Query() filter: FilterMessagesDto) {
//       return this.messagesService.findAll(filter);
//     }
//
//     @Get('recent')
//     findRecent(@Query('limit') limit: number) {
//       return this.messagesService.findRecent(limit || 20);
//     }
//   }
// ============================================================
