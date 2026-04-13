// ============================================================
// AUTH.GUARD.TS — Proteção de Rotas (Guard)
// ============================================================
// O QUE FAZER AQUI:
// Os Guards protegem rotas — só deixam passar pedidos autenticados.
// Criar dois guards:
//
// 1. JwtAuthGuard — Verifica se o pedido tem um token JWT válido
//    - Usado em todas as rotas protegidas
//
// 2. RolesGuard (opcional) — Verifica se o utilizador tem o role certo
//    - Ex: só coordenadores podem enviar mensagens
//
// EXEMPLO — JwtAuthGuard:
//   import { Injectable } from '@nestjs/common';
//   import { AuthGuard } from '@nestjs/passport';
//
//   @Injectable()
//   export class JwtAuthGuard extends AuthGuard('jwt') {}
//
// EXEMPLO — RolesGuard (opcional):
//   import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
//   import { Reflector } from '@nestjs/core';
//
//   @Injectable()
//   export class RolesGuard implements CanActivate {
//     constructor(private reflector: Reflector) {}
//
//     canActivate(context: ExecutionContext): boolean {
//       const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
//       if (!requiredRoles) return true;
//       const { user } = context.switchToHttp().getRequest();
//       return requiredRoles.includes(user.role);
//     }
//   }
// ============================================================
