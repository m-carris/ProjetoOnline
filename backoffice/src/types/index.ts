<!-- ==========================================================
  TYPES/INDEX.TS — Tipos TypeScript Partilhados
  ==========================================================
  O QUE FAZER AQUI:
  Definir interfaces TypeScript para os dados usados no backoffice.
  Isto garante que o código é type-safe (detetar erros antes de correr).

  INTERFACES A CRIAR:

  User {
    id: number;
    username: string;
    role: 'coordenador' | 'operador';
    nome: string;
  }

  Message {
    id: number;
    conteudo: string;
    prioridade: 'normal' | 'alta';
    tipo?: string;
    destinatario: string;
    remetente: User;
    createdAt: string;
  }

  Template {
    id: number;
    nome: string;
    conteudo: string;
    prioridade: 'normal' | 'alta';
    tipo: string;
  }

  LoginResponse {
    access_token: string;
    user: User;
  }

  MessageFilter {
    search?: string;
    dataInicio?: string;
    dataFim?: string;
    prioridade?: 'normal' | 'alta';
    page?: number;
    limit?: number;
  }
  ========================================================== -->
