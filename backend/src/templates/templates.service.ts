// ============================================================
// TEMPLATES.SERVICE.TS — Lógica de Negócio dos Templates
// ============================================================
// O QUE FAZER AQUI:
// CRUD para templates de mensagens rápidas.
//
// MÉTODOS A IMPLEMENTAR:
//
// 1. create(dto) — Criar novo template
// 2. findAll() — Listar todos os templates ativos
// 3. findById(id) — Obter template por ID
// 4. update(id, dto) — Atualizar template
// 5. remove(id) — Desativar template (soft delete)
// 6. seed() — Criar templates iniciais (se não existirem)
//
// EXEMPLO:
//   @Injectable()
//   export class TemplatesService {
//     constructor(
//       @InjectRepository(Template)
//       private templatesRepository: Repository<Template>,
//     ) {}
//
//     async findAll(): Promise<Template[]> {
//       return this.templatesRepository.find({
//         where: { ativo: true },
//       });
//     }
//
//     async seed() {
//       const count = await this.templatesRepository.count();
//       if (count === 0) {
//         const defaults = [
//           { nome: 'Acidente', conteudo: 'Atenção: acidente reportado em [local].', prioridade: 'alta', tipo: 'acidente' },
//           { nome: 'Trânsito Intenso', conteudo: 'Trânsito intenso em [local].', prioridade: 'normal', tipo: 'transito' },
//           { nome: 'Avaria', conteudo: 'Avaria reportada no veículo [número].', prioridade: 'alta', tipo: 'avaria' },
//           { nome: 'Desvio', conteudo: 'Desvio ativo em [local].', prioridade: 'alta', tipo: 'desvio' },
//         ];
//         await this.templatesRepository.save(defaults);
//       }
//     }
//   }
// ============================================================
