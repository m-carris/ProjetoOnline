<!-- ==========================================================
  COMPONENTE: MessageList — Lista de Mensagens
  ==========================================================
  O QUE FAZER AQUI:
  Componente que mostra uma lista de mensagens em formato de cards.
  Reutilizável no Dashboard, MessagesView e HistoryView.

  PROPS:
  - messages: Message[] (lista de mensagens a mostrar)
  - showAll?: boolean (mostrar todos os campos ou versão simplificada)

  ELEMENTOS por cada mensagem:
  1. Data/hora de envio (formatada: "13 Abr 2026, 14:30")
  2. Badge de prioridade (azul=normal, vermelho=alta)
  3. Tipo da mensagem (se existir)
  4. Conteúdo da mensagem
  5. Nome do remetente

  ESTILO:
  - Mensagens de prioridade ALTA devem ter destaque visual
    (borda vermelha, fundo levemente avermelhado)
  - Layout tipo "cards" com sombra suave
  ========================================================== -->
