// ============================================================
// CREATE-MESSAGE.DTO.TS — DTO para Criar Mensagem
// ============================================================
// O QUE FAZER AQUI:
// Definir os dados esperados ao criar/enviar uma mensagem.
//
// CAMPOS:
// - conteudo: string (obrigatório, o texto da mensagem)
// - prioridade: 'normal' | 'alta' (obrigatório)
// - tipo: string (opcional — 'acidente', 'transito', 'avaria', 'desvio')
// - destinatario: string (opcional, default: 'todos')
//
// EXEMPLO:
//   import { IsString, IsEnum, IsOptional } from 'class-validator';
//   import { MessagePriority } from '../entities/message.entity';
//
//   export class CreateMessageDto {
//     @IsString()
//     conteudo: string;
//
//     @IsEnum(MessagePriority)
//     prioridade: MessagePriority;
//
//     @IsString()
//     @IsOptional()
//     tipo?: string;
//
//     @IsString()
//     @IsOptional()
//     destinatario?: string;
//   }
// ============================================================
