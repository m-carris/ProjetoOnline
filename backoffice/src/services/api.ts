// ============================================================
// SERVICES/API.TS — Cliente HTTP (Axios)
// ============================================================
// O QUE FAZER AQUI:
// Configurar o Axios para fazer pedidos HTTP ao backend.
// Adicionar automaticamente o token JWT a todos os pedidos.
//
// EXEMPLO:
//   import axios from 'axios';
//
//   const api = axios.create({
//     baseURL: 'http://localhost:3000', // URL do backend
//   });
//
//   // Interceptor: adicionar token JWT a cada pedido
//   api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   });
//
//   // Interceptor: tratar erros (ex: token expirado → logout)
//   api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response?.status === 401) {
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         window.location.href = '/login';
//       }
//       return Promise.reject(error);
//     },
//   );
//
//   export default api;
//
// DEPENDÊNCIAS:
//   npm install axios
// ============================================================
