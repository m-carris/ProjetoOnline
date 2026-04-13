// ============================================================
// MESSAGES.SERVICE.TS — Lógica de Negócio das Mensagens
// ============================================================
// O QUE FAZER AQUI:
// Toda a lógica de criação, listagem, pesquisa e filtro de mensagens.
//
// MÉTODOS A IMPLEMENTAR:
//
// 1. create(createMessageDto, userId) — Criar/Enviar mensagem
//    - Guardar na base de dados com referência ao remetente
//    - Retornar a mensagem criada
//    - DEPOIS: emitir via WebSocket para os operadores (ver notifications.gateway.ts)
//
// 2. findAll(filterDto) — Listar mensagens com filtros
//    - Aplicar pesquisa por texto (ILIKE no PostgreSQL)
//    - Filtrar por data (intervalo)
//    - Filtrar por prioridade
//    - Incluir paginação
//    - Ordenar por data (mais recentes primeiro)
//
// 3. findRecent(limit) — Últimas N mensagens
//    - Para a extensão mostrar mensagens recentes
//    - Default: últimas 20 mensagens
//
// 4. findById(id) — Obter mensagem por ID
//
// EXEMPLO:
//   @Injectable()
//   export class MessagesService {
//     constructor(
//       @InjectRepository(Message)
//       private messagesRepository: Repository<Message>,
//     ) {}
//
//     async create(dto: CreateMessageDto, userId: number): Promise<Message> {
//       const message = this.messagesRepository.create({
//         ...dto,
//         remetente: { id: userId },
//       });
//       return this.messagesRepository.save(message);
//     }
//
//     async findAll(filter: FilterMessagesDto) {
//       const query = this.messagesRepository
//         .createQueryBuilder('message')
//         .leftJoinAndSelect('message.remetente', 'remetente')
//         .orderBy('message.createdAt', 'DESC');
//
//       if (filter.search) {
//         query.andWhere('message.conteudo ILIKE :search', {
//           search: `%${filter.search}%`,
//         });
//       }
//       // ... adicionar mais filtros
//       return query.getMany();
//     }
//   }
// ============================================================
