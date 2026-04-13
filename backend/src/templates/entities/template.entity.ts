// ============================================================
// TEMPLATE.ENTITY.TS — Entidade/Modelo do Template
// ============================================================
// O QUE FAZER AQUI:
// Definir a estrutura da tabela "templates" — mensagens rápidas
// pré-definidas que o coordenador pode usar com um clique.
//
// CAMPOS NECESSÁRIOS:
// - id: number (auto-gerado)
// - nome: string (nome do template, ex: "Acidente")
// - conteudo: string (texto pré-definido da mensagem)
// - prioridade: 'normal' | 'alta' (prioridade padrão)
// - tipo: string (categoria — 'acidente', 'transito', 'avaria', 'desvio')
// - ativo: boolean (se o template está ativo ou não)
//
// EXEMPLO:
//   @Entity('templates')
//   export class Template {
//     @PrimaryGeneratedColumn()
//     id: number;
//
//     @Column()
//     nome: string;
//
//     @Column('text')
//     conteudo: string;
//
//     @Column({ type: 'enum', enum: MessagePriority, default: MessagePriority.ALTA })
//     prioridade: MessagePriority;
//
//     @Column()
//     tipo: string;
//
//     @Column({ default: true })
//     ativo: boolean;
//   }
//
// TEMPLATES INICIAIS (criar via seed ou migration):
// - "Acidente" → "Atenção: acidente reportado em [local]. Proceder com cautela."
// - "Trânsito Intenso" → "Trânsito intenso em [local]. Possíveis atrasos."
// - "Avaria" → "Avaria reportada no veículo [número]. Solicitar substituição."
// - "Desvio" → "Desvio ativo em [local]. Seguir rota alternativa."
// ============================================================
