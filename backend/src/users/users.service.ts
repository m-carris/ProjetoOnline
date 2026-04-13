// ============================================================
// USERS.SERVICE.TS — Lógica de Negócio dos Utilizadores
// ============================================================
// O QUE FAZER AQUI:
// Este ficheiro contém a lógica para gerir utilizadores.
// O Service faz a "ponte" entre o Controller e a Base de Dados.
//
// MÉTODOS A IMPLEMENTAR:
//
// 1. create(createUserDto) — Criar novo utilizador
//    - Verificar se o username já existe
//    - Fazer HASH da password com bcrypt
//    - Guardar na base de dados
//    - Retornar o utilizador SEM a password
//
// 2. findAll() — Listar todos os utilizadores
//    - Retornar lista sem passwords
//
// 3. findByUsername(username) — Encontrar por username
//    - Usado no login (precisa da password para comparar)
//
// 4. findById(id) — Encontrar por ID
//    - Retornar sem password
//
// EXEMPLO:
//   @Injectable()
//   export class UsersService {
//     constructor(
//       @InjectRepository(User)
//       private usersRepository: Repository<User>,
//     ) {}
//
//     async create(dto: CreateUserDto): Promise<User> {
//       const hashedPassword = await bcrypt.hash(dto.password, 10);
//       const user = this.usersRepository.create({
//         ...dto,
//         password: hashedPassword,
//       });
//       return this.usersRepository.save(user);
//     }
//
//     async findByUsername(username: string): Promise<User | null> {
//       return this.usersRepository.findOne({ where: { username } });
//     }
//   }
//
// DEPENDÊNCIAS:
//   npm install bcrypt
//   npm install -D @types/bcrypt
// ============================================================
