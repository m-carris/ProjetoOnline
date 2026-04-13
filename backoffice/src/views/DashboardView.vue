<!-- ==========================================================
  DASHBOARD VIEW — Página Principal do Coordenador
  ==========================================================
  O QUE FAZER AQUI:
  Criar a página principal que o coordenador vê após fazer login.
  É um resumo/painel de controlo.

  ELEMENTOS DA INTERFACE:
  1. Saudação: "Olá, [nome do coordenador]"
  2. Botões rápidos de templates (Acidente, Trânsito, Avaria, Desvio)
  3. Formulário rápido de envio de mensagem
  4. Lista das últimas 5-10 mensagens enviadas
  5. Contadores (total mensagens hoje, mensagens de alta prioridade)

  LÓGICA:
  - Ao carregar, buscar templates e mensagens recentes
  - Ao clicar num template, preencher o formulário com o texto
  - Ao enviar, chamar a API e notificar via WebSocket

  COMPONENTES A USAR:
  - <MessageForm /> (formulário de envio)
  - <TemplateButtons /> (botões de mensagens rápidas)
  - <MessageList /> (lista de mensagens recentes)
  ========================================================== -->
