<!-- ==========================================================
  LOGIN VIEW — Página de Login
  ==========================================================
  O QUE FAZER AQUI:
  Criar a página de login onde o coordenador introduz as credenciais.

  ELEMENTOS DA INTERFACE:
  1. Logo/título "Sistema de Notificações"
  2. Campo de texto para username
  3. Campo de password
  4. Botão "Entrar"
  5. Mensagem de erro (se credenciais inválidas)

  LÓGICA:
  - Ao clicar "Entrar", chamar authStore.login(username, password)
  - Se sucesso: redirecionar para /dashboard
  - Se erro: mostrar mensagem "Credenciais inválidas"
  - Se já autenticado, redirecionar automaticamente

  EXEMPLO:
    <template>
      <div class="login-container">
        <h1>Sistema de Notificações</h1>
        <form @submit.prevent="handleLogin">
          <input v-model="username" placeholder="Username" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <p v-if="error" class="error">{{ error }}</p>
          <button type="submit" :disabled="loading">Entrar</button>
        </form>
      </div>
    </template>

    <script setup lang="ts">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '../stores/auth';

    const authStore = useAuthStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const loading = ref(false);

    async function handleLogin() {
      loading.value = true;
      error.value = '';
      try {
        await authStore.login(username.value, password.value);
        router.push('/');
      } catch (e) {
        error.value = 'Credenciais inválidas';
      }
      loading.value = false;
    }
    </script>
  ========================================================== -->
