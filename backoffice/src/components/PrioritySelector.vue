<!-- ==========================================================
  COMPONENTE: PrioritySelector — Seletor de Prioridade
  ==========================================================
  O QUE FAZER AQUI:
  Componente simples para escolher a prioridade da mensagem.
  Dois botões: "Normal" e "Alta".

  PROPS:
  - modelValue: 'normal' | 'alta' (valor selecionado)

  EMITS:
  - @update:modelValue(value) — quando a seleção muda (v-model)

  ELEMENTOS:
  1. Botão "Normal" (estilo suave, azul/cinza)
  2. Botão "Alta" (estilo forte, vermelho)
  3. O botão ativo deve ter destaque visual

  EXEMPLO:
    <template>
      <div class="priority-selector">
        <button
          :class="{ active: modelValue === 'normal' }"
          @click="$emit('update:modelValue', 'normal')"
        >Normal</button>
        <button
          :class="{ active: modelValue === 'alta', urgent: true }"
          @click="$emit('update:modelValue', 'alta')"
        >⚠️ Alta</button>
      </div>
    </template>
  ========================================================== -->
