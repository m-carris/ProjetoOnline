<!-- ==========================================================
  COMPONENTE: Navbar — Barra de Navegação
  ==========================================================
  O QUE FAZER AQUI:
  Barra horizontal no topo da aplicação com navegação e logout.

  ELEMENTOS:
  1. Logo/nome: "Notificações Coordenador"
  2. Links de navegação:
     - Dashboard (/)
     - Enviar Mensagem (/messages)
     - Histórico (/history)
  3. Lado direito:
     - Nome do utilizador logado
     - Botão "Sair" (logout)

  LÓGICA:
  - Destacar o link da página atual (route ativa)
  - Ao clicar "Sair": chamar authStore.logout() e redirecionar para /login

  EXEMPLO:
    <template>
      <nav class="navbar">
        <div class="navbar-brand">📢 Notificações</div>
        <div class="navbar-links">
          <router-link to="/">Dashboard</router-link>
          <router-link to="/messages">Enviar</router-link>
          <router-link to="/history">Histórico</router-link>
        </div>
        <div class="navbar-user">
          <span>{{ authStore.user?.nome }}</span>
          <button @click="logout">Sair</button>
        </div>
      </nav>
    </template>
  ========================================================== -->
