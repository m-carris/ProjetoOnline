// ============================================================
// AUTH.SERVICE.TS — Lógica de Autenticação
// ============================================================
// O QUE FAZER AQUI:
// Este ficheiro contém a lógica de login (autenticação).
//
// MÉTODOS A IMPLEMENTAR:
//
// 1. validateUser(username, password)
//    - Procurar o utilizador pelo username
//    - Comparar a password fornecida com o hash guardado (bcrypt.compare)
//    - Se válido, retornar o utilizador (sem password)
//    - Se inválido, retornar null
//
// 2. login(user)
//    - Gerar um token JWT com os dados do utilizador
//    - Retornar: { access_token: '...', user: { id, username, role, nome } }
//
// EXEMPLO:
//   @Injectable()
//   export class AuthService {
//     constructor(
//       private usersService: UsersService,
//       private jwtService: JwtService,
//     ) {}
//
//     async validateUser(username: string, password: string) {
//       const user = await this.usersService.findByUsername(username);
//       if (user && await bcrypt.compare(password, user.password)) {
//         const { password, ...result } = user;
//         return result;
//       }
//       return null;
//     }
//
//     async login(user: any) {
//       const payload = { sub: user.id, username: user.username, role: user.role };
//       return {
//         access_token: this.jwtService.sign(payload),
//         user: { id: user.id, username: user.username, role: user.role, nome: user.nome },
//       };
//     }
//   }
//
// DEPENDÊNCIAS:
//   npm install @nestjs/jwt @nestjs/passport passport passport-jwt
//   npm install -D @types/passport-jwt
// ============================================================
