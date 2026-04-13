// ============================================================
// MESSAGE.ENTITY.TS — Entidade/Modelo da Mensagem
// ============================================================
// O QUE FAZER AQUI:
// Definir a estrutura da tabela "messages" na base de dados.
//
// CAMPOS NECESSÁRIOS:
// - id: number (auto-gerado, chave primária)
// - conteudo: string (texto da mensagem)
// - prioridade: 'normal' | 'alta' (nível de urgência)
// - tipo: string (opcional — 'acidente', 'transito', 'avaria', 'desvio', 'outro')
// - destinatario: string ('todos' ou nome de grupo — opcional)
// - remetenteId: number (ID do coordenador que enviou — FK para users)
// - remetente: User (relação ManyToOne com a tabela users)
// - createdAt: Date (data/hora de envio, automática)
//
// EXEMPLO COM TYPEORM:
//   import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
//   import { User } from '../../users/entities/user.entity';
//
//   export enum MessagePriority {
//     NORMAL = 'normal',
//     ALTA = 'alta',
//   }
//
//   @Entity('messages')
//   export class Message {
//     @PrimaryGeneratedColumn()
//     id: number;
//
//     @Column('text')
//     conteudo: string;
//
//     @Column({ type: 'enum', enum: MessagePriority, default: MessagePriority.NORMAL })
//     prioridade: MessagePriority;
//
//     @Column({ nullable: true })
//     tipo: string;
//
//     @Column({ default: 'todos' })
//     destinatario: string;
//
//     @ManyToOne(() => User)
//     remetente: User;
//
//     @CreateDateColumn()
//     createdAt: Date;
//   }
// ============================================================
