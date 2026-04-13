// ============================================================
// STORES/AUTH.TS — Store de Autenticação (Pinia)
// ============================================================
// O QUE FAZER AQUI:
// Gerir o estado de autenticação da aplicação.
// O Pinia é o "gestor de estado global" do Vue.js.
// Permite que qualquer componente saiba quem está logado.
//
// ESTADO A GUARDAR:
// - token: string | null (o JWT token)
// - user: { id, username, role, nome } | null
//
// GETTERS:
// - isAuthenticated: boolean (true se houver token)
// - isCoordinator: boolean (true se role === 'coordenador')
//
// ACTIONS (métodos):
// - login(username, password) — Fazer login via API
//   - Chamar POST /auth/login
//   - Guardar o token e dados do utilizador
//   - Guardar token no localStorage (para persistir)
//
// - logout() — Fazer logout
//   - Limpar token e user
//   - Limpar localStorage
//   - Redirecionar para /login
//
// - checkAuth() — Verificar se há sessão guardada
//   - Verificar localStorage ao iniciar a app
//
// EXEMPLO:
//   import { defineStore } from 'pinia';
//   import api from '../services/api';
//
//   export const useAuthStore = defineStore('auth', {
//     state: () => ({
//       token: localStorage.getItem('token') || null,
//       user: JSON.parse(localStorage.getItem('user') || 'null'),
//     }),
//     getters: {
//       isAuthenticated: (state) => !!state.token,
//       isCoordinator: (state) => state.user?.role === 'coordenador',
//     },
//     actions: {
//       async login(username: string, password: string) {
//         const response = await api.post('/auth/login', { username, password });
//         this.token = response.data.access_token;
//         this.user = response.data.user;
//         localStorage.setItem('token', this.token);
//         localStorage.setItem('user', JSON.stringify(this.user));
//       },
//       logout() {
//         this.token = null;
//         this.user = null;
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//       },
//     },
//   });
// ============================================================
