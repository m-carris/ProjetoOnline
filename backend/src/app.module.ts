// ============================================================
// APP.MODULE.TS — Módulo Raiz da Aplicação
// ============================================================
// O QUE FAZER AQUI:
// Este é o módulo principal que "junta" todos os outros módulos.
// Pensa nele como o "índice" da aplicação.
//
// PASSOS:
// 1. Importar o decorator @Module do NestJS
// 2. Importar ConfigModule (para ler o .env)
// 3. Importar TypeOrmModule (para conectar à base de dados)
// 4. Importar todos os módulos do projeto:
//    - AuthModule (autenticação)
//    - UsersModule (utilizadores)
//    - MessagesModule (mensagens)
//    - TemplatesModule (mensagens rápidas/templates)
//    - NotificationsModule (WebSockets / push notifications)
//
// EXEMPLO DE CÓDIGO:
//   @Module({
//     imports: [
//       ConfigModule.forRoot({ isGlobal: true }),
//       TypeOrmModule.forRoot({
//         type: 'postgres',
//         host: process.env.DATABASE_HOST,
//         port: parseInt(process.env.DATABASE_PORT),
//         username: process.env.DATABASE_USER,
//         password: process.env.DATABASE_PASSWORD,
//         database: process.env.DATABASE_NAME,
//         autoLoadEntities: true,
//         synchronize: true, // Só em desenvolvimento!
//       }),
//       AuthModule,
//       UsersModule,
//       MessagesModule,
//       TemplatesModule,
//       NotificationsModule,
//     ],
//   })
//   export class AppModule {}
//
// DEPENDÊNCIAS NECESSÁRIAS:
//   npm install @nestjs/config
//   npm install @nestjs/typeorm typeorm pg
// ============================================================
