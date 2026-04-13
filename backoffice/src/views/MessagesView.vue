<!-- ==========================================================
  MESSAGES VIEW — Página de Envio de Mensagens
  ==========================================================
  O QUE FAZER AQUI:
  Página dedicada ao envio de mensagens com todas as opções.

  ELEMENTOS DA INTERFACE:
  1. Formulário completo de mensagem:
     - Campo de texto (conteúdo da mensagem)
     - Selector de prioridade (Normal / Alta)
     - Selector de destinatário (Todos / Grupo específico)
     - Selector de tipo (Acidente, Trânsito, Avaria, Desvio, Outro)
  2. Botões de templates (preenchem o formulário)
  3. Botão "Enviar"
  4. Confirmação visual após envio
  5. Lista de mensagens enviadas hoje

  LÓGICA:
  - Validar que o conteúdo não está vazio
  - Ao enviar: chamar API → mostrar sucesso → limpar formulário
  - Mensagens de alta prioridade ter destaque visual (cor vermelha)

  COMPONENTES:
  - <MessageForm />
  - <TemplateButtons />
  - <PrioritySelector />
  ========================================================== -->
