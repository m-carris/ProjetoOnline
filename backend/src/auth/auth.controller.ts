// ============================================================
// AUTH.CONTROLLER.TS — Rotas de Autenticação
// ============================================================
// O QUE FAZER AQUI:
// Definir os endpoints de autenticação (login/registo).
//
// ENDPOINTS A IMPLEMENTAR:
//
// POST /auth/login — Fazer login
//   - Recebe: { username, password }
//   - Valida as credenciais
//   - Retorna: { access_token, user }
//   - Se credenciais inválidas: retorna erro 401
//
// POST /auth/register — Registar novo utilizador (opcional)
//   - Recebe: { username, password, role, nome }
//   - Cria o utilizador
//   - Retorna: utilizador criado
//
// EXEMPLO:
//   @Controller('auth')
//   export class AuthController {
//     constructor(private authService: AuthService) {}
//
//     @Post('login')
//     async login(@Body() loginDto: LoginDto) {
//       const user = await this.authService.validateUser(
//         loginDto.username,
//         loginDto.password,
//       );
//       if (!user) {
//         throw new UnauthorizedException('Credenciais inválidas');
//       }
//       return this.authService.login(user);
//     }
//   }
// ============================================================
