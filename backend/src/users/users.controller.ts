// ============================================================
// USERS.CONTROLLER.TS — Rotas/Endpoints dos Utilizadores
// ============================================================
// O QUE FAZER AQUI:
// O Controller define as rotas HTTP da API para utilizadores.
// Cada método corresponde a um endpoint que o frontend pode chamar.
//
// ENDPOINTS A IMPLEMENTAR:
//
// GET /users — Listar todos os utilizadores
//   - Protegido (só coordenadores)
//   - Retorna lista de utilizadores sem passwords
//
// GET /users/:id — Obter um utilizador por ID
//   - Protegido
//   - Retorna dados do utilizador
//
// POST /users — Criar novo utilizador
//   - Protegido (só coordenadores podem criar)
//   - Recebe: { username, password, role, nome }
//   - Retorna: utilizador criado (sem password)
//
// EXEMPLO:
//   @Controller('users')
//   export class UsersController {
//     constructor(private readonly usersService: UsersService) {}
//
//     @UseGuards(JwtAuthGuard)
//     @Get()
//     findAll() {
//       return this.usersService.findAll();
//     }
//
//     @UseGuards(JwtAuthGuard)
//     @Post()
//     create(@Body() createUserDto: CreateUserDto) {
//       return this.usersService.create(createUserDto);
//     }
//   }
// ============================================================
