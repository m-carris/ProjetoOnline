// ============================================================
// CREATE-TEMPLATE.DTO.TS — DTO para Criar Template
// ============================================================
// O QUE FAZER AQUI:
// Validar os dados ao criar um novo template de mensagem rápida.
//
// CAMPOS:
// - nome: string (obrigatório)
// - conteudo: string (obrigatório)
// - prioridade: 'normal' | 'alta' (obrigatório)
// - tipo: string (obrigatório)
//
// EXEMPLO:
//   export class CreateTemplateDto {
//     @IsString()
//     nome: string;
//
//     @IsString()
//     conteudo: string;
//
//     @IsEnum(MessagePriority)
//     prioridade: MessagePriority;
//
//     @IsString()
//     tipo: string;
//   }
// ============================================================
