// ============================================================
// USER.ENTITY.TS — Entidade/Modelo do Utilizador
// ============================================================
// O QUE FAZER AQUI:
// Definir a estrutura da tabela "users" na base de dados.
// Cada propriedade desta classe corresponde a uma coluna.
//
// CAMPOS NECESSÁRIOS:
// - id: number (auto-gerado, chave primária)
// - username: string (nome de utilizador, único)
// - password: string (hash da password, NUNCA guardar em texto limpo!)
// - role: string/enum ('coordenador' | 'operador')
// - nome: string (nome completo do utilizador)
// - createdAt: Date (data de criação, automática)
//
// EXEMPLO COM TYPEORM:
//   import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
//
//   export enum UserRole {
//     COORDENADOR = 'coordenador',
//     OPERADOR = 'operador',
//   }
//
//   @Entity('users')
//   export class User {
//     @PrimaryGeneratedColumn()
//     id: number;
//
//     @Column({ unique: true })
//     username: string;
//
//     @Column()
//     password: string;  // Guardar HASH (bcrypt), nunca texto limpo
//
//     @Column({ type: 'enum', enum: UserRole })
//     role: UserRole;
//
//     @Column()
//     nome: string;
//
//     @CreateDateColumn()
//     createdAt: Date;
//   }
//
// NOTA DE SEGURANÇA:
// - A password deve ser sempre guardada como HASH (usar bcrypt)
// - Nunca devolver a password nas respostas da API
// ============================================================
