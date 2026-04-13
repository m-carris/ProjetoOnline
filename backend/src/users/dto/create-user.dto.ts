// ============================================================
// CREATE-USER.DTO.TS — DTO para Criar Utilizador
// ============================================================
// O QUE FAZER AQUI:
// DTO = Data Transfer Object. Define os dados que a API espera
// receber quando alguém quer criar um novo utilizador.
//
// CAMPOS:
// - username: string (obrigatório, mínimo 3 caracteres)
// - password: string (obrigatório, mínimo 6 caracteres)
// - role: 'coordenador' | 'operador' (obrigatório)
// - nome: string (obrigatório)
//
// EXEMPLO COM CLASS-VALIDATOR:
//   import { IsString, IsEnum, MinLength } from 'class-validator';
//   import { UserRole } from '../entities/user.entity';
//
//   export class CreateUserDto {
//     @IsString()
//     @MinLength(3)
//     username: string;
//
//     @IsString()
//     @MinLength(6)
//     password: string;
//
//     @IsEnum(UserRole)
//     role: UserRole;
//
//     @IsString()
//     nome: string;
//   }
//
// DEPENDÊNCIAS:
//   npm install class-validator class-transformer
// ============================================================
