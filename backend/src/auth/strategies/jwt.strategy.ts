// ============================================================
// JWT.STRATEGY.TS — Estratégia JWT para Passport
// ============================================================
// O QUE FAZER AQUI:
// Configurar como o NestJS valida os tokens JWT recebidos.
// Quando um pedido vem com um token no header "Authorization",
// esta estratégia extrai e valida esse token.
//
// EXEMPLO:
//   import { Injectable } from '@nestjs/common';
//   import { PassportStrategy } from '@nestjs/passport';
//   import { ExtractJwt, Strategy } from 'passport-jwt';
//   import { ConfigService } from '@nestjs/config';
//
//   @Injectable()
//   export class JwtStrategy extends PassportStrategy(Strategy) {
//     constructor(configService: ConfigService) {
//       super({
//         jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//         ignoreExpiration: false,
//         secretOrKey: configService.get<string>('JWT_SECRET'),
//       });
//     }
//
//     // Este método é chamado automaticamente quando o token é válido
//     // O "payload" contém os dados que pusemos no token (sub, username, role)
//     async validate(payload: any) {
//       return {
//         id: payload.sub,
//         username: payload.username,
//         role: payload.role,
//       };
//     }
//   }
// ============================================================
