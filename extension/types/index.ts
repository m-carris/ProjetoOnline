// ============================================================
// TYPES/INDEX.TS — Tipos TypeScript da Extensão
// ============================================================
// O QUE FAZER AQUI:
// Interfaces para os dados usados na extensão.
// Semelhantes aos do backoffice, mas simplificados.
//
// INTERFACES:
//
//   interface User {
//     id: number;
//     username: string;
//     role: string;
//     nome: string;
//   }
//
//   interface Message {
//     id: number;
//     conteudo: string;
//     prioridade: 'normal' | 'alta';
//     tipo?: string;
//     remetente: { nome: string };
//     createdAt: string;
//   }
//
//   // Mensagens entre popup e service worker
//   interface RuntimeMessage {
//     type: 'LOGIN' | 'LOGOUT' | 'GET_STATUS' | 'GET_MESSAGES';
//     payload?: any;
//   }
// ============================================================
