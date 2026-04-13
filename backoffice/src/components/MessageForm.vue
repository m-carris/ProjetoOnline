<!-- ==========================================================
  COMPONENTE: MessageForm — Formulário de Envio de Mensagem
  ==========================================================
  O QUE FAZER AQUI:
  Componente reutilizável com o formulário para enviar mensagens.
  Usado no DashboardView e no MessagesView.

  PROPS (dados recebidos do componente pai):
  - initialContent?: string (conteúdo pré-preenchido, ex: de um template)
  - initialPriority?: 'normal' | 'alta'
  - initialType?: string

  EMITS (eventos enviados para o componente pai):
  - @send(messageData) — quando o formulário é submetido

  ELEMENTOS:
  1. <textarea> para o conteúdo da mensagem
  2. <PrioritySelector /> para escolher a prioridade
  3. <select> para o tipo (Acidente, Trânsito, etc.)
  4. <select> para o destinatário (Todos, Grupo)
  5. Botão "Enviar Mensagem"
  6. Indicador de loading durante o envio

  VALIDAÇÕES:
  - Conteúdo não pode estar vazio
  - Mostrar erro se tentar enviar vazio
  ========================================================== -->
