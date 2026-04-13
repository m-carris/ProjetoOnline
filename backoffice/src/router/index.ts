// ============================================================
// ROUTER/INDEX.TS — Configuração das Rotas (Navegação)
// ============================================================
// O QUE FAZER AQUI:
// Definir as páginas da aplicação e os seus caminhos (URLs).
// Também configurar proteção de rotas (só aceder se autenticado).
//
// ROTAS A CRIAR:
//
// /login        → LoginView.vue      (pública)
// /dashboard    → DashboardView.vue  (protegida — coordenador)
// /messages     → MessagesView.vue   (protegida — enviar mensagens)
// /history      → HistoryView.vue    (protegida — histórico)
//
// PROTEÇÃO DE ROTAS (Navigation Guard):
// Antes de cada navegação, verificar se o utilizador tem sessão.
// Se não tiver, redirecionar para /login.
//
// EXEMPLO:
//   import { createRouter, createWebHistory } from 'vue-router';
//   import LoginView from '../views/LoginView.vue';
//   import DashboardView from '../views/DashboardView.vue';
//   import MessagesView from '../views/MessagesView.vue';
//   import HistoryView from '../views/HistoryView.vue';
//
//   const routes = [
//     { path: '/login', name: 'Login', component: LoginView },
//     { path: '/', name: 'Dashboard', component: DashboardView, meta: { requiresAuth: true } },
//     { path: '/messages', name: 'Messages', component: MessagesView, meta: { requiresAuth: true } },
//     { path: '/history', name: 'History', component: HistoryView, meta: { requiresAuth: true } },
//   ];
//
//   const router = createRouter({
//     history: createWebHistory(),
//     routes,
//   });
//
//   // Proteção: redirecionar para login se não autenticado
//   router.beforeEach((to, from, next) => {
//     const authStore = useAuthStore();
//     if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//       next({ name: 'Login' });
//     } else {
//       next();
//     }
//   });
//
//   export default router;
// ============================================================
