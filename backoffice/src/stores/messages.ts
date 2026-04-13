// ============================================================
// STORES/MESSAGES.TS — Store de Mensagens (Pinia)
// ============================================================
// O QUE FAZER AQUI:
// Gerir o estado das mensagens na aplicação — lista, envio, filtros.
//
// ESTADO:
// - messages: Message[] (lista de mensagens)
// - templates: Template[] (templates de mensagens rápidas)
// - loading: boolean (se está a carregar dados)
// - filters: { search, dataInicio, dataFim, prioridade }
//
// ACTIONS:
// - fetchMessages(filters?) — Buscar mensagens da API (GET /messages)
// - sendMessage(dto) — Enviar mensagem (POST /messages)
// - fetchTemplates() — Buscar templates (GET /templates)
// - fetchRecent(limit?) — Buscar mensagens recentes
//
// EXEMPLO:
//   import { defineStore } from 'pinia';
//   import api from '../services/api';
//
//   export const useMessagesStore = defineStore('messages', {
//     state: () => ({
//       messages: [],
//       templates: [],
//       loading: false,
//     }),
//     actions: {
//       async fetchMessages(filters = {}) {
//         this.loading = true;
//         const response = await api.get('/messages', { params: filters });
//         this.messages = response.data;
//         this.loading = false;
//       },
//       async sendMessage(data) {
//         const response = await api.post('/messages', data);
//         this.messages.unshift(response.data);
//         return response.data;
//       },
//       async fetchTemplates() {
//         const response = await api.get('/templates');
//         this.templates = response.data;
//       },
//     },
//   });
// ============================================================
