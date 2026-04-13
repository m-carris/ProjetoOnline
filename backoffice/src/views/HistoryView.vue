<!-- ==========================================================
  HISTORY VIEW — Página de Histórico de Mensagens
  ==========================================================
  O QUE FAZER AQUI:
  Página para consultar todas as mensagens enviadas com filtros.

  ELEMENTOS DA INTERFACE:
  1. Barra de pesquisa (pesquisar por texto no conteúdo)
  2. Filtros:
     - Data início / Data fim
     - Prioridade (Normal / Alta / Todas)
  3. Tabela/lista de mensagens com:
     - Data/hora
     - Conteúdo (truncado se muito longo)
     - Prioridade (badge colorido)
     - Tipo
     - Remetente
  4. Paginação (10-20 mensagens por página)

  LÓGICA:
  - Ao carregar, buscar mensagens com filtros padrão
  - Ao mudar filtros, re-buscar mensagens
  - Implementar debounce na pesquisa (esperar 300ms após parar de escrever)
  - Permitir clicar numa mensagem para ver detalhes

  COMPONENTES:
  - <MessageList /> (lista de mensagens)
  ========================================================== -->
