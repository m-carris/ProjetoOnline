// ============================================================
// MAIN.TS — Ponto de Entrada do Backend
// ============================================================
// O QUE FAZER AQUI:
// Este é o ficheiro que arranca o servidor NestJS.
//
// PASSOS:
// 1. Importar o NestFactory do @nestjs/core
// 2. Importar o AppModule (módulo raiz)
// 3. Criar a aplicação NestJS
// 4. Ativar CORS (para o backoffice e extensão poderem comunicar)
// 5. Definir a porta (usar variável de ambiente PORT ou 3000)
// 6. Iniciar o servidor com app.listen()
//
// EXEMPLO DE CÓDIGO:
//   import { NestFactory } from '@nestjs/core';
//   import { AppModule } from './app.module';
//
//   async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     app.enableCors(); // Permite pedidos de outros domínios
//     await app.listen(process.env.PORT || 3000);
//     console.log('Servidor a correr na porta 3000');
//   }
//   bootstrap();
//
// DEPENDÊNCIAS NECESSÁRIAS:
//   npm install @nestjs/core @nestjs/common @nestjs/platform-express
//   npm install @nestjs/config (para variáveis de ambiente)
// ============================================================
