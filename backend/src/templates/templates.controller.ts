// ============================================================
// TEMPLATES.CONTROLLER.TS — Rotas dos Templates
// ============================================================
// O QUE FAZER AQUI:
// Endpoints CRUD para gerir templates de mensagens rápidas.
//
// ENDPOINTS:
// GET    /templates     — Listar todos os templates ativos
// GET    /templates/:id — Obter template por ID
// POST   /templates     — Criar novo template (só coordenador)
// PATCH  /templates/:id — Atualizar template (só coordenador)
// DELETE /templates/:id — Desativar template (só coordenador)
//
// EXEMPLO:
//   @Controller('templates')
//   @UseGuards(JwtAuthGuard)
//   export class TemplatesController {
//     constructor(private templatesService: TemplatesService) {}
//
//     @Get()
//     findAll() {
//       return this.templatesService.findAll();
//     }
//
//     @Post()
//     create(@Body() dto: CreateTemplateDto) {
//       return this.templatesService.create(dto);
//     }
//   }
// ============================================================
