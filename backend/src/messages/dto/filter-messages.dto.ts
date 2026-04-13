// ============================================================
// FILTER-MESSAGES.DTO.TS — DTO para Filtrar/Pesquisar Mensagens
// ============================================================
// O QUE FAZER AQUI:
// Definir os parâmetros de pesquisa e filtro no histórico.
// Estes parâmetros vêm como query params no GET /messages.
//
// CAMPOS (todos opcionais):
// - search: string (pesquisa por texto no conteúdo)
// - dataInicio: string/Date (filtrar a partir desta data)
// - dataFim: string/Date (filtrar até esta data)
// - prioridade: 'normal' | 'alta' (filtrar por prioridade)
// - page: number (paginação — número da página)
// - limit: number (paginação — itens por página)
//
// EXEMPLO:
//   import { IsOptional, IsString, IsEnum, IsDateString, IsNumber } from 'class-validator';
//   import { Type } from 'class-transformer';
//   import { MessagePriority } from '../entities/message.entity';
//
//   export class FilterMessagesDto {
//     @IsOptional()
//     @IsString()
//     search?: string;
//
//     @IsOptional()
//     @IsDateString()
//     dataInicio?: string;
//
//     @IsOptional()
//     @IsDateString()
//     dataFim?: string;
//
//     @IsOptional()
//     @IsEnum(MessagePriority)
//     prioridade?: MessagePriority;
//
//     @IsOptional()
//     @Type(() => Number)
//     @IsNumber()
//     page?: number;
//
//     @IsOptional()
//     @Type(() => Number)
//     @IsNumber()
//     limit?: number;
//   }
// ============================================================
