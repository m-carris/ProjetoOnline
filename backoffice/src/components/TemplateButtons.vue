<!-- ==========================================================
  COMPONENTE: TemplateButtons — Botões de Mensagens Rápidas
  ==========================================================
  O QUE FAZER AQUI:
  Componente com botões pré-definidos para mensagens rápidas.
  Ao clicar, preenche o formulário com o texto do template.

  PROPS:
  - templates: Template[] (lista de templates da API)

  EMITS:
  - @select(template) — quando um template é clicado

  ELEMENTOS:
  1. Uma linha de botões, um para cada template:
     - 🚨 Acidente
     - 🚗 Trânsito Intenso
     - 🔧 Avaria
     - ↩️ Desvio
  2. Cada botão mostra o nome do template
  3. Cor diferente conforme o tipo (ex: vermelho para acidente)

  LÓGICA:
  - Ao carregar, buscar templates da API
  - Ao clicar num botão, emitir evento @select com o template
  - O componente pai (MessageForm) preenche o formulário
  ========================================================== -->
