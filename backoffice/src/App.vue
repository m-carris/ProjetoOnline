<!-- ==========================================================
  APP.VUE — Componente Raiz da Aplicação Vue.js
  ==========================================================
  O QUE FAZER AQUI:
  Este é o componente principal que "envolve" toda a aplicação.

  DEVE CONTER:
  1. O componente <Navbar /> (barra de navegação no topo)
  2. O <router-view /> (onde as páginas/views aparecem)

  EXEMPLO:
    <template>
      <div id="app">
        <Navbar v-if="isAuthenticated" />
        <router-view />
      </div>
    </template>

    <script setup lang="ts">
    import { computed } from 'vue';
    import { useAuthStore } from './stores/auth';
    import Navbar from './components/Navbar.vue';

    const authStore = useAuthStore();
    const isAuthenticated = computed(() => authStore.isAuthenticated);
    </script>

    <style>
    /* Estilos globais da aplicação */
    </style>

  COMO CRIAR O PROJETO VUE COM VITE:
    npm create vite@latest backoffice -- --template vue-ts
    cd backoffice
    npm install
    npm install vue-router@4 pinia axios socket.io-client
    npm run dev
  ========================================================== -->
