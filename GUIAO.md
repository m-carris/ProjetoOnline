# 🎓 Guião Completo de Aprendizagem — Do Zero ao Projeto Final

## Sistema de Notificações do Coordenador

> **Bem-vindo!** Este guião vai ensinar-te tudo o que precisas para construir o projeto de estágio do zero.
> Não precisas de saber nada de programação — vamos começar desde o início.
> Segue cada passo com calma. Tens 3 meses. Não há pressa.

---

## 📋 Índice Geral

| Mês | Semana | Tema |
|-----|--------|------|
| 1 | 1 | Terminal, Node.js, npm e primeiros passos |
| 1 | 2 | TypeScript — a linguagem do projeto |
| 1 | 3 | NestJS — o framework do backend |
| 1 | 4 | Docker e PostgreSQL — base de dados |
| 2 | 5 | CRUD de Mensagens — criar, ler, atualizar, apagar |
| 2 | 6 | Autenticação — login com JWT |
| 2 | 7 | WebSockets — mensagens em tempo real |
| 2 | 8 | HTML, CSS e introdução ao Vue.js |
| 3 | 9 | Vue.js — Portal do Coordenador |
| 3 | 10 | Extensão de Chrome — notificações para operadores |
| 3 | 11 | Integração completa — ligar tudo |
| 3 | 12 | Melhorias finais, testes e demonstração |

---

## 🔧 O Que Vais Precisar de Instalar

Antes de começar, instala estas ferramentas no teu computador:

### 1. Visual Studio Code (VS Code)
O editor de código que vamos usar.
- Vai a: https://code.visualstudio.com/
- Faz download e instala
- Extensões recomendadas para instalar no VS Code:
  - **Portuguese (Portugal) Language Pack** — para ter o VS Code em português
  - **Prettier** — formata o código automaticamente
  - **ESLint** — deteta erros no código
  - **Thunder Client** — para testar a API (como o Postman, mas dentro do VS Code)

### 2. Node.js
O "motor" que corre JavaScript/TypeScript fora do browser.
- Vai a: https://nodejs.org/
- Faz download da versão **LTS** (a mais estável)
- Instala com as opções padrão
- Para verificar, abre o terminal e escreve:
```bash
node --version
```
Deve aparecer algo como `v20.x.x` ou superior.

### 3. Docker Desktop
Usado para correr a base de dados PostgreSQL sem complicações.
- Vai a: https://www.docker.com/products/docker-desktop/
- Faz download e instala
- Para verificar:
```bash
docker --version
```

### 4. Git
Para controlo de versões (guardar o historial do teu código).
- Vai a: https://git-scm.com/
- Faz download e instala
- Para verificar:
```bash
git --version
```

### 5. Google Chrome
Para testar a extensão de browser.
- Provavelmente já tens, mas certifica-te que está atualizado.

---

# 📅 MÊS 1 — FUNDAMENTOS

> Objetivo: Aprender as bases de tudo. No final do mês 1, vais saber usar o terminal,
> programar em TypeScript, criar um servidor com NestJS e ter uma base de dados a funcionar.

---

## 📖 SEMANA 1 — Terminal, Node.js, npm e Primeiros Passos

### Dia 1: O Terminal (Linha de Comandos)

O **terminal** (ou "linha de comandos") é uma janela onde escreves comandos de texto para o computador executar.
É como conversar com o computador por escrito, em vez de clicar em botões.

**Como abrir o terminal:**
- No VS Code: menu `Terminal` → `Novo Terminal` (ou atalho `` Ctrl+` ``)
- No Windows: procurar por "PowerShell" ou "Prompt de Comando"

**Comandos básicos que vais usar todos os dias:**

```bash
# Ver em que pasta estás
pwd

# Listar ficheiros e pastas
ls

# Entrar numa pasta
cd nome-da-pasta

# Voltar uma pasta atrás
cd ..

# Criar uma pasta nova
mkdir nome-da-pasta

# Limpar o terminal
clear
```

**🏋️ Exercício 1.1 — Pratica no terminal:**
1. Abre o terminal
2. Escreve `pwd` e carrega Enter — vê onde estás
3. Escreve `ls` — vê o que há na pasta
4. Cria uma pasta: `mkdir aprender-typescript`
5. Entra nela: `cd aprender-typescript`
6. Confirma: `pwd`

> 💡 **Dica:** Não tenhas medo do terminal. No início parece estranho, mas em poucos dias
> vai ser natural. Todos os programadores usam o terminal diariamente.

---

### Dia 2: Node.js — O Que É e Para Que Serve

**Node.js** é um programa que permite correr **JavaScript** fora do browser (fora do Chrome/Firefox).

Normalmente, JavaScript só funciona dentro de páginas web. Mas com Node.js, podemos usar
JavaScript (e TypeScript) para criar servidores, APIs, ferramentas — tudo o que quisermos.

**No nosso projeto**, o Node.js vai correr o **backend** (o servidor que guarda e envia mensagens).

**Testar o Node.js:**

Abre o terminal e escreve:
```bash
node
```

Entras no modo interativo. Experimenta:
```javascript
2 + 2
```
Resultado: `4`

```javascript
"Olá" + " " + "Mundo"
```
Resultado: `'Olá Mundo'`

Para sair, escreve `.exit` ou carrega `Ctrl+C` duas vezes.

---

**Criar o teu primeiro ficheiro JavaScript:**

1. Abre o VS Code
2. Abre a pasta `aprender-typescript` que criaste antes (File → Open Folder)
3. Cria um ficheiro chamado `ola.js`
4. Escreve isto dentro:

```javascript
// ola.js
// Este é o meu primeiro programa!
// Tudo o que começa com // é um comentário — o computador ignora.

// console.log() escreve uma mensagem no terminal
console.log('Olá Mundo!');
console.log('O meu nome é [o teu nome]');
console.log('Estou a aprender a programar!');

// Podemos fazer contas
console.log(10 + 5);     // Resultado: 15
console.log(10 - 3);     // Resultado: 7
console.log(4 * 3);      // Resultado: 12
console.log(10 / 2);     // Resultado: 5
```

5. Guarda o ficheiro (Ctrl+S)
6. Abre o terminal e corre:

```bash
node ola.js
```

Deve aparecer:
```
Olá Mundo!
O meu nome é [o teu nome]
Estou a aprender a programar!
15
7
12
5
```

🎉 **Parabéns!** Acabaste de correr o teu primeiro programa!

---

### Dia 3: npm — O Gestor de Pacotes

**npm** (Node Package Manager) é uma ferramenta que vem com o Node.js.
Serve para instalar "pacotes" — código feito por outras pessoas que podemos usar nos nossos projetos.

Imagina que queres usar uma calculadora especial no teu código. Em vez de a construíres do zero,
instalas um pacote que já tem essa calculadora pronta.

**Verificar que tens npm:**
```bash
npm --version
```

**O que é o `package.json`?**

O `package.json` é o "bilhete de identidade" do projeto. Diz:
- Como se chama o projeto
- Que versão tem
- Que pacotes (dependências) precisa
- Que comandos pode correr

**🏋️ Exercício 1.2 — Criar o teu primeiro projeto npm:**

1. No terminal, certifica-te que estás na pasta `aprender-typescript`
2. Escreve:
```bash
npm init -y
```

Isto cria um `package.json` com valores padrão. Abre-o no VS Code e vê o que contém.

Deve ser algo como:
```json
{
  "name": "aprender-typescript",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**Explicação de cada campo:**
- `"name"` — o nome do projeto
- `"version"` — a versão (começa em 1.0.0)
- `"scripts"` — comandos que podes correr com `npm run nome-do-comando`
- `"dependencies"` — pacotes que o projeto precisa (ainda vazio)

---

### Dia 4: Variáveis e Tipos de Dados em JavaScript

Antes de aprendermos TypeScript, precisamos de perceber os conceitos básicos de programação.

**O que é uma variável?**

Uma variável é como uma "caixa" onde guardas um valor. Dás-lhe um nome e podes usar esse nome
para aceder ao valor mais tarde.

Cria um ficheiro chamado `variaveis.js`:

```javascript
// variaveis.js
// Aprender sobre variáveis em JavaScript

// ==========================================
// 1. CRIAR VARIÁVEIS
// ==========================================

// Usamos "let" para criar variáveis que podem mudar
let nome = 'Maria';
let idade = 25;
let altura = 1.68;

console.log('Nome:', nome);       // Nome: Maria
console.log('Idade:', idade);     // Idade: 25
console.log('Altura:', altura);   // Altura: 1.68

// Podemos mudar o valor de uma variável criada com "let"
idade = 26;
console.log('Nova idade:', idade); // Nova idade: 26

// Usamos "const" para valores que NUNCA mudam
const paisNascimento = 'Portugal';
console.log('País:', paisNascimento); // País: Portugal

// Se tentares mudar um "const", dá erro:
// paisNascimento = 'Espanha'; // ❌ ERRO! Não podes mudar um const

// ==========================================
// 2. TIPOS DE DADOS
// ==========================================

// String (texto) — sempre entre aspas
const saudacao = 'Olá!';
const frase = "Isto também é uma string";
const template = `O meu nome é ${nome} e tenho ${idade} anos`; // Template string
console.log(template); // O meu nome é Maria e tenho 26 anos

// Number (número) — inteiros e decimais
const inteiro = 42;
const decimal = 3.14;
const negativo = -10;

// Boolean (verdadeiro ou falso) — só pode ser true ou false
const estaChuva = true;
const eDeFimDeSemana = false;

console.log('Está a chover?', estaChuva);     // true
console.log('É fim de semana?', eDeFimDeSemana); // false

// null — "vazio de propósito" (decidimos que não tem valor)
const resultado = null;

// undefined — "ainda não tem valor" (não foi definido)
let futuro;
console.log('futuro:', futuro); // futuro: undefined

// ==========================================
// 3. ARRAYS (LISTAS)
// ==========================================

// Um array é uma lista ordenada de valores
const frutas = ['maçã', 'banana', 'laranja'];
console.log('Frutas:', frutas);

// Aceder a um elemento (começa no índice 0!)
console.log('Primeira fruta:', frutas[0]); // maçã
console.log('Segunda fruta:', frutas[1]);  // banana
console.log('Terceira fruta:', frutas[2]); // laranja

// Adicionar um elemento ao fim
frutas.push('uva');
console.log('Depois de push:', frutas); // ['maçã', 'banana', 'laranja', 'uva']

// Ver quantos elementos tem
console.log('Quantidade:', frutas.length); // 4

// ==========================================
// 4. OBJETOS
// ==========================================

// Um objeto agrupa vários dados relacionados
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'Lisboa',
  ativo: true,
};

console.log('Pessoa:', pessoa);
console.log('Nome da pessoa:', pessoa.nome);   // João
console.log('Cidade:', pessoa.cidade);          // Lisboa

// Podemos mudar valores do objeto
pessoa.idade = 31;
console.log('Nova idade:', pessoa.idade); // 31
```

Corre com:
```bash
node variaveis.js
```

> 💡 **Resumo dos tipos de dados:**
> | Tipo | Exemplo | Descrição |
> |------|---------|-----------|
> | `string` | `'Olá'` | Texto |
> | `number` | `42`, `3.14` | Números |
> | `boolean` | `true`, `false` | Verdadeiro/Falso |
> | `null` | `null` | Vazio de propósito |
> | `undefined` | `undefined` | Sem valor definido |
> | `array` | `[1, 2, 3]` | Lista de valores |
> | `object` | `{nome: 'Ana'}` | Dados agrupados |

---

### Dia 5: Condições e Ciclos

Cria um ficheiro chamado `logica.js`:

```javascript
// logica.js
// Aprender condições (if/else) e ciclos (for/while)

// ==========================================
// 1. CONDIÇÕES — if / else
// ==========================================
// "Se isto acontecer, faz aquilo. Senão, faz outra coisa."

const temperatura = 35;

if (temperatura > 30) {
  console.log('Está muito calor! 🥵');
} else if (temperatura > 20) {
  console.log('Está bom tempo! ☀️');
} else if (temperatura > 10) {
  console.log('Está fresco! 🌤️');
} else {
  console.log('Está frio! 🥶');
}

// Operadores de comparação:
// >   maior que
// <   menor que
// >=  maior ou igual
// <=  menor ou igual
// === igual (usa SEMPRE três iguais em JavaScript!)
// !== diferente

const idade = 18;

if (idade >= 18) {
  console.log('É maior de idade');
} else {
  console.log('É menor de idade');
}

// Operadores lógicos:
// && (E) — ambas as condições têm de ser verdadeiras
// || (OU) — basta uma ser verdadeira
// !  (NÃO) — inverte o valor

const temBilhete = true;
const temIdade = true;

if (temBilhete && temIdade) {
  console.log('Pode entrar! ✅');
} else {
  console.log('Não pode entrar! ❌');
}

// ==========================================
// 2. CICLO FOR — repetir algo X vezes
// ==========================================
// for (inicio; condição; incremento)

console.log('\n--- Ciclo for ---');

// Contar de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log('Número:', i);
}
// Resultado:
// Número: 1
// Número: 2
// Número: 3
// Número: 4
// Número: 5

// Percorrer um array
const cores = ['vermelho', 'verde', 'azul'];

for (let i = 0; i < cores.length; i++) {
  console.log(`Cor ${i}: ${cores[i]}`);
}

// Forma mais moderna de percorrer arrays: for...of
console.log('\n--- for...of ---');
for (const cor of cores) {
  console.log('Cor:', cor);
}

// ==========================================
// 3. CICLO WHILE — repetir enquanto condição for verdadeira
// ==========================================

console.log('\n--- Ciclo while ---');

let contador = 0;

while (contador < 3) {
  console.log('Contador:', contador);
  contador++; // contador = contador + 1
}
// Resultado:
// Contador: 0
// Contador: 1
// Contador: 2

// ==========================================
// 4. EXERCÍCIO PRÁTICO
// ==========================================

console.log('\n--- Exercício ---');

// Temos uma lista de mensagens com prioridades
const mensagens = [
  { texto: 'Acidente na Av. Roma', prioridade: 'alta' },
  { texto: 'Trânsito normal', prioridade: 'normal' },
  { texto: 'Avaria no autocarro 735', prioridade: 'alta' },
  { texto: 'Tudo ok na linha 28', prioridade: 'normal' },
];

// Mostrar apenas as mensagens com prioridade alta
for (const msg of mensagens) {
  if (msg.prioridade === 'alta') {
    console.log('⚠️ URGENTE:', msg.texto);
  }
}
// Resultado:
// ⚠️ URGENTE: Acidente na Av. Roma
// ⚠️ URGENTE: Avaria no autocarro 735
```

Corre com:
```bash
node logica.js
```

---

### Dia 6: Funções

Cria um ficheiro chamado `funcoes.js`:

```javascript
// funcoes.js
// Aprender funções — blocos de código reutilizáveis

// ==========================================
// 1. O QUE É UMA FUNÇÃO?
// ==========================================
// Uma função é um bloco de código que:
// - Tem um nome
// - Pode receber dados (parâmetros)
// - Pode devolver um resultado (return)
// - Pode ser chamada (executada) várias vezes

// Forma clássica de criar uma função
function saudacao(nome) {
  return 'Olá, ' + nome + '!';
}

// Chamar (executar) a função
const resultado1 = saudacao('Maria');
console.log(resultado1); // Olá, Maria!

console.log(saudacao('João')); // Olá, João!

// ==========================================
// 2. ARROW FUNCTIONS (FUNÇÕES SETA)
// ==========================================
// Forma mais moderna e curta de escrever funções
// Usamos muito no NestJS!

const soma = (a, b) => {
  return a + b;
};

console.log(soma(3, 5)); // 8

// Se a função só tem uma linha, podemos simplificar:
const dobro = (x) => x * 2;

console.log(dobro(4));  // 8
console.log(dobro(10)); // 20

// ==========================================
// 3. FUNÇÕES COM OBJETOS
// ==========================================

const criarMensagem = (texto, prioridade) => {
  return {
    texto: texto,
    prioridade: prioridade,
    dataCriacao: new Date().toLocaleString('pt-PT'),
  };
};

const msg1 = criarMensagem('Acidente na Av. Roma', 'alta');
console.log('Mensagem criada:', msg1);

const msg2 = criarMensagem('Tudo normal', 'normal');
console.log('Mensagem criada:', msg2);

// ==========================================
// 4. FUNÇÕES QUE CHAMAM OUTRAS FUNÇÕES
// ==========================================

const formatarPrioridade = (prioridade) => {
  if (prioridade === 'alta') {
    return '🔴 ALTA';
  } else {
    return '🟢 Normal';
  }
};

const mostrarMensagem = (mensagem) => {
  const prioFormatada = formatarPrioridade(mensagem.prioridade);
  console.log(`[${prioFormatada}] ${mensagem.texto}`);
};

mostrarMensagem(msg1); // [🔴 ALTA] Acidente na Av. Roma
mostrarMensagem(msg2); // [🟢 Normal] Tudo normal

// ==========================================
// 5. MÉTODOS DE ARRAYS ÚTEIS
// ==========================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .filter() — filtra elementos que cumprem uma condição
const pares = numeros.filter((n) => n % 2 === 0);
console.log('Pares:', pares); // [2, 4, 6, 8, 10]

// .map() — transforma cada elemento
const dobros = numeros.map((n) => n * 2);
console.log('Dobros:', dobros); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// .find() — encontra o primeiro elemento que cumpre a condição
const primeiroMaiorQue5 = numeros.find((n) => n > 5);
console.log('Primeiro > 5:', primeiroMaiorQue5); // 6

// .forEach() — executa algo para cada elemento (sem devolver nada)
console.log('\nTodos os números:');
numeros.forEach((n) => {
  console.log(`  - ${n}`);
});
```

Corre com:
```bash
node funcoes.js
```

---

### Dia 7: Código Assíncrono (Promises e async/await)

Este é um conceito **muito importante** para o nosso projeto!
Quando o servidor faz coisas que demoram (ir à base de dados, por exemplo),
não pode ficar "parado" à espera. Usa código assíncrono para continuar a trabalhar
enquanto espera pela resposta.

Cria um ficheiro chamado `assincrono.js`:

```javascript
// assincrono.js
// Aprender código assíncrono — Promises e async/await

// ==========================================
// 1. O PROBLEMA
// ==========================================
// Imagina que vais buscar dados a uma base de dados.
// Isso demora tempo (talvez 1 segundo).
// Não queres que o programa fique "congelado" à espera.

// Vamos simular uma operação que demora tempo
const buscarDados = () => {
  return new Promise((resolve) => {
    // setTimeout simula algo que demora 2 segundos
    setTimeout(() => {
      resolve('Dados encontrados!');
    }, 2000);
  });
};

// ==========================================
// 2. USANDO ASYNC/AWAIT
// ==========================================
// "async" diz que a função é assíncrona
// "await" diz "espera aqui até ter a resposta"

const programa = async () => {
  console.log('1. A iniciar...');
  console.log('2. A buscar dados (vai demorar 2 segundos)...');

  // "await" espera pela resposta sem bloquear o programa
  const resultado = await buscarDados();

  console.log('3. Resultado:', resultado);
  console.log('4. Concluído!');
};

// Executar
programa();

// ==========================================
// 3. EXEMPLO PRÁTICO — Simular API de mensagens
// ==========================================

// Simular uma "base de dados" de mensagens
const baseDeDados = [
  { id: 1, texto: 'Acidente na Av. Roma', prioridade: 'alta' },
  { id: 2, texto: 'Tudo normal', prioridade: 'normal' },
  { id: 3, texto: 'Avaria autocarro 735', prioridade: 'alta' },
];

// Simular ir buscar mensagens (como se fosse à base de dados)
const buscarMensagens = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(baseDeDados);
    }, 1000);
  });
};

// Simular buscar uma mensagem por id
const buscarMensagemPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const mensagem = baseDeDados.find((m) => m.id === id);
      if (mensagem) {
        resolve(mensagem);
      } else {
        reject(new Error(`Mensagem com id ${id} não encontrada`));
      }
    }, 500);
  });
};

// Usar as funções assíncronas
const testarMensagens = async () => {
  console.log('\n--- Teste de Mensagens ---');

  // Buscar todas
  const todas = await buscarMensagens();
  console.log('Todas as mensagens:', todas);

  // Buscar por id
  const msg = await buscarMensagemPorId(2);
  console.log('Mensagem 2:', msg);

  // Tratar erros com try/catch
  try {
    const msgInexistente = await buscarMensagemPorId(99);
    console.log(msgInexistente);
  } catch (erro) {
    console.log('Erro apanhado:', erro.message);
    // Resultado: Erro apanhado: Mensagem com id 99 não encontrada
  }
};

// Executar depois de 3 segundos (para não misturar com o exemplo anterior)
setTimeout(() => {
  testarMensagens();
}, 3000);
```

Corre com:
```bash
node assincrono.js
```

> 💡 **Resumo:**
> - `async` antes de uma função = "esta função é assíncrona"
> - `await` antes de uma chamada = "espera pelo resultado"
> - `try/catch` = "tenta isto, e se der erro, faz aquilo"
> - Vais usar `async/await` em **TUDO** no NestJS!

---

## 📖 SEMANA 2 — TypeScript: A Linguagem do Projeto

### Porquê TypeScript em vez de JavaScript?

**TypeScript** é JavaScript com **tipos**. O que são "tipos"?

Em JavaScript, podes fazer coisas como:
```javascript
let idade = 25;     // número
idade = "vinte e cinco"; // texto — JavaScript aceita sem reclamar!
```

Isto pode causar bugs difíceis de encontrar. TypeScript não deixa:
```typescript
let idade: number = 25;
idade = "vinte e cinco"; // ❌ ERRO! TypeScript avisa logo!
```

> **TypeScript = JavaScript + Segurança.** O TypeScript avisa-te dos erros ANTES de correres o programa.

---

### Dia 1: Instalar TypeScript e Primeiro Programa

**Instalar TypeScript globalmente:**
```bash
npm install -g typescript ts-node
```

- `typescript` — o compilador que transforma TypeScript em JavaScript
- `ts-node` — permite correr ficheiros TypeScript diretamente (sem compilar primeiro)

**Verificar:**
```bash
tsc --version
```

**Criar o primeiro ficheiro TypeScript:**

Na pasta `aprender-typescript`, cria um ficheiro `primeiro.ts` (nota a extensão `.ts`):

```typescript
// primeiro.ts
// O meu primeiro programa em TypeScript!

// Em TypeScript, indicamos o TIPO de cada variável depois do nome
// variavel: tipo = valor

// String (texto)
const nome: string = 'Maria';
const apelido: string = 'Silva';

// Number (número)
const idade: number = 25;
const altura: number = 1.68;

// Boolean (verdadeiro/falso)
const ativo: boolean = true;

// O TypeScript sabe o tipo automaticamente (inferência de tipos)
// Não precisas de escrever o tipo sempre — ele adivinha!
const cidade = 'Lisboa'; // TypeScript sabe que é string

console.log(`${nome} ${apelido}, ${idade} anos, ${cidade}`);
// Maria Silva, 25 anos, Lisboa

// ==========================================
// FUNÇÕES COM TIPOS
// ==========================================

// Em JavaScript:     function soma(a, b) { return a + b; }
// Em TypeScript:     function soma(a: number, b: number): number { return a + b; }
//                                   ^tipo      ^tipo      ^tipo de retorno

function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(3, 5)); // 8

// Arrow function com tipos
const saudacao = (nome: string): string => {
  return `Olá, ${nome}!`;
};

console.log(saudacao('João')); // Olá, João!

// Se tentares passar um tipo errado:
// console.log(soma('3', 5)); // ❌ ERRO! '3' é string, não number
// O TypeScript avisa-te ANTES de correres o programa! 🎯
```

**Correr:**
```bash
npx ts-node primeiro.ts
```

> 💡 **`npx`** corre um pacote npm sem o instalar globalmente.
> `npx ts-node ficheiro.ts` corre o ficheiro TypeScript diretamente.

---

### Dia 2: Interfaces e Tipos Personalizados

**Interfaces** são uma das coisas mais importantes do TypeScript.
Uma interface define a "forma" (shape) de um objeto — que campos tem e de que tipo são.

Cria `interfaces.ts`:

```typescript
// interfaces.ts
// Aprender interfaces — definir a forma dos objetos

// ==========================================
// 1. INTERFACES BÁSICAS
// ==========================================

// Uma interface define que campos um objeto DEVE ter
interface Pessoa {
  nome: string;
  idade: number;
  cidade: string;
}

// Agora, se criarmos um objeto do tipo Pessoa, TEM de ter estes 3 campos:
const maria: Pessoa = {
  nome: 'Maria',
  idade: 25,
  cidade: 'Lisboa',
};

// Isto daria erro:
// const joao: Pessoa = { nome: 'João' }; // ❌ Faltam idade e cidade!

console.log('Maria:', maria);

// ==========================================
// 2. CAMPOS OPCIONAIS — o ponto de interrogação ?
// ==========================================

interface Mensagem {
  id: number;
  texto: string;
  prioridade: 'normal' | 'alta'; // Só pode ser 'normal' OU 'alta'
  dataCriacao: Date;
  lida?: boolean; // O ? torna o campo opcional
}

const msg1: Mensagem = {
  id: 1,
  texto: 'Acidente na Av. Roma',
  prioridade: 'alta',
  dataCriacao: new Date(),
  // "lida" não é obrigatório porque tem ?
};

const msg2: Mensagem = {
  id: 2,
  texto: 'Tudo normal',
  prioridade: 'normal',
  dataCriacao: new Date(),
  lida: true, // Mas podemos incluí-lo se quisermos
};

console.log('Mensagem 1:', msg1);
console.log('Mensagem 2:', msg2);

// ==========================================
// 3. FUNÇÕES COM INTERFACES
// ==========================================

// Função que recebe uma Mensagem e devolve uma string formatada
const formatarMensagem = (msg: Mensagem): string => {
  const prioIcone = msg.prioridade === 'alta' ? '🔴' : '🟢';
  const data = msg.dataCriacao.toLocaleString('pt-PT');
  return `${prioIcone} [${data}] ${msg.texto}`;
};

console.log(formatarMensagem(msg1));
console.log(formatarMensagem(msg2));

// Função que filtra mensagens por prioridade
const filtrarPorPrioridade = (
  mensagens: Mensagem[],   // Array de Mensagem
  prioridade: 'normal' | 'alta',
): Mensagem[] => {           // Devolve Array de Mensagem
  return mensagens.filter((m) => m.prioridade === prioridade);
};

const todasMensagens: Mensagem[] = [msg1, msg2];
const urgentes = filtrarPorPrioridade(todasMensagens, 'alta');
console.log('Urgentes:', urgentes);

// ==========================================
// 4. ENUMS — Listas de opções fixas
// ==========================================

// Um enum define um conjunto fixo de opções
enum Prioridade {
  NORMAL = 'normal',
  ALTA = 'alta',
}

enum TipoUtilizador {
  COORDENADOR = 'coordenador',
  OPERADOR = 'operador',
}

interface Utilizador {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUtilizador;
}

const admin: Utilizador = {
  id: 1,
  nome: 'Carlos',
  email: 'carlos@carris.pt',
  tipo: TipoUtilizador.COORDENADOR,
};

console.log('Admin:', admin);
console.log('É coordenador?', admin.tipo === TipoUtilizador.COORDENADOR); // true
```

**Correr:**
```bash
npx ts-node interfaces.ts
```

---

### Dia 3: Classes em TypeScript

**Classes** são como "plantas" (blueprints) para criar objetos.
O NestJS usa classes para TUDO — controllers, services, modules, entities.

Cria `classes.ts`:

```typescript
// classes.ts
// Aprender classes em TypeScript

// ==========================================
// 1. CLASSE BÁSICA
// ==========================================

class Animal {
  // Propriedades (campos) da classe
  nome: string;
  tipo: string;

  // Constructor — função que é chamada quando criamos um novo Animal
  // "this" refere-se ao objeto que estamos a criar
  constructor(nome: string, tipo: string) {
    this.nome = nome;
    this.tipo = tipo;
  }

  // Método (função da classe)
  apresentar(): string {
    return `Olá, sou o ${this.nome} e sou um ${this.tipo}`;
  }
}

// Criar objetos a partir da classe (instâncias)
const gato = new Animal('Miau', 'gato');
const cao = new Animal('Bobby', 'cão');

console.log(gato.apresentar()); // Olá, sou o Miau e sou um gato
console.log(cao.apresentar());  // Olá, sou o Bobby e sou um cão

// ==========================================
// 2. FORMA CURTA DO TYPESCRIPT
// ==========================================
// Em vez de declarar propriedades E depois atribuí-las no constructor,
// podemos usar a forma curta com "public", "private" ou "readonly"

class Utilizador {
  // "public" = acessível de fora
  // "private" = só acessível dentro da classe
  // "readonly" = pode ser lido mas não alterado
  constructor(
    public readonly id: number,
    public nome: string,
    public email: string,
    private password: string,
  ) {}
  // Não precisamos de "this.id = id" — o TypeScript faz automaticamente!

  // Método para verificar password
  verificarPassword(tentativa: string): boolean {
    return this.password === tentativa;
  }

  // Método para mostrar info (sem a password!)
  mostrarInfo(): string {
    return `[${this.id}] ${this.nome} (${this.email})`;
  }
}

const user = new Utilizador(1, 'Maria', 'maria@carris.pt', 'segredo123');
console.log(user.mostrarInfo());            // [1] Maria (maria@carris.pt)
console.log(user.nome);                     // Maria
// console.log(user.password);              // ❌ ERRO! password é private
console.log(user.verificarPassword('abc')); // false
console.log(user.verificarPassword('segredo123')); // true

// ==========================================
// 3. EXEMPLO DO PROJETO — Classe MensagemService
// ==========================================
// Isto é parecido com o que vais fazer no NestJS!

interface CriarMensagemDto {
  texto: string;
  prioridade: 'normal' | 'alta';
}

interface MensagemCompleta {
  id: number;
  texto: string;
  prioridade: 'normal' | 'alta';
  dataCriacao: Date;
}

class MensagemService {
  // Simular uma "base de dados" com um array
  private mensagens: MensagemCompleta[] = [];
  private proximoId: number = 1;

  // Criar uma nova mensagem
  criar(dados: CriarMensagemDto): MensagemCompleta {
    const novaMensagem: MensagemCompleta = {
      id: this.proximoId++,
      texto: dados.texto,
      prioridade: dados.prioridade,
      dataCriacao: new Date(),
    };
    this.mensagens.push(novaMensagem);
    return novaMensagem;
  }

  // Buscar todas as mensagens
  buscarTodas(): MensagemCompleta[] {
    return this.mensagens;
  }

  // Buscar por id
  buscarPorId(id: number): MensagemCompleta | undefined {
    return this.mensagens.find((m) => m.id === id);
  }
}

// Usar o service
const service = new MensagemService();

service.criar({ texto: 'Acidente na Av. Roma', prioridade: 'alta' });
service.criar({ texto: 'Tudo normal na linha 28', prioridade: 'normal' });
service.criar({ texto: 'Avaria autocarro 735', prioridade: 'alta' });

console.log('\nTodas as mensagens:');
console.log(service.buscarTodas());

console.log('\nMensagem com id 2:');
console.log(service.buscarPorId(2));

console.log('\nMensagem com id 99:');
console.log(service.buscarPorId(99)); // undefined
```

**Correr:**
```bash
npx ts-node classes.ts
```

> 💡 **Resumo:**
> - `class` = planta para criar objetos
> - `constructor` = função que corre quando fazes `new`
> - `public` = acessível de fora
> - `private` = só acessível dentro da classe
> - `readonly` = não pode ser alterado depois de criado
> - O NestJS usa esta forma curta `constructor(private readonly servico: Servico) {}` em todo o lado!

---

### Dia 4: Decorators (Decoradores)

**Decoradores** são uma funcionalidade especial do TypeScript que o NestJS usa MUITO.
Um decorador é como uma "etiqueta" que colamos numa classe, método ou propriedade
para lhe adicionar comportamento extra.

Cria `decoradores.ts`:

```typescript
// decoradores.ts
// Aprender decoradores — a base do NestJS!

// ==========================================
// 1. O QUE É UM DECORADOR?
// ==========================================
// Um decorador começa sempre com @ e aparece em cima de algo.
// No NestJS, vais ver decoradores como:
//   @Module()       — marca uma classe como módulo
//   @Controller()   — marca uma classe como controller
//   @Injectable()   — marca uma classe como service
//   @Get()          — marca um método para responder a pedidos GET
//   @Post()         — marca um método para responder a pedidos POST
//   @Column()       — marca uma propriedade como coluna na base de dados

// Vamos criar um decorador simples para perceber como funcionam
// (No projeto real, NÃO vais criar decoradores — vais usar os do NestJS)

function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`📝 Chamando ${propertyKey} com args:`, args);
    const resultado = metodoOriginal.apply(this, args);
    console.log(`📝 ${propertyKey} devolveu:`, resultado);
    return resultado;
  };
}

class Calculadora {
  @Log
  somar(a: number, b: number): number {
    return a + b;
  }

  @Log
  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculadora();
calc.somar(3, 5);
// 📝 Chamando somar com args: [3, 5]
// 📝 somar devolveu: 8

calc.multiplicar(4, 7);
// 📝 Chamando multiplicar com args: [4, 7]
// 📝 multiplicar devolveu: 28

// ==========================================
// 2. COMO O NESTJS USA DECORADORES
// ==========================================
// Aqui está um PREVIEW de como o NestJS usa decoradores.
// Não te preocupes em perceber tudo agora — é só para teres uma ideia!

/*
// Decorador @Controller diz ao NestJS:
// "Esta classe é um controller, recebe pedidos HTTP em /api/mensagens"
@Controller('api/mensagens')
class MensagensController {

  // @Get() diz: "quando alguém faz GET /api/mensagens, corre esta função"
  @Get()
  buscarTodas() {
    return this.service.buscarTodas();
  }

  // @Post() diz: "quando alguém faz POST /api/mensagens, corre esta função"
  // @Body() captura os dados enviados no corpo do pedido
  @Post()
  criar(@Body() dados: CriarMensagemDto) {
    return this.service.criar(dados);
  }
}
*/

console.log('\n✅ Os decoradores são a base do NestJS!');
console.log('Vais usá-los constantemente no projeto.');
```

**Correr:**
```bash
npx ts-node decoradores.ts
```

---

### Dia 5: Módulos (import/export)

Cria dois ficheiros para perceber como organizar código em ficheiros separados.

Cria `utilidades.ts`:

```typescript
// utilidades.ts
// Este ficheiro EXPORTA funções e tipos para outros ficheiros usarem

// Exportar uma interface
export interface Mensagem {
  id: number;
  texto: string;
  prioridade: 'normal' | 'alta';
}

// Exportar uma função
export const formatarMensagem = (msg: Mensagem): string => {
  const icone = msg.prioridade === 'alta' ? '🔴' : '🟢';
  return `${icone} [#${msg.id}] ${msg.texto}`;
};

// Exportar outra função
export const filtrarUrgentes = (mensagens: Mensagem[]): Mensagem[] => {
  return mensagens.filter((m) => m.prioridade === 'alta');
};

// Exportar uma constante
export const VERSAO = '1.0.0';
```

Cria `programa.ts`:

```typescript
// programa.ts
// Este ficheiro IMPORTA de utilidades.ts

// Importar coisas específicas de outro ficheiro
import { Mensagem, formatarMensagem, filtrarUrgentes, VERSAO } from './utilidades';

console.log(`Sistema de Mensagens v${VERSAO}`);
console.log('================================\n');

// Usar a interface importada
const mensagens: Mensagem[] = [
  { id: 1, texto: 'Acidente na Av. Roma', prioridade: 'alta' },
  { id: 2, texto: 'Tudo normal', prioridade: 'normal' },
  { id: 3, texto: 'Avaria autocarro 735', prioridade: 'alta' },
  { id: 4, texto: 'Trânsito fluido', prioridade: 'normal' },
];

// Usar as funções importadas
console.log('Todas as mensagens:');
for (const msg of mensagens) {
  console.log('  ' + formatarMensagem(msg));
}

console.log('\nMensagens urgentes:');
const urgentes = filtrarUrgentes(mensagens);
for (const msg of urgentes) {
  console.log('  ' + formatarMensagem(msg));
}
```

**Correr:**
```bash
npx ts-node programa.ts
```

> 💡 **Resumo:**
> - `export` = "disponibilizo isto para outros ficheiros"
> - `import { X } from './ficheiro'` = "quero usar X de outro ficheiro"
> - No NestJS, cada ficheiro exporta algo e importa de outros — é assim que tudo se liga!

---

### Dia 6-7: Exercício Prático da Semana 2

Cria um mini-projeto que simula o nosso sistema de mensagens, usando tudo o que aprendeste.

Cria `mini-projeto.ts`:

```typescript
// mini-projeto.ts
// Exercício final da Semana 2 — Sistema de Mensagens simulado

// ==========================================
// TIPOS E INTERFACES
// ==========================================

enum TipoUtilizador {
  COORDENADOR = 'coordenador',
  OPERADOR = 'operador',
}

enum Prioridade {
  NORMAL = 'normal',
  ALTA = 'alta',
}

interface Utilizador {
  id: number;
  nome: string;
  tipo: TipoUtilizador;
}

interface Mensagem {
  id: number;
  texto: string;
  prioridade: Prioridade;
  remetente: string;
  dataCriacao: Date;
}

interface CriarMensagemDto {
  texto: string;
  prioridade: Prioridade;
}

// ==========================================
// SERVIÇO DE UTILIZADORES
// ==========================================

class UtilizadorService {
  private utilizadores: Utilizador[] = [];
  private proximoId = 1;

  registar(nome: string, tipo: TipoUtilizador): Utilizador {
    const novoUser: Utilizador = {
      id: this.proximoId++,
      nome,
      tipo,
    };
    this.utilizadores.push(novoUser);
    return novoUser;
  }

  buscarPorId(id: number): Utilizador | undefined {
    return this.utilizadores.find((u) => u.id === id);
  }

  buscarTodos(): Utilizador[] {
    return this.utilizadores;
  }
}

// ==========================================
// SERVIÇO DE MENSAGENS
// ==========================================

class MensagemService {
  private mensagens: Mensagem[] = [];
  private proximoId = 1;

  criar(dados: CriarMensagemDto, remetente: string): Mensagem {
    const novaMensagem: Mensagem = {
      id: this.proximoId++,
      texto: dados.texto,
      prioridade: dados.prioridade,
      remetente,
      dataCriacao: new Date(),
    };
    this.mensagens.push(novaMensagem);
    return novaMensagem;
  }

  buscarTodas(): Mensagem[] {
    // Ordenar da mais recente para a mais antiga
    return [...this.mensagens].sort(
      (a, b) => b.dataCriacao.getTime() - a.dataCriacao.getTime(),
    );
  }

  buscarPorPrioridade(prioridade: Prioridade): Mensagem[] {
    return this.mensagens.filter((m) => m.prioridade === prioridade);
  }

  buscarPorId(id: number): Mensagem | undefined {
    return this.mensagens.find((m) => m.id === id);
  }
}

// ==========================================
// PROGRAMA PRINCIPAL
// ==========================================

const utilizadorService = new UtilizadorService();
const mensagemService = new MensagemService();

// Registar utilizadores
const coordenador = utilizadorService.registar('Carlos', TipoUtilizador.COORDENADOR);
const operador1 = utilizadorService.registar('Ana', TipoUtilizador.OPERADOR);
const operador2 = utilizadorService.registar('Pedro', TipoUtilizador.OPERADOR);

console.log('👥 Utilizadores registados:');
for (const user of utilizadorService.buscarTodos()) {
  const icone = user.tipo === TipoUtilizador.COORDENADOR ? '👔' : '👷';
  console.log(`  ${icone} ${user.nome} (${user.tipo})`);
}

// Coordenador envia mensagens
console.log('\n📢 A enviar mensagens...\n');

mensagemService.criar(
  { texto: 'Acidente na Av. Roma, desviar linha 735', prioridade: Prioridade.ALTA },
  coordenador.nome,
);

mensagemService.criar(
  { texto: 'Trânsito normal em toda a rede', prioridade: Prioridade.NORMAL },
  coordenador.nome,
);

mensagemService.criar(
  { texto: 'Avaria no autocarro 1523 — linha 28', prioridade: Prioridade.ALTA },
  coordenador.nome,
);

mensagemService.criar(
  { texto: 'Boa tarde a todos, turno sem incidentes', prioridade: Prioridade.NORMAL },
  coordenador.nome,
);

// Mostrar todas as mensagens
console.log('📜 Todas as mensagens:');
for (const msg of mensagemService.buscarTodas()) {
  const icone = msg.prioridade === Prioridade.ALTA ? '🔴' : '🟢';
  const data = msg.dataCriacao.toLocaleTimeString('pt-PT');
  console.log(`  ${icone} [${data}] (${msg.remetente}) ${msg.texto}`);
}

// Filtrar urgentes
console.log('\n⚠️  Mensagens URGENTES:');
for (const msg of mensagemService.buscarPorPrioridade(Prioridade.ALTA)) {
  console.log(`  🔴 ${msg.texto}`);
}

// Buscar por id
console.log('\n🔍 Buscar mensagem #2:');
const msg2 = mensagemService.buscarPorId(2);
if (msg2) {
  console.log(`  Texto: ${msg2.texto}`);
  console.log(`  Prioridade: ${msg2.prioridade}`);
  console.log(`  Remetente: ${msg2.remetente}`);
} else {
  console.log('  Não encontrada');
}

console.log('\n✅ Mini-projeto concluído! Já sabes TypeScript básico!');
```

**Correr:**
```bash
npx ts-node mini-projeto.ts
```

🎉 **Parabéns! Concluíste a Semana 2!** Já sabes:
- ✅ Tipos básicos (string, number, boolean)
- ✅ Interfaces (definir a forma de objetos)
- ✅ Enums (listas de opções fixas)
- ✅ Classes (criar objetos com métodos)
- ✅ Decoradores (a base do NestJS)
- ✅ Módulos (import/export)

---

## 📖 SEMANA 3 — NestJS: O Framework do Backend

### O Que É o NestJS?

O **NestJS** é uma framework (ferramenta) para criar servidores (backends) com Node.js e TypeScript.
Imagina que estás a construir uma casa:
- **Node.js** é o terreno
- **TypeScript** é o material de construção
- **NestJS** é a planta da casa — diz-te como organizar tudo

O NestJS organiza o código em **módulos**, **controllers** e **services**:

```
📦 Módulo (agrupa coisas relacionadas)
 ├── 🎮 Controller (recebe pedidos HTTP — o "rececionista")
 └── ⚙️ Service (faz o trabalho — a "lógica")
```

---

### Dia 1: Criar o Projeto NestJS

Agora vamos trabalhar no **projeto real**! Abre o terminal na pasta do teu projeto (onde está o `package.json`).

**Passo 1: Instalar as dependências**

```bash
cd /caminho/para/ProjetoEstagio
npm install
```

Isto instala todos os pacotes que estão no `package.json`. Vai demorar um pouco.

**Passo 2: Entender a estrutura do projeto**

```
ProjetoEstagio/
├── src/                          ← Todo o código fonte vive aqui
│   ├── main.ts                   ← Ponto de entrada (arranca o servidor)
│   ├── app.module.ts             ← Módulo principal
│   ├── app.controller.ts         ← Controller principal
│   ├── app.controller.spec.ts    ← Testes do controller
│   ├── app.service.ts            ← Service principal
│   └── mensagens/                ← Módulo de mensagens
│       ├── mensagens.module.ts
│       ├── mensagens.controller.ts
│       ├── mensagens.service.ts
│       ├── mensagens.controller.spec.ts
│       ├── mensagens.service.spec.ts
│       ├── entities/
│       │   └── mensagem.entity.ts    ← Tabela na base de dados
│       └── dto/
│           └── create-mensagem.dto.ts ← Formato dos dados
├── test/                         ← Testes end-to-end
├── docker-compose.yml            ← Configuração do PostgreSQL
├── package.json                  ← Dependências e scripts
├── tsconfig.json                 ← Configuração do TypeScript
└── nest-cli.json                 ← Configuração do NestJS
```

> 💡 **Nota:** Todo o código nos ficheiros `.ts` dentro de `src/` está comentado
> (entre `/* */`). Isso é de propósito! Vais reescrever tudo passo a passo.

---

### Dia 2: O Ficheiro main.ts — Arrancar o Servidor

O `main.ts` é o **ponto de entrada** do servidor. É o primeiro ficheiro que corre.
Pensa nele como o botão de ligar da aplicação.

**Abre o ficheiro `src/main.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// main.ts — Ponto de entrada do servidor
// ====================================================
// Este ficheiro é o "botão de ligar" da aplicação.
// Quando corremos "npm run start:dev", este ficheiro é executado.

// PASSO 1: Importar o que precisamos
// NestFactory é a "fábrica" que sabe criar aplicações NestJS
import { NestFactory } from '@nestjs/core';

// AppModule é o módulo principal — a peça central que junta tudo
import { AppModule } from './app.module';

// PASSO 2: Criar a função que arranca o servidor
// "async" porque criar o servidor é uma operação assíncrona
async function bootstrap() {
  // Criar a aplicação NestJS usando o módulo principal
  const app = await NestFactory.create(AppModule);

  // Iniciar o servidor na porta 3000
  // Depois disto, o servidor fica a "ouvir" pedidos em http://localhost:3000
  await app.listen(3000);

  // Mostrar uma mensagem no terminal para sabermos que funcionou
  console.log('✅ Servidor a correr em http://localhost:3000');
}

// PASSO 3: Chamar a função para arrancar tudo
// "void" indica que sabemos que é uma Promise e não precisamos de await aqui
void bootstrap();
```

> ⚠️ **AINDA NÃO CORRAS!** Precisamos de configurar o `app.module.ts` primeiro.
> Se tentares correr agora, vai dar erro porque `AppModule` não existe ainda.

**O que aprendeste:**
- `NestFactory.create()` cria a aplicação
- `app.listen(3000)` inicia o servidor na porta 3000
- `bootstrap()` é a função que junta tudo
- `async/await` porque arrancar um servidor é assíncrono

---

### Dia 3: O Ficheiro app.service.ts — A Lógica

O **service** é onde colocamos a lógica do programa. O controller não deve fazer o trabalho —
deve apenas receber o pedido e pedir ao service para fazer o trabalho.

**Abre o ficheiro `src/app.service.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// app.service.ts — Serviço principal
// ====================================================
// Um "serviço" é onde colocamos a lógica do programa.
// O controller recebe o pedido HTTP, e o serviço faz o trabalho real.

// PASSO 1: Importar o decorador Injectable
// @Injectable() é um decorador que diz ao NestJS:
// "Esta classe pode ser criada automaticamente e injetada noutras classes"
import { Injectable } from '@nestjs/common';

// PASSO 2: Criar a classe do serviço
@Injectable()
export class AppService {
  // Esta função será chamada quando alguém aceder a http://localhost:3000/
  // Devolve uma string simples para confirmar que o servidor está a funcionar
  getHello(): string {
    return 'Backend do Sistema de Notificações está a funcionar!';
  }
}
```

**O que aprendeste:**
- `@Injectable()` = decorador que marca a classe como serviço
- O serviço contém a lógica — funções que fazem o trabalho real
- `export` permite que outros ficheiros usem esta classe

---

### Dia 4: O Ficheiro app.controller.ts — O Rececionista

O **controller** é o "rececionista" — recebe pedidos HTTP e encaminha-os para o serviço.

**Abre o ficheiro `src/app.controller.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// app.controller.ts — Controller principal
// ====================================================
// Um "controller" é como um rececionista:
// - Recebe pedidos HTTP (GET, POST, PUT, DELETE)
// - Decide para quem passar o pedido
// - Devolve a resposta ao cliente

// PASSO 1: Importar o que precisamos
// Controller = decorador que marca a classe como controller
// Get = decorador que marca um método para responder a pedidos GET
import { Controller, Get } from '@nestjs/common';

// Importar o serviço que vai fazer o trabalho real
import { AppService } from './app.service';

// PASSO 2: Criar o controller
// @Controller() sem parâmetros = responde no endereço raiz (/)
@Controller()
export class AppController {
  // PASSO 3: Injeção de dependências
  // O NestJS cria automaticamente uma instância do AppService
  // e entrega-a aqui. Não precisamos de fazer "new AppService()".
  // Isto chama-se "Injeção de Dependências" (Dependency Injection).
  constructor(private readonly appService: AppService) {}
  // "private" = só esta classe pode aceder ao appService
  // "readonly" = não pode ser substituído depois de criado

  // PASSO 4: Definir rotas (endpoints)
  // @Get() = quando alguém faz GET http://localhost:3000/ → corre esta função
  @Get()
  getHello(): string {
    // Pedimos ao serviço para fazer o trabalho
    return this.appService.getHello();
  }
}
```

**O que aprendeste:**
- `@Controller()` marca uma classe como controller
- `@Get()` marca um método para responder a pedidos HTTP GET
- **Injeção de Dependências** — o NestJS cria e entrega o serviço automaticamente
- O controller não faz lógica — delega ao serviço

---

### Dia 5: O Ficheiro app.module.ts — Juntar Tudo

O **módulo** é como uma caixa que agrupa coisas relacionadas. O `AppModule` é o módulo principal
que junta todos os outros módulos, controllers e services.

**Abre o ficheiro `src/app.module.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// app.module.ts — Módulo principal da aplicação
// ====================================================
// Um "módulo" no NestJS é como uma caixa que agrupa coisas relacionadas.
// Este é o módulo RAIZ — o primeiro a ser carregado.
// Todos os outros módulos são importados aqui.

// PASSO 1: Importar o decorador Module
import { Module } from '@nestjs/common';

// PASSO 2: Importar o controller e o service deste módulo
import { AppController } from './app.controller';
import { AppService } from './app.service';

// PASSO 3: Criar o módulo
// @Module() diz ao NestJS como esta peça se encaixa no puzzle
@Module({
  // "imports" — outros módulos que este módulo precisa
  // (vamos adicionar mais tarde: TypeOrmModule, MensagensModule, etc.)
  imports: [],

  // "controllers" — os controllers deste módulo
  // (recebem pedidos HTTP)
  controllers: [AppController],

  // "providers" — os services deste módulo
  // (fazem o trabalho / contêm a lógica)
  providers: [AppService],
})
export class AppModule {}
```

> 💡 **Nota:** Por agora, NÃO vamos ligar à base de dados nem importar o módulo de mensagens.
> Isso vem na próxima semana. Primeiro, vamos confirmar que o básico funciona.

---

### Dia 6: Arrancar o Servidor! 🚀

Agora sim! Temos os 4 ficheiros essenciais:
1. `main.ts` — arranca o servidor
2. `app.module.ts` — módulo principal
3. `app.controller.ts` — recebe pedidos
4. `app.service.ts` — faz o trabalho

**Arrancar o servidor em modo desenvolvimento:**
```bash
npm run start:dev
```

> `start:dev` usa o modo "watch" — se mudares um ficheiro, o servidor reinicia automaticamente!

Deves ver algo como:
```
[Nest] LOG [NestFactory] Starting Nest application...
[Nest] LOG [RoutesResolver] AppController {/}:
[Nest] LOG [RouterExplorer] Mapped {/, GET} route
[Nest] LOG [NestApplication] Nest application successfully started
✅ Servidor a correr em http://localhost:3000
```

**Testar no browser:**
1. Abre o Chrome
2. Vai a: http://localhost:3000
3. Deves ver: `Backend do Sistema de Notificações está a funcionar!`

�� **O teu servidor está a funcionar!**

**Testar com Thunder Client (VS Code):**
1. Abre o VS Code
2. Clica no ícone do Thunder Client (raio) na barra lateral
3. Clica "New Request"
4. URL: `http://localhost:3000`
5. Método: `GET`
6. Clica "Send"
7. Deves ver a resposta: `Backend do Sistema de Notificações está a funcionar!`

> Para parar o servidor, carrega `Ctrl+C` no terminal.

---

### Dia 7: Adicionar Mais Rotas

Vamos adicionar mais endpoints ao controller para praticares.

**Edita `src/app.service.ts`:**

```typescript
// ====================================================
// app.service.ts — Serviço principal (versão expandida)
// ====================================================

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Endpoint raiz — confirma que o servidor funciona
  getHello(): string {
    return 'Backend do Sistema de Notificações está a funcionar!';
  }

  // Novo! Devolve informações sobre o sistema
  getInfo(): object {
    return {
      nome: 'Sistema de Notificações do Coordenador',
      versao: '0.1.0',
      descricao: 'API para envio de notificações em tempo real',
      estado: 'em desenvolvimento',
    };
  }

  // Novo! Devolve a data e hora atual do servidor
  getHora(): object {
    const agora = new Date();
    return {
      data: agora.toLocaleDateString('pt-PT'),
      hora: agora.toLocaleTimeString('pt-PT'),
      timestamp: agora.toISOString(),
    };
  }
}
```

**Edita `src/app.controller.ts`:**

```typescript
// ====================================================
// app.controller.ts — Controller principal (versão expandida)
// ====================================================

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // GET / — mensagem de boas-vindas
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /info — informações sobre o sistema
  // Nota: o caminho vem dentro do @Get('info')
  @Get('info')
  getInfo(): object {
    return this.appService.getInfo();
  }

  // GET /hora — data e hora do servidor
  @Get('hora')
  getHora(): object {
    return this.appService.getHora();
  }
}
```

**Guardar e testar** (se o servidor estiver a correr com `start:dev`, reinicia sozinho):
- http://localhost:3000 → mensagem de boas-vindas
- http://localhost:3000/info → informações do sistema (JSON)
- http://localhost:3000/hora → data e hora atual (JSON)

> 💡 **O que é JSON?**
> JSON (JavaScript Object Notation) é um formato para representar dados.
> Parece um objeto JavaScript:
> ```json
> {"nome": "Maria", "idade": 25}
> ```
> É o formato mais usado para APIs comunicarem dados.

🎉 **Parabéns! Concluíste a Semana 3!** Já sabes:
- ✅ O que é o NestJS e como está organizado
- ✅ Controllers (receber pedidos HTTP)
- ✅ Services (lógica do programa)
- ✅ Módulos (juntar tudo)
- ✅ Decoradores (@Controller, @Get, @Injectable, @Module)
- ✅ Injeção de Dependências
- ✅ Arrancar e testar o servidor

---

## 📖 SEMANA 4 — Docker e PostgreSQL (Base de Dados)

### O Que É o Docker?

O **Docker** é uma ferramenta que corre programas em "contentores" isolados.
Imagina uma caixa que contém tudo o que um programa precisa para funcionar — o Docker cria essa caixa.

**Porquê usar Docker?**
- Não precisamos de instalar o PostgreSQL no nosso computador
- O Docker faz download da "caixa" com o PostgreSQL já configurado
- Se algo correr mal, apagamos a caixa e criamos outra nova

### O Que É o PostgreSQL?

O **PostgreSQL** (ou "Postgres") é uma **base de dados relacional** — um programa que guarda dados
organizados em **tabelas** (como folhas de Excel).

No nosso projeto, o PostgreSQL vai guardar:
- Utilizadores (coordenadores e operadores)
- Mensagens (texto, prioridade, data)

---

### Dia 1: Arrancar o PostgreSQL com Docker

**Passo 1: Garantir que o Docker está a correr**

Abre o Docker Desktop (o programa que instalaste). Espera até ver "Docker is running" (ícone verde).

**Passo 2: Olhar o ficheiro `docker-compose.yml`**

Este ficheiro já existe no projeto. Vamos percebê-lo:

```yaml
# docker-compose.yml - Base de dados PostgreSQL para o projeto
version: '3.9'

services:
  # "db" é o nome do serviço (podíamos chamar-lhe qualquer coisa)
  db:
    # Usar a imagem oficial do PostgreSQL versão 15
    image: postgres:15
    # Nome do contentor (para fácil identificação)
    container_name: notificacoes_postgres
    # Reiniciar automaticamente se o contentor parar
    restart: unless-stopped
    # Variáveis de ambiente — configuram o PostgreSQL
    environment:
      POSTGRES_USER: postgres       # Utilizador da base de dados
      POSTGRES_PASSWORD: postgres   # Password (em produção seria diferente!)
      POSTGRES_DB: notificacoes_db  # Nome da base de dados a criar
    # Expor a porta 5432 (porta padrão do PostgreSQL)
    ports:
      - "5432:5432"
    # Volume = guardar dados mesmo se o contentor for apagado
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
    name: notificacoes_postgres_data
```

**Passo 3: Arrancar o PostgreSQL**

```bash
docker compose up -d
```

- `up` = arrancar os serviços
- `-d` = em modo "detached" (corre em segundo plano, não ocupa o terminal)

Na primeira vez, o Docker faz download da imagem do PostgreSQL (~150MB).

**Passo 4: Verificar que está a correr**

```bash
docker ps
```

Deves ver algo como:
```
CONTAINER ID   IMAGE         ...   STATUS        PORTS                    NAMES
abc123def456   postgres:15   ...   Up 5 seconds  0.0.0.0:5432->5432/tcp   notificacoes_postgres
```

**Passo 5: Testar ligação à base de dados**

```bash
docker exec -it notificacoes_postgres psql -U postgres -d notificacoes_db
```

Isto abre o terminal do PostgreSQL. Experimenta:
```sql
SELECT NOW();
```
Deve mostrar a data e hora atual.

Para sair, escreve:
```
\q
```

**Comandos Docker úteis:**
```bash
# Ver contentores a correr
docker ps

# Parar a base de dados
docker compose down

# Arrancar novamente
docker compose up -d

# Ver logs do PostgreSQL
docker compose logs db

# Apagar tudo (incluindo dados!) — usar com cuidado
docker compose down -v
```

---

### Dia 2: Conceitos de Base de Dados

Antes de ligar o NestJS ao PostgreSQL, vamos perceber o que é uma base de dados relacional.

**Tabela** — como uma folha de Excel. Tem colunas (campos) e linhas (registos).

Exemplo da tabela `mensagem`:

| id | texto | prioridade | dataCriacao |
|----|-------|-----------|-------------|
| 1 | Acidente na Av. Roma | alta | 2024-01-15 10:30:00 |
| 2 | Tudo normal | normal | 2024-01-15 11:00:00 |
| 3 | Avaria autocarro 735 | alta | 2024-01-15 11:45:00 |

**Operações básicas (CRUD):**
- **C**reate (Criar) — `INSERT INTO mensagem ...` — adicionar uma linha
- **R**ead (Ler) — `SELECT * FROM mensagem` — ler linhas
- **U**pdate (Atualizar) — `UPDATE mensagem SET ...` — modificar uma linha
- **D**elete (Apagar) — `DELETE FROM mensagem ...` — remover uma linha

> 💡 **Não precisas de saber SQL!** O **TypeORM** (que vamos usar) escreve o SQL por ti.
> Tu trabalhas com objetos TypeScript e o TypeORM traduz para SQL automaticamente.

---

### Dia 3: TypeORM — Ligar o NestJS à Base de Dados

O **TypeORM** é uma ferramenta que faz a ponte entre o TypeScript e o PostgreSQL.
Em vez de escreveres SQL, escreves código TypeScript e o TypeORM faz a conversão.

**Conceitos-chave:**
- **Entity** (Entidade) = uma classe TypeScript que representa uma tabela
- **Repository** = um objeto que sabe fazer operações na tabela (inserir, ler, etc.)
- **DTO** (Data Transfer Object) = define o formato dos dados que o cliente envia

**Agora vamos ligar tudo!**

**Passo 1: Atualizar `src/app.module.ts` para ligar à base de dados:**

```typescript
// ====================================================
// app.module.ts — Módulo principal (com base de dados)
// ====================================================

import { Module } from '@nestjs/common';

// TypeOrmModule = módulo que liga o NestJS à base de dados
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Configuração da ligação à base de dados PostgreSQL
    // Estes dados correspondem ao que está no docker-compose.yml
    TypeOrmModule.forRoot({
      type: 'postgres',            // Tipo de base de dados
      host: 'localhost',            // Onde está (no nosso computador)
      port: 5432,                   // Porta do PostgreSQL
      username: 'postgres',         // Utilizador (do docker-compose.yml)
      password: 'postgres',         // Password (do docker-compose.yml)
      database: 'notificacoes_db',  // Nome da base de dados
      autoLoadEntities: true,       // Encontra as entidades automaticamente
      synchronize: true,            // Cria/atualiza tabelas automaticamente
      // ⚠️ synchronize: true só em desenvolvimento! Em produção, usar migrations.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

**Passo 2: Testar a ligação**

Certifica-te que o PostgreSQL está a correr:
```bash
docker compose up -d
```

Arranca o servidor:
```bash
npm run start:dev
```

Se vires isto no terminal, a ligação funcionou:
```
✅ Servidor a correr em http://localhost:3000
```

Se der erro de ligação, verifica:
1. O Docker está a correr? (`docker ps`)
2. Os dados no `app.module.ts` correspondem ao `docker-compose.yml`?

---

### Dia 4: Criar a Entidade Mensagem

Uma **entidade** é uma classe TypeScript que o TypeORM transforma numa tabela na base de dados.
Cada propriedade da classe será uma coluna na tabela.

**Abre `src/mensagens/entities/mensagem.entity.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// mensagem.entity.ts — Entidade (tabela) de mensagens
// ====================================================
// Uma "entidade" é uma classe que o TypeORM transforma numa tabela.
// Cada campo com @Column() será uma coluna na tabela.

// Importar decoradores do TypeORM
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

// @Entity() diz ao TypeORM: "cria uma tabela chamada 'mensagem' na base de dados"
@Entity()
export class Mensagem {
  // @PrimaryGeneratedColumn() = coluna "id"
  // - É a chave primária (identificador único de cada linha)
  // - Gerada automaticamente (1, 2, 3, ...)
  // - O "!" diz ao TypeScript: "este campo vai ser preenchido, confia"
  @PrimaryGeneratedColumn()
  id!: number;

  // @Column() = uma coluna normal
  // "texto" guarda o conteúdo da mensagem
  // Exemplo: "Acidente na Av. de Roma, desviar linha 735"
  @Column()
  texto!: string;

  // "prioridade" pode ser 'normal' ou 'alta'
  // { default: 'normal' } = se não enviarmos nada, o valor é 'normal'
  @Column({ default: 'normal' })
  prioridade!: 'normal' | 'alta';

  // @CreateDateColumn() = o TypeORM preenche automaticamente
  // com a data e hora em que o registo foi criado
  @CreateDateColumn()
  dataCriacao!: Date;
}

// Quando o servidor arrancar, o TypeORM vai criar esta tabela:
// ┌────┬──────────────────────┬────────────┬─────────────────────┐
// │ id │ texto                │ prioridade │ dataCriacao         │
// ├────┼──────────────────────┼────────────┼─────────────────────┤
// │ 1  │ Acidente Av. Roma    │ alta       │ 2024-01-15 10:30:00 │
// │ 2  │ Tudo normal          │ normal     │ 2024-01-15 11:00:00 │
// └────┴──────────────────────┴────────────┴─────────────────────┘
```

---

### Dia 5: Criar o DTO e o Service de Mensagens

**Passo 1: DTO — Define o formato dos dados de entrada**

**Abre `src/mensagens/dto/create-mensagem.dto.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// create-mensagem.dto.ts — DTO para criar mensagens
// ====================================================
// Um DTO (Data Transfer Object) define o formato dos dados
// que o cliente envia quando faz um pedido POST.
// É como um formulário: define que campos são necessários.

export class CreateMensagemDto {
  // O texto da mensagem
  // Exemplo: "Acidente na Av. de Roma, desviar linha 735"
  texto!: string;

  // A prioridade da mensagem: 'normal' ou 'alta'
  prioridade!: 'normal' | 'alta';
}
```

**Passo 2: Service — A lógica de mensagens**

**Abre `src/mensagens/mensagens.service.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// mensagens.service.ts — Serviço de mensagens
// ====================================================
// O serviço contém toda a lógica para trabalhar com mensagens:
// criar, listar todas, buscar por id.
// Usa o "repositório" do TypeORM para aceder à base de dados.

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensagem } from './entities/mensagem.entity';
import { CreateMensagemDto } from './dto/create-mensagem.dto';

@Injectable()
export class MensagensService {
  // O TypeORM injeta aqui o "repositório" da tabela de mensagens
  // Um repositório é como um ajudante que sabe fazer operações na tabela:
  // - .find()        → buscar vários registos
  // - .findOneBy()   → buscar um registo
  // - .create()      → preparar um novo registo
  // - .save()        → guardar na base de dados
  // - .delete()      → apagar um registo
  constructor(
    @InjectRepository(Mensagem)
    private readonly mensagemRepo: Repository<Mensagem>,
  ) {}

  // Buscar TODAS as mensagens
  // Ordenadas da mais recente para a mais antiga
  getAll(): Promise<Mensagem[]> {
    return this.mensagemRepo.find({
      order: { dataCriacao: 'DESC' },
    });
  }

  // Buscar UMA mensagem pelo seu id
  // Pode devolver null se não encontrar
  getById(id: number): Promise<Mensagem | null> {
    return this.mensagemRepo.findOneBy({ id });
  }

  // Criar uma NOVA mensagem e guardar na base de dados
  create(dados: CreateMensagemDto): Promise<Mensagem> {
    // Passo 1: .create() prepara o objeto (mas NÃO guarda na BD ainda)
    const novaMensagem = this.mensagemRepo.create(dados);

    // Passo 2: .save() guarda efetivamente na base de dados
    return this.mensagemRepo.save(novaMensagem);
  }
}
```

> 💡 **Promise<Mensagem[]>** significa "esta função é assíncrona e devolve um array de Mensagem".
> Todas as operações de base de dados são assíncronas (demoram tempo).

---

### Dia 6: Criar o Controller e o Módulo de Mensagens

**Passo 1: Controller — Receber pedidos HTTP**

**Abre `src/mensagens/mensagens.controller.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// mensagens.controller.ts — Controller de mensagens
// ====================================================
// O controller é o "rececionista" das mensagens.
// Recebe pedidos HTTP e pede ao service para fazer o trabalho.

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MensagensService } from './mensagens.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { Mensagem } from './entities/mensagem.entity';

// @Controller('api/mensagens') = responde em /api/mensagens
@Controller('api/mensagens')
export class MensagensController {
  // O NestJS injeta automaticamente o MensagensService
  constructor(private readonly mensagensService: MensagensService) {}

  // GET /api/mensagens — devolve TODAS as mensagens
  @Get()
  getAll(): Promise<Mensagem[]> {
    return this.mensagensService.getAll();
  }

  // GET /api/mensagens/5 — devolve a mensagem com id 5
  // @Param('id') captura o valor do URL (o "5" neste caso)
  @Get(':id')
  getById(@Param('id') id: string): Promise<Mensagem | null> {
    // id vem como string do URL, precisamos converter para number
    return this.mensagensService.getById(Number(id));
  }

  // POST /api/mensagens — cria uma nova mensagem
  // @Body() captura os dados enviados no corpo do pedido (o JSON)
  @Post()
  create(@Body() dados: CreateMensagemDto): Promise<Mensagem> {
    return this.mensagensService.create(dados);
  }
}
```

**Passo 2: Módulo — Juntar tudo**

**Abre `src/mensagens/mensagens.module.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// mensagens.module.ts — Módulo de mensagens
// ====================================================
// Este módulo agrupa tudo o que tem a ver com mensagens:
// o controller, o service e a entidade (tabela) da base de dados.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagem } from './entities/mensagem.entity';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature() regista a entidade Mensagem neste módulo
    // Isto permite ao service usar o repositório da tabela "mensagem"
    TypeOrmModule.forFeature([Mensagem]),
  ],
  controllers: [MensagensController],
  providers: [MensagensService],
})
export class MensagensModule {}
```

**Passo 3: Importar o módulo de mensagens no módulo principal**

**Edita `src/app.module.ts` para adicionar o import do MensagensModule:**

```typescript
// ====================================================
// app.module.ts — Módulo principal (com mensagens)
// ====================================================

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importar o módulo de mensagens
import { MensagensModule } from './mensagens/mensagens.module';

@Module({
  imports: [
    // Ligação à base de dados
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'notificacoes_db',
      autoLoadEntities: true,
      synchronize: true,
    }),

    // Módulo de mensagens (controller + service + entidade)
    MensagensModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

### Dia 7: Testar o CRUD de Mensagens! 🎯

**Passo 1: Certifica-te que o PostgreSQL está a correr:**
```bash
docker compose up -d
```

**Passo 2: Arranca o servidor:**
```bash
npm run start:dev
```

Deves ver as rotas mapeadas:
```
[RouterExplorer] Mapped {/api/mensagens, GET} route
[RouterExplorer] Mapped {/api/mensagens/:id, GET} route
[RouterExplorer] Mapped {/api/mensagens, POST} route
```

**Passo 3: Testar com Thunder Client ou curl:**

**Criar uma mensagem (POST):**
No Thunder Client:
- Método: `POST`
- URL: `http://localhost:3000/api/mensagens`
- Body → JSON:
```json
{
  "texto": "Acidente na Av. de Roma, desviar linha 735",
  "prioridade": "alta"
}
```

Ou com curl no terminal (abre outro terminal):
```bash
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -d '{"texto": "Acidente na Av. de Roma, desviar linha 735", "prioridade": "alta"}'
```

Resposta esperada:
```json
{
  "texto": "Acidente na Av. de Roma, desviar linha 735",
  "prioridade": "alta",
  "id": 1,
  "dataCriacao": "2024-01-15T10:30:00.000Z"
}
```

**Criar mais mensagens:**
```bash
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -d '{"texto": "Trânsito normal em toda a rede", "prioridade": "normal"}'

curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -d '{"texto": "Avaria no autocarro 1523, linha 28", "prioridade": "alta"}'
```

**Ver todas as mensagens (GET):**
```bash
curl http://localhost:3000/api/mensagens
```

Ou abre no browser: http://localhost:3000/api/mensagens

**Ver uma mensagem específica (GET por id):**
```bash
curl http://localhost:3000/api/mensagens/1
```

Ou no browser: http://localhost:3000/api/mensagens/1

🎉 **Parabéns! Concluíste o Mês 1!** Já sabes:
- ✅ Usar o terminal
- ✅ JavaScript e TypeScript
- ✅ NestJS (controllers, services, módulos)
- ✅ Docker (correr PostgreSQL)
- ✅ TypeORM (entidades, repositórios)
- ✅ CRUD básico (criar e ler mensagens)
- ✅ Testar APIs com Thunder Client/curl

---

# �� MÊS 2 — BACKEND COMPLETO + INÍCIO DO FRONTEND

> Objetivo: Completar o backend com autenticação, WebSockets e validação.
> Começar a aprender HTML, CSS e Vue.js para o portal do coordenador.

---

## 📖 SEMANA 5 — CRUD Completo e Validação

### Dia 1-2: Adicionar Testes Unitários

Os **testes** verificam que o código funciona como esperado.
É como ter alguém a verificar o teu trabalho automaticamente.

**Abre `src/app.controller.spec.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// app.controller.spec.ts — Testes do controller principal
// ====================================================
// ".spec.ts" indica que é um ficheiro de testes.
// Usamos o Jest (ferramenta de testes incluída no NestJS).

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// "describe" agrupa testes relacionados
describe('AppController', () => {
  let appController: AppController;

  // "beforeEach" corre ANTES de cada teste
  // Configura o ambiente de teste
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // "it" define um teste individual
  describe('root', () => {
    it('deve devolver a mensagem de boas-vindas', () => {
      // "expect" verifica se o resultado é o esperado
      expect(appController.getHello()).toBe(
        'Backend do Sistema de Notificações está a funcionar!',
      );
    });
  });
});
```

**Abre `src/mensagens/mensagens.controller.spec.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// mensagens.controller.spec.ts — Testes do controller de mensagens
// ====================================================

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { Mensagem } from './entities/mensagem.entity';

describe('MensagensController', () => {
  let controller: MensagensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MensagensController],
      providers: [
        MensagensService,
        // "Mock" = simulação da base de dados para os testes
        // Não queremos ligar à BD real durante os testes!
        {
          provide: getRepositoryToken(Mensagem),
          useValue: {
            find: jest.fn(),      // Simula o método find
            findOneBy: jest.fn(), // Simula o método findOneBy
            create: jest.fn(),    // Simula o método create
            save: jest.fn(),      // Simula o método save
          },
        },
      ],
    }).compile();

    controller = module.get<MensagensController>(MensagensController);
  });

  it('deve estar definido', () => {
    expect(controller).toBeDefined();
  });
});
```

**Abre `src/mensagens/mensagens.service.spec.ts` e substitui TODO o conteúdo por:**

```typescript
// ====================================================
// mensagens.service.spec.ts — Testes do serviço de mensagens
// ====================================================

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MensagensService } from './mensagens.service';
import { Mensagem } from './entities/mensagem.entity';

describe('MensagensService', () => {
  let service: MensagensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MensagensService,
        {
          provide: getRepositoryToken(Mensagem),
          useValue: {
            find: jest.fn(),
            findOneBy: jest.fn(),
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MensagensService>(MensagensService);
  });

  it('deve estar definido', () => {
    expect(service).toBeDefined();
  });
});
```

**Correr os testes:**
```bash
npm test
```

Resultado esperado:
```
PASS  src/app.controller.spec.ts
PASS  src/mensagens/mensagens.controller.spec.ts
PASS  src/mensagens/mensagens.service.spec.ts

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
```

---

### Dia 3-4: Validação de Dados com class-validator

Atualmente, o nosso POST aceita qualquer coisa — até dados inválidos.
Vamos adicionar **validação** para garantir que os dados estão corretos.

**Passo 1: Instalar o class-validator e class-transformer:**

```bash
npm install class-validator class-transformer
```

**Passo 2: Atualizar o DTO com regras de validação:**

Edita `src/mensagens/dto/create-mensagem.dto.ts`:

```typescript
// ====================================================
// create-mensagem.dto.ts — DTO com validação
// ====================================================
// Agora o DTO não só define o formato dos dados,
// como também VALIDA se estão corretos!

import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateMensagemDto {
  // @IsString() — tem de ser uma string
  // @IsNotEmpty() — não pode estar vazio
  @IsString({ message: 'O texto tem de ser uma string' })
  @IsNotEmpty({ message: 'O texto não pode estar vazio' })
  texto!: string;

  // @IsIn() — tem de ser um dos valores indicados
  @IsIn(['normal', 'alta'], {
    message: 'A prioridade tem de ser "normal" ou "alta"',
  })
  prioridade!: 'normal' | 'alta';
}
```

**Passo 3: Ativar a validação global no main.ts:**

Edita `src/main.ts`:

```typescript
// ====================================================
// main.ts — Ponto de entrada (com validação)
// ====================================================

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativar validação global
  // Todos os DTOs com decoradores do class-validator serão validados!
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,    // Remove campos que não estão no DTO
      forbidNonWhitelisted: true, // Rejeita pedidos com campos extra
      transform: true,    // Transforma automaticamente os tipos
    }),
  );

  await app.listen(3000);
  console.log('✅ Servidor a correr em http://localhost:3000');
}

void bootstrap();
```

**Passo 4: Testar a validação:**

Arranca o servidor e tenta enviar dados inválidos:

```bash
# Sem texto — deve dar erro!
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -d '{"prioridade": "alta"}'
```

Resposta esperada (erro 400):
```json
{
  "statusCode": 400,
  "message": ["O texto não pode estar vazio"],
  "error": "Bad Request"
}
```

```bash
# Prioridade inválida — deve dar erro!
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -d '{"texto": "Teste", "prioridade": "urgente"}'
```

Resposta esperada:
```json
{
  "statusCode": 400,
  "message": ["A prioridade tem de ser \"normal\" ou \"alta\""],
  "error": "Bad Request"
}
```

---

### Dia 5-7: CORS — Permitir Comunicação com o Frontend

Quando o portal do coordenador (Vue.js) tentar comunicar com o backend,
o browser vai bloquear o pedido por segurança. Isto chama-se **CORS** (Cross-Origin Resource Sharing).

Precisamos de dizer ao backend: "aceita pedidos do frontend".

**Edita `src/main.ts`:**

```typescript
// ====================================================
// main.ts — Ponto de entrada (com validação e CORS)
// ====================================================

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Ativar CORS — permite que o frontend e a extensão
  // comuniquem com o backend
  app.enableCors({
    origin: true, // Aceita pedidos de qualquer origem (em desenvolvimento)
    // Em produção, listarias os domínios permitidos:
    // origin: ['http://localhost:5173', 'chrome-extension://xxx']
  });

  // Validação global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
  console.log('✅ Servidor a correr em http://localhost:3000');
}

void bootstrap();
```

---

## 📖 SEMANA 6 — Autenticação com JWT

### O Que É Autenticação?

**Autenticação** = verificar QUEM és (login)
**Autorização** = verificar O QUE podes fazer (permissões)

No nosso sistema:
- O **coordenador** pode enviar mensagens e ver o histórico
- O **operador** só pode ver mensagens

Vamos usar **JWT** (JSON Web Token) — um sistema de tokens para autenticação.

**Como funciona:**
1. O utilizador faz login (envia email + password)
2. O servidor verifica se estão corretos
3. Se sim, o servidor devolve um **token** (uma string longa e codificada)
4. O utilizador inclui esse token em todos os pedidos seguintes
5. O servidor verifica o token e sabe quem é o utilizador

---

### Dia 1: Criar a Entidade Utilizador

**Cria a pasta e o ficheiro:**
```bash
mkdir -p src/auth/entities
mkdir -p src/auth/dto
```

**Cria `src/auth/entities/utilizador.entity.ts`:**

```typescript
// ====================================================
// utilizador.entity.ts — Entidade (tabela) de utilizadores
// ====================================================

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Utilizador {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column({ unique: true }) // "unique" = não pode haver dois iguais
  email!: string;

  @Column()
  password!: string; // Vai ser guardada encriptada (nunca em texto simples!)

  // 'coordenador' ou 'operador'
  @Column({ default: 'operador' })
  tipo!: 'coordenador' | 'operador';

  @CreateDateColumn()
  dataCriacao!: Date;
}
```

---

### Dia 2: Criar os DTOs de Autenticação

**Cria `src/auth/dto/registar.dto.ts`:**

```typescript
// ====================================================
// registar.dto.ts — DTO para registar um utilizador
// ====================================================

import { IsEmail, IsIn, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegistarDto {
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  nome!: string;

  @IsEmail({}, { message: 'O email não é válido' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'A password tem de ter pelo menos 6 caracteres' })
  password!: string;

  @IsIn(['coordenador', 'operador'], {
    message: 'O tipo tem de ser "coordenador" ou "operador"',
  })
  tipo!: 'coordenador' | 'operador';
}
```

**Cria `src/auth/dto/login.dto.ts`:**

```typescript
// ====================================================
// login.dto.ts — DTO para fazer login
// ====================================================

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'O email não é válido' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'A password não pode estar vazia' })
  password!: string;
}
```

---

### Dia 3: Criar o Service de Autenticação

**Cria `src/auth/auth.service.ts`:**

```typescript
// ====================================================
// auth.service.ts — Serviço de autenticação
// ====================================================
// Contém a lógica de registo, login e geração de tokens JWT.

import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Utilizador } from './entities/utilizador.entity';
import { RegistarDto } from './dto/registar.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    // Repositório para aceder à tabela de utilizadores
    @InjectRepository(Utilizador)
    private readonly utilizadorRepo: Repository<Utilizador>,

    // Serviço JWT para criar e verificar tokens
    private readonly jwtService: JwtService,
  ) {}

  // ==========================================
  // REGISTAR — criar um novo utilizador
  // ==========================================
  async registar(dados: RegistarDto): Promise<{ mensagem: string }> {
    // Verificar se já existe um utilizador com este email
    const existente = await this.utilizadorRepo.findOneBy({
      email: dados.email,
    });

    if (existente) {
      // ConflictException = erro 409 (conflito)
      throw new ConflictException('Já existe um utilizador com este email');
    }

    // Encriptar a password com bcrypt
    // O "10" é o número de rondas de encriptação (custo)
    // NUNCA guardar passwords em texto simples!
    const passwordEncriptada = await bcrypt.hash(dados.password, 10);

    // Criar o utilizador
    const novoUtilizador = this.utilizadorRepo.create({
      nome: dados.nome,
      email: dados.email,
      password: passwordEncriptada,
      tipo: dados.tipo,
    });

    // Guardar na base de dados
    await this.utilizadorRepo.save(novoUtilizador);

    return { mensagem: 'Utilizador registado com sucesso!' };
  }

  // ==========================================
  // LOGIN — autenticar e devolver token
  // ==========================================
  async login(dados: LoginDto): Promise<{ access_token: string }> {
    // Buscar o utilizador pelo email
    const utilizador = await this.utilizadorRepo.findOneBy({
      email: dados.email,
    });

    if (!utilizador) {
      // UnauthorizedException = erro 401 (não autorizado)
      throw new UnauthorizedException('Email ou password incorretos');
    }

    // Comparar a password enviada com a password encriptada na BD
    const passwordCorreta = await bcrypt.compare(
      dados.password,
      utilizador.password,
    );

    if (!passwordCorreta) {
      throw new UnauthorizedException('Email ou password incorretos');
    }

    // Criar o token JWT
    // O "payload" são os dados que ficam dentro do token
    const payload = {
      sub: utilizador.id,        // "sub" = subject (quem é)
      nome: utilizador.nome,
      email: utilizador.email,
      tipo: utilizador.tipo,
    };

    const token = await this.jwtService.signAsync(payload);

    return { access_token: token };
  }
}
```

---

### Dia 4: Criar o Controller e o Módulo de Autenticação

**Cria `src/auth/auth.controller.ts`:**

```typescript
// ====================================================
// auth.controller.ts — Controller de autenticação
// ====================================================

import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistarDto } from './dto/registar.dto';
import { LoginDto } from './dto/login.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /api/auth/registar — registar novo utilizador
  @Post('registar')
  registar(@Body() dados: RegistarDto) {
    return this.authService.registar(dados);
  }

  // POST /api/auth/login — fazer login
  @Post('login')
  login(@Body() dados: LoginDto) {
    return this.authService.login(dados);
  }
}
```

**Cria `src/auth/auth.module.ts`:**

```typescript
// ====================================================
// auth.module.ts — Módulo de autenticação
// ====================================================

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { Utilizador } from './entities/utilizador.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    // Regista a entidade Utilizador
    TypeOrmModule.forFeature([Utilizador]),

    // Configura o módulo JWT
    JwtModule.register({
      // A "chave secreta" usada para assinar os tokens
      // Em produção, viria de uma variável de ambiente (.env)
      secret: 'chave-secreta-do-projeto-estagio-2024',
      signOptions: {
        expiresIn: '24h', // O token expira em 24 horas
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  // Exportar para outros módulos poderem usar
  exports: [JwtModule],
})
export class AuthModule {}
```

---

### Dia 5: Ligar o Módulo de Autenticação ao App

**Edita `src/app.module.ts`:**

```typescript
// ====================================================
// app.module.ts — Módulo principal (com auth e mensagens)
// ====================================================

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensagensModule } from './mensagens/mensagens.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'notificacoes_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MensagensModule,
    AuthModule,  // Módulo de autenticação
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

### Dia 6: Proteger Rotas com Guards

Um **Guard** é um "segurança" que verifica se o pedido tem um token válido
antes de deixar passar.

**Cria `src/auth/auth.guard.ts`:**

```typescript
// ====================================================
// auth.guard.ts — Guard de autenticação
// ====================================================
// Um "guard" é como um segurança à porta.
// Verifica se o pedido tem um token JWT válido.
// Se não tiver, rejeita o pedido com erro 401.

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Obter o pedido HTTP
    const request = context.switchToHttp().getRequest<Request>();

    // Extrair o token do cabeçalho "Authorization"
    // O formato é: "Bearer eyJhbGciOiJIUzI1NiIsInR..."
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token não fornecido');
    }

    // Extrair apenas o token (sem o "Bearer ")
    const token = authHeader.split(' ')[1];

    try {
      // Verificar se o token é válido
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'chave-secreta-do-projeto-estagio-2024',
      });

      // Guardar os dados do utilizador no pedido
      // para os controllers poderem aceder
      (request as any).user = payload;
    } catch {
      throw new UnauthorizedException('Token inválido ou expirado');
    }

    return true;
  }
}
```

**Proteger o endpoint de criar mensagens:**

Edita `src/mensagens/mensagens.controller.ts`:

```typescript
// ====================================================
// mensagens.controller.ts — Controller (com autenticação)
// ====================================================

import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MensagensService } from './mensagens.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { Mensagem } from './entities/mensagem.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/mensagens')
export class MensagensController {
  constructor(private readonly mensagensService: MensagensService) {}

  // GET /api/mensagens — público (qualquer pessoa pode ver)
  @Get()
  getAll(): Promise<Mensagem[]> {
    return this.mensagensService.getAll();
  }

  // GET /api/mensagens/:id — público
  @Get(':id')
  getById(@Param('id') id: string): Promise<Mensagem | null> {
    return this.mensagensService.getById(Number(id));
  }

  // POST /api/mensagens — PROTEGIDO (precisa de token!)
  // @UseGuards(AuthGuard) = só passa se tiver um token JWT válido
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() dados: CreateMensagemDto): Promise<Mensagem> {
    return this.mensagensService.create(dados);
  }
}
```

**Atualizar o módulo de mensagens para ter acesso ao JwtService:**

Edita `src/mensagens/mensagens.module.ts`:

```typescript
// ====================================================
// mensagens.module.ts — Módulo de mensagens (com auth)
// ====================================================

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagem } from './entities/mensagem.entity';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mensagem]),
    AuthModule, // Para ter acesso ao JwtService no AuthGuard
  ],
  controllers: [MensagensController],
  providers: [MensagensService],
})
export class MensagensModule {}
```

---

### Dia 7: Testar a Autenticação Completa

**Passo 1: Registar um coordenador:**
```bash
curl -X POST http://localhost:3000/api/auth/registar \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Carlos Coordenador",
    "email": "carlos@carris.pt",
    "password": "seguro123",
    "tipo": "coordenador"
  }'
```

Resposta: `{"mensagem": "Utilizador registado com sucesso!"}`

**Passo 2: Fazer login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "carlos@carris.pt",
    "password": "seguro123"
  }'
```

Resposta: `{"access_token": "eyJhbGciOiJIUzI1NiIs..."}`

**Guarda o token!** Vais precisar dele no próximo passo.

**Passo 3: Tentar criar mensagem SEM token (deve falhar):**
```bash
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -d '{"texto": "Teste", "prioridade": "normal"}'
```

Resposta: `{"statusCode": 401, "message": "Token não fornecido"}`

**Passo 4: Criar mensagem COM token (deve funcionar):**
```bash
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer COLA_AQUI_O_TOKEN" \
  -d '{"texto": "Acidente na Av. Roma", "prioridade": "alta"}'
```

Resposta: `{"id": 1, "texto": "Acidente na Av. Roma", ...}`

🎉 **A autenticação está a funcionar!**

---

## 📖 SEMANA 7 — WebSockets: Mensagens em Tempo Real

### O Que São WebSockets?

Até agora, a comunicação funciona assim:
1. O cliente FAZ um pedido (GET /api/mensagens)
2. O servidor RESPONDE

Mas os operadores precisam de receber mensagens **automaticamente**, sem terem de perguntar.
É aqui que entram os **WebSockets**.

**HTTP normal:** Cliente pergunta → Servidor responde (uma vez)
**WebSocket:** Cliente e Servidor abrem um "canal" e comunicam nos dois sentidos, em tempo real

É como a diferença entre enviar cartas (HTTP) e ter uma chamada telefónica (WebSocket).

---

### Dia 1: Instalar Socket.io

```bash
npm install @nestjs/websockets @nestjs/platform-socket.io
```

---

### Dia 2-3: Criar o Gateway de WebSockets

Um **Gateway** no NestJS é o equivalente a um Controller, mas para WebSockets.

**Cria a pasta e ficheiro:**
```bash
mkdir -p src/notificacoes
```

**Cria `src/notificacoes/notificacoes.gateway.ts`:**

```typescript
// ====================================================
// notificacoes.gateway.ts — Gateway de WebSockets
// ====================================================
// O "gateway" é como um controller, mas para WebSockets.
// Permite comunicação em tempo real entre o servidor e os clientes.

import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

// @WebSocketGateway() configura o servidor WebSocket
// cors: true permite ligações de outros domínios (como o frontend)
@WebSocketGateway({
  cors: {
    origin: true,
  },
})
export class NotificacoesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  // O servidor Socket.io
  @WebSocketServer()
  server!: Server;

  // Chamado quando um cliente se liga
  handleConnection(client: Socket) {
    console.log(`🔌 Cliente ligado: ${client.id}`);
  }

  // Chamado quando um cliente se desliga
  handleDisconnect(client: Socket) {
    console.log(`❌ Cliente desligado: ${client.id}`);
  }

  // Método para enviar uma mensagem a TODOS os clientes ligados
  enviarParaTodos(mensagem: any) {
    console.log('📢 A enviar mensagem para todos os clientes...');
    this.server.emit('nova-mensagem', mensagem);
  }
}
```

**Cria `src/notificacoes/notificacoes.module.ts`:**

```typescript
// ====================================================
// notificacoes.module.ts — Módulo de notificações
// ====================================================

import { Module } from '@nestjs/common';
import { NotificacoesGateway } from './notificacoes.gateway';

@Module({
  providers: [NotificacoesGateway],
  exports: [NotificacoesGateway], // Exportar para outros módulos usarem
})
export class NotificacoesModule {}
```

---

### Dia 4: Integrar WebSockets com Mensagens

Quando uma mensagem é criada, queremos que seja enviada automaticamente
a todos os clientes ligados por WebSocket.

**Edita `src/mensagens/mensagens.module.ts`:**

```typescript
// ====================================================
// mensagens.module.ts — Com WebSockets
// ====================================================

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mensagem } from './entities/mensagem.entity';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { AuthModule } from '../auth/auth.module';
import { NotificacoesModule } from '../notificacoes/notificacoes.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Mensagem]),
    AuthModule,
    NotificacoesModule, // Para usar o gateway de WebSockets
  ],
  controllers: [MensagensController],
  providers: [MensagensService],
})
export class MensagensModule {}
```

**Edita `src/mensagens/mensagens.service.ts`:**

```typescript
// ====================================================
// mensagens.service.ts — Com notificações em tempo real
// ====================================================

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensagem } from './entities/mensagem.entity';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { NotificacoesGateway } from '../notificacoes/notificacoes.gateway';

@Injectable()
export class MensagensService {
  constructor(
    @InjectRepository(Mensagem)
    private readonly mensagemRepo: Repository<Mensagem>,

    // Injetar o gateway de notificações
    private readonly notificacoes: NotificacoesGateway,
  ) {}

  getAll(): Promise<Mensagem[]> {
    return this.mensagemRepo.find({
      order: { dataCriacao: 'DESC' },
    });
  }

  getById(id: number): Promise<Mensagem | null> {
    return this.mensagemRepo.findOneBy({ id });
  }

  async create(dados: CreateMensagemDto): Promise<Mensagem> {
    const novaMensagem = this.mensagemRepo.create(dados);
    const mensagemGuardada = await this.mensagemRepo.save(novaMensagem);

    // Enviar a mensagem a todos os clientes ligados via WebSocket!
    this.notificacoes.enviarParaTodos(mensagemGuardada);

    return mensagemGuardada;
  }
}
```

**Adicionar o módulo de notificações ao app.module.ts:**

```typescript
// ====================================================
// app.module.ts — Completo
// ====================================================

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MensagensModule } from './mensagens/mensagens.module';
import { AuthModule } from './auth/auth.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'notificacoes_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    MensagensModule,
    AuthModule,
    NotificacoesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

---

### Dia 5-7: Testar WebSockets

**Criar um ficheiro HTML simples para testar:**

Cria um ficheiro `test-websocket.html` no teu ambiente de trabalho (fora do projeto):

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>Teste WebSocket</title>
  <script src="https://cdn.socket.io/4.7.5/socket.io.min.js"></script>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; }
    #mensagens { border: 1px solid #ccc; padding: 10px; min-height: 200px; }
    .alta { color: red; font-weight: bold; }
    .normal { color: green; }
  </style>
</head>
<body>
  <h1>🔔 Teste de Notificações em Tempo Real</h1>
  <p id="estado">⏳ A ligar...</p>
  <h2>Mensagens recebidas:</h2>
  <div id="mensagens"></div>

  <script>
    // Ligar ao servidor WebSocket
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      document.getElementById('estado').textContent = '✅ Ligado ao servidor!';
    });

    socket.on('disconnect', () => {
      document.getElementById('estado').textContent = '❌ Desligado do servidor';
    });

    // Ouvir mensagens novas
    socket.on('nova-mensagem', (mensagem) => {
      const div = document.getElementById('mensagens');
      const classe = mensagem.prioridade === 'alta' ? 'alta' : 'normal';
      div.innerHTML = `
        <p class="${classe}">
          <strong>[${mensagem.prioridade.toUpperCase()}]</strong>
          ${mensagem.texto}
          <small>(${new Date(mensagem.dataCriacao).toLocaleString('pt-PT')})</small>
        </p>
      ` + div.innerHTML;
    });
  </script>
</body>
</html>
```

**Para testar:**
1. Certifica-te que o servidor está a correr (`npm run start:dev`)
2. Abre o ficheiro `test-websocket.html` no browser
3. Deve aparecer "✅ Ligado ao servidor!"
4. Noutro terminal, envia uma mensagem:
```bash
curl -X POST http://localhost:3000/api/mensagens \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer O_TEU_TOKEN" \
  -d '{"texto": "Teste de notificação em tempo real!", "prioridade": "alta"}'
```
5. A mensagem deve aparecer automaticamente no browser! 🎉

---

## 📖 SEMANA 8 — HTML, CSS e Introdução ao Vue.js

### Dia 1-2: HTML Básico

**HTML** (HyperText Markup Language) é a linguagem que define a **estrutura** de uma página web.

Cria um ficheiro `aprender-html.html` (fora do projeto, numa pasta de aprendizagem):

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <!-- O <head> contém informações sobre a página (metadados) -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aprender HTML</title>
</head>
<body>
  <!-- O <body> contém tudo o que aparece na página -->

  <!-- Títulos: h1 (maior) até h6 (menor) -->
  <h1>Título Principal</h1>
  <h2>Subtítulo</h2>
  <h3>Sub-subtítulo</h3>

  <!-- Parágrafo -->
  <p>Isto é um parágrafo de texto normal.</p>
  <p>Isto é outro parágrafo. O HTML usa <strong>tags</strong> para dar estrutura.</p>

  <!-- Listas -->
  <h2>Lista não ordenada:</h2>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <h2>Lista ordenada:</h2>
  <ol>
    <li>Primeiro</li>
    <li>Segundo</li>
    <li>Terceiro</li>
  </ol>

  <!-- Links -->
  <p>Visita o <a href="https://www.google.com">Google</a></p>

  <!-- Imagem -->
  <!-- <img src="foto.jpg" alt="Descrição da imagem"> -->

  <!-- Formulário -->
  <h2>Formulário de Exemplo:</h2>
  <form>
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" placeholder="Escreve o teu nome"><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" placeholder="exemplo@email.com"><br><br>

    <label for="mensagem">Mensagem:</label><br>
    <textarea id="mensagem" rows="4" cols="50" placeholder="Escreve aqui..."></textarea><br><br>

    <button type="submit">Enviar</button>
  </form>

  <!-- Divisões (blocos) -->
  <div style="background-color: #f0f0f0; padding: 10px; margin-top: 20px;">
    <h3>Isto é um div</h3>
    <p>Um &lt;div&gt; é um bloco genérico para agrupar conteúdo.</p>
  </div>

  <!-- Tabela -->
  <h2>Tabela de Mensagens:</h2>
  <table border="1" cellpadding="8">
    <thead>
      <tr>
        <th>ID</th>
        <th>Texto</th>
        <th>Prioridade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Acidente na Av. Roma</td>
        <td>Alta</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Tudo normal</td>
        <td>Normal</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

Abre este ficheiro no Chrome para ver o resultado.

---

### Dia 3-4: CSS Básico

**CSS** (Cascading Style Sheets) é a linguagem que define o **aspeto visual** da página.

Cria `aprender-css.html`:

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <title>Aprender CSS</title>
  <!-- CSS pode estar dentro de <style> ou num ficheiro separado -->
  <style>
    /* CSS usa seletores para escolher elementos e aplicar estilos */

    /* Estilizar o body (toda a página) */
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
      max-width: 800px;
      margin: 0 auto;    /* Centrar na página */
      padding: 20px;
    }

    /* Estilizar títulos h1 */
    h1 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }

    /* Classes — reutilizáveis com class="nome" */
    .card {
      background-color: white;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .prioridade-alta {
      border-left: 4px solid #e74c3c;
    }

    .prioridade-normal {
      border-left: 4px solid #2ecc71;
    }

    .badge {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: bold;
      color: white;
    }

    .badge-alta { background-color: #e74c3c; }
    .badge-normal { background-color: #2ecc71; }

    /* Botões */
    .btn {
      display: inline-block;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      color: white;
    }

    .btn-primary { background-color: #3498db; }
    .btn-danger { background-color: #e74c3c; }
    .btn-success { background-color: #2ecc71; }

    .btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    /* Input de formulário */
    .input {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 6px;
      font-size: 14px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    .input:focus {
      border-color: #3498db;
      outline: none;
    }
  </style>
</head>
<body>
  <h1>📢 Sistema de Notificações</h1>

  <!-- Card de mensagem urgente -->
  <div class="card prioridade-alta">
    <span class="badge badge-alta">ALTA</span>
    <h3>Acidente na Av. de Roma</h3>
    <p>Desviar linha 735 pela Av. Almirante Reis</p>
    <small>15/01/2024 10:30</small>
  </div>

  <!-- Card de mensagem normal -->
  <div class="card prioridade-normal">
    <span class="badge badge-normal">NORMAL</span>
    <h3>Trânsito fluido</h3>
    <p>Todas as linhas a operar normalmente</p>
    <small>15/01/2024 11:00</small>
  </div>

  <!-- Formulário de envio -->
  <div class="card">
    <h3>Enviar Nova Mensagem</h3>
    <input type="text" class="input" placeholder="Escreve a mensagem...">
    <div>
      <button class="btn btn-danger">🔴 Alta Prioridade</button>
      <button class="btn btn-success">🟢 Normal</button>
      <button class="btn btn-primary">📤 Enviar</button>
    </div>
  </div>
</body>
</html>
```

Abre no browser para ver o resultado. Isto já parece uma aplicação real!

---

### Dia 5-7: Introdução ao Vue.js

**Vue.js** é uma framework JavaScript para criar interfaces web interativas.
Em vez de manipular o HTML diretamente, descrevemos o que queremos e o Vue trata do resto.

**Instalar o Vue CLI e criar o projeto do Portal do Coordenador:**

Numa pasta **fora** do backend (pasta pai, por exemplo):

```bash
cd ..
npm create vue@latest PortalCoordenador
```

Quando perguntar opções, escolhe:
- TypeScript: **Yes**
- JSX: No
- Vue Router: **Yes**
- Pinia: **Yes** (gestor de estado)
- Vitest: No (por agora)
- ESLint: **Yes**
- Prettier: **Yes**

```bash
cd PortalCoordenador
npm install
npm run dev
```

Abre http://localhost:5173 — deves ver a página de boas-vindas do Vue!

> 💡 **O Portal do Coordenador vai ser um projeto separado.**
> - Backend (NestJS): http://localhost:3000
> - Frontend (Vue.js): http://localhost:5173

🎉 **Parabéns! Concluíste o Mês 2!** Já sabes:
- ✅ Testes unitários com Jest
- ✅ Validação de dados com class-validator
- ✅ CORS (comunicação entre frontend e backend)
- ✅ Autenticação JWT (registo, login, tokens)
- ✅ Guards (proteger rotas)
- ✅ WebSockets com Socket.io (tempo real)
- ✅ HTML e CSS básico
- ✅ Vue.js setup inicial

---

# �� MÊS 3 — FRONTEND, EXTENSÃO E INTEGRAÇÃO

> Objetivo: Construir o Portal do Coordenador com Vue.js,
> criar a Extensão de Chrome, e integrar tudo para funcionar em conjunto.

---

## 📖 SEMANA 9 — Vue.js: Portal do Coordenador

### Conceitos Básicos do Vue.js

O Vue.js funciona com **componentes** — peças reutilizáveis de interface.
Cada componente é um ficheiro `.vue` que contém 3 partes:

```vue
<!-- template = o HTML (estrutura) -->
<template>
  <div>
    <h1>{{ titulo }}</h1>
  </div>
</template>

<!-- script = o TypeScript/JavaScript (lógica) -->
<script setup lang="ts">
import { ref } from 'vue';
const titulo = ref('Olá Mundo!');
</script>

<!-- style = o CSS (aspeto visual) -->
<style scoped>
h1 { color: blue; }
</style>
```

- `{{ titulo }}` = mostra o valor da variável `titulo` no HTML
- `ref()` = cria uma variável reativa (o Vue atualiza o HTML automaticamente quando ela muda)
- `scoped` = os estilos só se aplicam a este componente

---

### Dia 1: Estrutura do Projeto Vue

Depois de criares o projeto Vue (fim da semana 8), a estrutura é:

```
PortalCoordenador/
├── src/
│   ├── App.vue              ← Componente raiz
│   ├── main.ts              ← Ponto de entrada
│   ├── router/
│   │   └── index.ts         ← Configuração de rotas (páginas)
│   ├── stores/              ← Gestão de estado (Pinia)
│   ├── views/               ← Páginas
│   ├── components/          ← Componentes reutilizáveis
│   └── assets/              ← Imagens, fontes, etc.
├── index.html               ← Página HTML principal
├── package.json
└── vite.config.ts           ← Configuração do Vite (bundler)
```

---

### Dia 2: Página de Login

**Instalar o axios (para fazer pedidos HTTP ao backend):**

```bash
cd PortalCoordenador
npm install axios socket.io-client
```

**Cria `src/services/api.ts` — Configuração do axios:**

```typescript
// ====================================================
// api.ts — Configuração do cliente HTTP
// ====================================================
// O axios facilita fazer pedidos HTTP ao backend.

import axios from 'axios';

// Criar uma instância do axios com a URL base do backend
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Interceptor — adiciona automaticamente o token a todos os pedidos
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
```

**Cria `src/views/LoginView.vue` — Página de Login:**

```vue
<!-- ====================================================
     LoginView.vue — Página de Login
     ==================================================== -->
<template>
  <div class="login-container">
    <div class="login-card">
      <h1>🔔 Sistema de Notificações</h1>
      <h2>Login do Coordenador</h2>

      <!-- Formulário de login -->
      <!-- @submit.prevent impede o formulário de recarregar a página -->
      <form @submit.prevent="fazerLogin">
        <div class="campo">
          <label for="email">Email:</label>
          <!-- v-model liga o input à variável -->
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="exemplo@carris.pt"
            required
          />
        </div>

        <div class="campo">
          <label for="password">Password:</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="A tua password"
            required
          />
        </div>

        <!-- Mostrar mensagem de erro se houver -->
        <p v-if="erro" class="erro">{{ erro }}</p>

        <button type="submit" :disabled="aCarregar">
          {{ aCarregar ? 'A entrar...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';

// Variáveis reativas
const email = ref('');
const password = ref('');
const erro = ref('');
const aCarregar = ref(false);

const router = useRouter();

// Função de login
const fazerLogin = async () => {
  erro.value = '';
  aCarregar.value = true;

  try {
    // Enviar email e password para o backend
    const resposta = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    });

    // Guardar o token no localStorage do browser
    localStorage.setItem('token', resposta.data.access_token);

    // Redirecionar para o painel principal
    router.push('/painel');
  } catch (e: any) {
    // Mostrar erro
    if (e.response?.data?.message) {
      erro.value = e.response.data.message;
    } else {
      erro.value = 'Erro ao fazer login. Verifica a ligação ao servidor.';
    }
  } finally {
    aCarregar.value = false;
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 8px;
  color: #2c3e50;
}

h2 {
  margin-bottom: 24px;
  color: #7f8c8d;
  font-weight: normal;
  font-size: 16px;
}

.campo {
  margin-bottom: 16px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  box-sizing: border-box;
}

input:focus {
  border-color: #3498db;
  outline: none;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
}

button:hover {
  background-color: #2980b9;
}

button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.erro {
  color: #e74c3c;
  margin-top: 8px;
}
</style>
```

---

### Dia 3-4: Painel Principal (Dashboard)

**Cria `src/views/PainelView.vue`:**

```vue
<!-- ====================================================
     PainelView.vue — Painel principal do coordenador
     ==================================================== -->
<template>
  <div class="painel">
    <!-- Cabeçalho -->
    <header class="cabecalho">
      <h1>📢 Painel do Coordenador</h1>
      <button class="btn-sair" @click="sair">Sair</button>
    </header>

    <!-- Formulário de envio de mensagem -->
    <section class="secao-envio">
      <h2>Enviar Nova Mensagem</h2>

      <!-- Templates rápidos -->
      <div class="templates">
        <button class="btn-template" @click="usarTemplate('Acidente')">
          🚗 Acidente
        </button>
        <button class="btn-template" @click="usarTemplate('Trânsito intenso')">
          🚦 Trânsito intenso
        </button>
        <button class="btn-template" @click="usarTemplate('Avaria')">
          🔧 Avaria
        </button>
        <button class="btn-template" @click="usarTemplate('Desvio')">
          ↩️ Desvio
        </button>
      </div>

      <textarea
        v-model="textoMensagem"
        placeholder="Escreve a mensagem para os operadores..."
        rows="3"
      ></textarea>

      <div class="acoes-envio">
        <select v-model="prioridade">
          <option value="normal">🟢 Normal</option>
          <option value="alta">🔴 Alta Prioridade</option>
        </select>
        <button class="btn-enviar" @click="enviarMensagem" :disabled="!textoMensagem.trim()">
          📤 Enviar Mensagem
        </button>
      </div>
    </section>

    <!-- Histórico de mensagens -->
    <section class="secao-historico">
      <h2>📜 Histórico de Mensagens</h2>

      <!-- Pesquisa -->
      <input
        v-model="termoPesquisa"
        type="text"
        placeholder="🔍 Pesquisar mensagens..."
        class="input-pesquisa"
      />

      <!-- Lista de mensagens -->
      <div v-if="mensagensFiltradas.length === 0" class="sem-mensagens">
        Nenhuma mensagem encontrada.
      </div>

      <div
        v-for="msg in mensagensFiltradas"
        :key="msg.id"
        class="card-mensagem"
        :class="{ 'prioridade-alta': msg.prioridade === 'alta' }"
      >
        <div class="card-cabecalho">
          <span class="badge" :class="msg.prioridade === 'alta' ? 'badge-alta' : 'badge-normal'">
            {{ msg.prioridade === 'alta' ? '🔴 ALTA' : '🟢 Normal' }}
          </span>
          <span class="data">
            {{ new Date(msg.dataCriacao).toLocaleString('pt-PT') }}
          </span>
        </div>
        <p class="texto-mensagem">{{ msg.texto }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api';

// ==========================================
// TIPOS
// ==========================================
interface Mensagem {
  id: number;
  texto: string;
  prioridade: 'normal' | 'alta';
  dataCriacao: string;
}

// ==========================================
// VARIÁVEIS REATIVAS
// ==========================================
const textoMensagem = ref('');
const prioridade = ref<'normal' | 'alta'>('normal');
const mensagens = ref<Mensagem[]>([]);
const termoPesquisa = ref('');
const router = useRouter();

// ==========================================
// COMPUTED — valores calculados automaticamente
// ==========================================
// Filtra mensagens pelo termo de pesquisa
const mensagensFiltradas = computed(() => {
  if (!termoPesquisa.value.trim()) {
    return mensagens.value;
  }
  const termo = termoPesquisa.value.toLowerCase();
  return mensagens.value.filter((m) =>
    m.texto.toLowerCase().includes(termo),
  );
});

// ==========================================
// FUNÇÕES
// ==========================================

// Buscar todas as mensagens ao carregar a página
const carregarMensagens = async () => {
  try {
    const resposta = await api.get('/mensagens');
    mensagens.value = resposta.data;
  } catch (e) {
    console.error('Erro ao carregar mensagens:', e);
  }
};

// Enviar uma nova mensagem
const enviarMensagem = async () => {
  if (!textoMensagem.value.trim()) return;

  try {
    const resposta = await api.post('/mensagens', {
      texto: textoMensagem.value,
      prioridade: prioridade.value,
    });

    // Adicionar a nova mensagem ao início da lista
    mensagens.value.unshift(resposta.data);

    // Limpar o formulário
    textoMensagem.value = '';
    prioridade.value = 'normal';
  } catch (e: any) {
    if (e.response?.status === 401) {
      alert('Sessão expirada. Faz login novamente.');
      sair();
    } else {
      alert('Erro ao enviar mensagem');
    }
  }
};

// Usar um template rápido
const usarTemplate = (texto: string) => {
  textoMensagem.value = texto + ': ';
};

// Fazer logout
const sair = () => {
  localStorage.removeItem('token');
  router.push('/');
};

// Carregar mensagens quando o componente é montado
onMounted(() => {
  // Verificar se tem token
  if (!localStorage.getItem('token')) {
    router.push('/');
    return;
  }
  carregarMensagens();
});
</script>

<style scoped>
.painel {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #eee;
}

.btn-sair {
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.secao-envio,
.secao-historico {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 20px;
}

.templates {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.btn-template {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: #f8f9fa;
  cursor: pointer;
  font-size: 13px;
}

.btn-template:hover {
  background: #e9ecef;
}

textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  box-sizing: border-box;
  font-family: inherit;
}

.acoes-envio {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.btn-enviar {
  flex: 1;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.btn-enviar:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.input-pesquisa {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.card-mensagem {
  background: #f8f9fa;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  border-left: 4px solid #2ecc71;
}

.card-mensagem.prioridade-alta {
  border-left-color: #e74c3c;
  background: #fdf2f2;
}

.card-cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.badge {
  font-size: 12px;
  font-weight: bold;
}

.badge-alta { color: #e74c3c; }
.badge-normal { color: #2ecc71; }

.data {
  font-size: 12px;
  color: #999;
}

.texto-mensagem {
  margin: 0;
  font-size: 14px;
}

.sem-mensagens {
  text-align: center;
  color: #999;
  padding: 20px;
}
</style>
```

---

### Dia 5: Configurar as Rotas do Vue

**Edita `src/router/index.ts`:**

```typescript
// ====================================================
// router/index.ts — Configuração de rotas
// ====================================================
// Define que componente aparece em cada URL.

import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import PainelView from '../views/PainelView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',               // URL: /
      name: 'login',
      component: LoginView,    // Mostra a página de login
    },
    {
      path: '/painel',         // URL: /painel
      name: 'painel',
      component: PainelView,   // Mostra o painel do coordenador
    },
  ],
});

export default router;
```

**Edita `src/App.vue` (componente raiz):**

```vue
<!-- ====================================================
     App.vue — Componente raiz
     ==================================================== -->
<template>
  <!-- RouterView mostra o componente da rota atual -->
  <RouterView />
</template>

<script setup lang="ts">
// Não precisa de lógica adicional aqui
</script>

<style>
/* Estilos globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
}
</style>
```

**Testar o portal:**
1. Certifica-te que o backend está a correr (`npm run start:dev` na pasta do backend)
2. Na pasta do PortalCoordenador: `npm run dev`
3. Abre http://localhost:5173
4. Faz login com o utilizador que registaste antes
5. Envia uma mensagem e vê-a aparecer no histórico!

---

## 📖 SEMANA 10 — Extensão de Chrome

### O Que É uma Extensão de Chrome?

Uma extensão de Chrome é um pequeno programa que corre dentro do browser.
No nosso caso, vai:
- Ligar-se ao backend por WebSocket
- Receber mensagens em tempo real
- Mostrar notificações (push notifications)
- Ter um popup com as mensagens recentes

---

### Dia 1-2: Estrutura da Extensão

**Cria uma pasta nova para a extensão (fora do backend):**

```bash
cd ..
mkdir ExtensaoChrome
cd ExtensaoChrome
```

**Cria `manifest.json` — O "bilhete de identidade" da extensão:**

```json
{
  "manifest_version": 3,
  "name": "Notificações do Coordenador",
  "description": "Recebe notificações em tempo real do coordenador de tráfego",
  "version": "1.0.0",
  "permissions": [
    "notifications",
    "storage"
  ],
  "host_permissions": [
    "http://localhost:3000/*"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  },
  "icons": {
    "16": "icons/icon16.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png"
  }
}
```

> 💡 **manifest.json** é obrigatório para toda extensão de Chrome.
> Define o nome, permissões e ficheiros da extensão.

**Para os ícones**, podes criar ícones simples ou usar placeholders temporariamente.
Cria a pasta `icons/` e coloca lá 3 imagens PNG (16x16, 48x48, 128x128 pixels).
Podes usar qualquer ícone de notificação por agora.

---

### Dia 3: Background Script (Service Worker)

O **background script** corre em segundo plano, mesmo quando o popup está fechado.
É ele que mantém a ligação WebSocket ao servidor.

**Cria `background.js`:**

```javascript
// ====================================================
// background.js — Service Worker da extensão
// ====================================================
// Corre em segundo plano. Mantém a ligação ao servidor
// e mostra notificações quando chegam mensagens novas.

// Nota: Em extensões de Chrome (Manifest V3), não podemos
// usar a library socket.io diretamente. Usamos ligação direta.
// Para simplificar, vamos fazer polling (verificar novas mensagens periodicamente).

// URL do backend
const API_URL = 'http://localhost:3000/api';

// Guardar o ID da última mensagem vista
let ultimoIdVisto = 0;

// Verificar novas mensagens a cada 5 segundos
const verificarNovasMensagens = async () => {
  try {
    const resposta = await fetch(`${API_URL}/mensagens`);
    const mensagens = await resposta.json();

    if (mensagens.length > 0) {
      // Verificar se há mensagens novas
      for (const msg of mensagens) {
        if (msg.id > ultimoIdVisto) {
          // Mostrar notificação do browser!
          chrome.notifications.create(`msg-${msg.id}`, {
            type: 'basic',
            iconUrl: 'icons/icon128.png',
            title: msg.prioridade === 'alta' ? '🔴 URGENTE' : '🟢 Nova Mensagem',
            message: msg.texto,
            priority: msg.prioridade === 'alta' ? 2 : 0,
            requireInteraction: msg.prioridade === 'alta', // Mensagens urgentes ficam até o utilizador clicar
          });
        }
      }

      // Atualizar o último ID visto
      ultimoIdVisto = mensagens[0].id;

      // Guardar mensagens no storage da extensão
      chrome.storage.local.set({ mensagens: mensagens.slice(0, 20) });
    }
  } catch (erro) {
    console.log('Erro ao verificar mensagens:', erro);
  }
};

// Correr a verificação quando a extensão é instalada
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extensão de notificações instalada!');
  verificarNovasMensagens();
});

// Criar um alarme para verificar mensagens periodicamente
chrome.alarms.create('verificar-mensagens', {
  periodInMinutes: 0.1, // A cada 0.1 minutos (6 segundos)
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'verificar-mensagens') {
    verificarNovasMensagens();
  }
});
```

> ⚠️ **Nota sobre Manifest V3:** As extensões de Chrome modernas (Manifest V3) usam
> Service Workers, que têm limitações em relação a WebSockets persistentes.
> Usamos **polling** (verificar periodicamente) como alternativa simples e funcional.

---

### Dia 4-5: Popup da Extensão

**Cria `popup.html`:**

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      width: 350px;
      max-height: 500px;
      font-family: 'Segoe UI', Arial, sans-serif;
      background-color: #f5f5f5;
    }

    .cabecalho {
      background-color: #2c3e50;
      color: white;
      padding: 12px 16px;
      text-align: center;
    }

    .cabecalho h1 {
      font-size: 14px;
      margin-bottom: 2px;
    }

    .cabecalho p {
      font-size: 11px;
      opacity: 0.8;
    }

    .estado {
      padding: 8px 16px;
      font-size: 12px;
      text-align: center;
    }

    .estado.ligado { background-color: #d4edda; color: #155724; }
    .estado.desligado { background-color: #f8d7da; color: #721c24; }

    .mensagens {
      padding: 8px;
      max-height: 380px;
      overflow-y: auto;
    }

    .mensagem {
      background: white;
      padding: 10px 12px;
      border-radius: 8px;
      margin-bottom: 6px;
      border-left: 3px solid #2ecc71;
    }

    .mensagem.alta {
      border-left-color: #e74c3c;
      background: #fff5f5;
    }

    .mensagem-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }

    .badge {
      font-size: 10px;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 10px;
      color: white;
    }

    .badge.alta { background-color: #e74c3c; }
    .badge.normal { background-color: #2ecc71; }

    .data {
      font-size: 10px;
      color: #999;
    }

    .texto {
      font-size: 13px;
      color: #333;
    }

    .vazio {
      text-align: center;
      color: #999;
      padding: 40px 20px;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="cabecalho">
    <h1>🔔 Notificações do Coordenador</h1>
    <p>Sistema de Tráfego</p>
  </div>

  <div id="estado" class="estado ligado">✅ A monitorizar novas mensagens</div>

  <div id="mensagens" class="mensagens">
    <div class="vazio">A carregar mensagens...</div>
  </div>

  <script src="popup.js"></script>
</body>
</html>
```

**Cria `popup.js`:**

```javascript
// ====================================================
// popup.js — Lógica do popup da extensão
// ====================================================
// Este ficheiro corre quando o utilizador clica no ícone da extensão.
// Mostra as mensagens mais recentes guardadas no storage.

// Quando o popup abre, carregar as mensagens guardadas
document.addEventListener('DOMContentLoaded', () => {
  const divMensagens = document.getElementById('mensagens');

  // Buscar mensagens do storage da extensão
  chrome.storage.local.get(['mensagens'], (result) => {
    const mensagens = result.mensagens || [];

    if (mensagens.length === 0) {
      divMensagens.innerHTML = '<div class="vazio">Nenhuma mensagem recebida ainda.</div>';
      return;
    }

    // Gerar o HTML das mensagens
    divMensagens.innerHTML = mensagens
      .map((msg) => {
        const isAlta = msg.prioridade === 'alta';
        const data = new Date(msg.dataCriacao).toLocaleString('pt-PT');

        return `
          <div class="mensagem ${isAlta ? 'alta' : ''}">
            <div class="mensagem-header">
              <span class="badge ${isAlta ? 'alta' : 'normal'}">
                ${isAlta ? '🔴 ALTA' : '🟢 Normal'}
              </span>
              <span class="data">${data}</span>
            </div>
            <p class="texto">${msg.texto}</p>
          </div>
        `;
      })
      .join('');
  });
});
```

---

### Dia 6-7: Instalar e Testar a Extensão

**Passo 1: Abrir o Chrome e ir a extensões**
1. Escreve `chrome://extensions` na barra de endereços
2. Ativa o "Modo de programador" (canto superior direito)
3. Clica "Carregar sem compactar" (ou "Load unpacked")
4. Seleciona a pasta `ExtensaoChrome`

**Passo 2: Testar**
1. Certifica-te que o backend está a correr
2. Envia uma mensagem pelo Painel do Coordenador ou curl
3. A extensão deve mostrar uma notificação do browser!
4. Clica no ícone da extensão para ver as mensagens recentes

> 💡 **Se não aparecerem ícones:** Cria ícones PNG simples (pode ser um quadrado colorido)
> nas dimensões 16x16, 48x48 e 128x128 pixels na pasta `icons/`.

---

## 📖 SEMANA 11 — Integração Completa

### Dia 1-3: Ligar Tudo

Neste ponto, deves ter 3 componentes a funcionar:

```
┌─────────────────────┐     ┌──────────────┐     ┌─────────────────────┐
│  Portal do           │     │              │     │  Extensão de        │
│  Coordenador         │◄───►│   Backend    │◄───►│  Chrome             │
│  (Vue.js :5173)      │     │  (NestJS     │     │  (operadores)       │
│                      │     │   :3000)     │     │                     │
│  - Envia mensagens   │     │  - API REST  │     │  - Recebe notif.    │
│  - Vê histórico      │     │  - PostgreSQL│     │  - Mostra popup     │
│  - Templates         │     │  - JWT       │     │  - Push notif.      │
└─────────────────────┘     └──────────────┘     └─────────────────────┘
```

**Checklist de verificação:**

- [ ] Docker com PostgreSQL a correr (`docker compose up -d`)
- [ ] Backend NestJS a correr (`npm run start:dev` na pasta do backend)
- [ ] Portal do Coordenador a correr (`npm run dev` na pasta do portal)
- [ ] Extensão de Chrome instalada
- [ ] Login funciona no portal
- [ ] Criar mensagem no portal → aparece no histórico
- [ ] Criar mensagem → extensão recebe notificação
- [ ] Extensão mostra mensagens recentes no popup

---

### Dia 4-5: Melhorias de UI/UX

**Adicionar notificações em tempo real ao Portal com Socket.io:**

Edita `src/views/PainelView.vue` — adiciona ao `<script setup>`:

```typescript
// Importar socket.io-client
import { io } from 'socket.io-client';

// (adicionar dentro do onMounted, depois de carregarMensagens)
// Ligar ao WebSocket
const socket = io('http://localhost:3000');

socket.on('nova-mensagem', (mensagem: Mensagem) => {
  // Verificar se a mensagem já está na lista (evitar duplicados)
  const existe = mensagens.value.some((m) => m.id === mensagem.id);
  if (!existe) {
    mensagens.value.unshift(mensagem);
  }
});
```

Isto faz com que, mesmo que outro coordenador envie uma mensagem,
ela apareça automaticamente no teu painel!

---

### Dia 6-7: Filtro por Datas e Pesquisa Avançada

**Adicionar endpoint de pesquisa ao backend:**

Edita `src/mensagens/mensagens.controller.ts` — adiciona um novo endpoint:

```typescript
// Adicionar ao início dos imports:
import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';

// Adicionar este endpoint ANTES do getById (importante!):

  // GET /api/mensagens/pesquisa?texto=acidente&prioridade=alta
  @Get('pesquisa')
  pesquisar(
    @Query('texto') texto?: string,
    @Query('prioridade') prioridade?: 'normal' | 'alta',
  ) {
    return this.mensagensService.pesquisar(texto, prioridade);
  }
```

Edita `src/mensagens/mensagens.service.ts` — adiciona o método:

```typescript
// Adicionar ao início dos imports:
import { Repository, Like } from 'typeorm';

// Adicionar este método à classe:

  // Pesquisar mensagens por texto e/ou prioridade
  async pesquisar(texto?: string, prioridade?: 'normal' | 'alta'): Promise<Mensagem[]> {
    const where: any = {};

    if (texto) {
      where.texto = Like(`%${texto}%`); // Like = contém o texto
    }

    if (prioridade) {
      where.prioridade = prioridade;
    }

    return this.mensagemRepo.find({
      where,
      order: { dataCriacao: 'DESC' },
    });
  }
```

**Testar:**
```bash
# Pesquisar por texto
curl "http://localhost:3000/api/mensagens/pesquisa?texto=acidente"

# Filtrar por prioridade
curl "http://localhost:3000/api/mensagens/pesquisa?prioridade=alta"

# Combinar filtros
curl "http://localhost:3000/api/mensagens/pesquisa?texto=avaria&prioridade=alta"
```

---

## 📖 SEMANA 12 — Melhorias Finais e Demonstração

### Dia 1-2: Templates de Mensagens Rápidas no Backend

**Cria `src/mensagens/templates.ts`:**

```typescript
// ====================================================
// templates.ts — Templates de mensagens pré-definidas
// ====================================================

export interface TemplateMensagem {
  id: number;
  nome: string;
  icone: string;
  textoBase: string;
  prioridade: 'normal' | 'alta';
}

export const TEMPLATES: TemplateMensagem[] = [
  {
    id: 1,
    nome: 'Acidente',
    icone: '🚗',
    textoBase: 'Acidente reportado: ',
    prioridade: 'alta',
  },
  {
    id: 2,
    nome: 'Trânsito Intenso',
    icone: '🚦',
    textoBase: 'Trânsito intenso: ',
    prioridade: 'normal',
  },
  {
    id: 3,
    nome: 'Avaria',
    icone: '🔧',
    textoBase: 'Avaria reportada: ',
    prioridade: 'alta',
  },
  {
    id: 4,
    nome: 'Desvio',
    icone: '↩️',
    textoBase: 'Desvio em vigor: ',
    prioridade: 'normal',
  },
  {
    id: 5,
    nome: 'Informação',
    icone: 'ℹ️',
    textoBase: 'Informação: ',
    prioridade: 'normal',
  },
];
```

**Adicionar endpoint ao controller:**

```typescript
// Adicionar ao mensagens.controller.ts:
import { TEMPLATES } from './templates';

  // GET /api/mensagens/templates — devolve os templates disponíveis
  @Get('templates')
  getTemplates() {
    return TEMPLATES;
  }
```

> ⚠️ **Nota:** Certifica-te que o endpoint `templates` vem ANTES do `:id`
> no controller, senão o NestJS vai interpretar "templates" como um id!

---

### Dia 3-4: Preparação para Demonstração

**Checklist final:**

- [ ] Backend arranca sem erros
- [ ] Login funciona (registar + entrar)
- [ ] Criar mensagens com prioridades
- [ ] Ver histórico de mensagens
- [ ] Pesquisar mensagens por texto
- [ ] Templates de mensagens rápidas
- [ ] WebSocket envia notificações em tempo real
- [ ] Extensão de Chrome recebe notificações
- [ ] Extensão mostra mensagens no popup
- [ ] Portal do Coordenador funcional e bonito

---

### Dia 5-7: Documentação e Limpeza

**Atualizar o README.md com instruções claras de como correr tudo:**

O README deve explicar:
1. O que é o projeto
2. Como instalar (Node.js, Docker, etc.)
3. Como arrancar cada componente
4. Como testar
5. Estrutura do código

> 💡 Podes basear-te no README.md que já existe e atualizá-lo
> com as instruções reais do que fizeste.

---

# 🎉 PARABÉNS! CONCLUÍSTE O GUIÃO!

## O que aprendeste nestes 3 meses:

### Mês 1 — Fundamentos
- ✅ **Terminal/Linha de Comandos** — navegar, criar pastas, correr comandos
- ✅ **JavaScript** — variáveis, funções, arrays, objetos, async/await
- ✅ **TypeScript** — tipos, interfaces, classes, decoradores, módulos
- ✅ **Node.js e npm** — correr código, gerir pacotes
- ✅ **NestJS** — controllers, services, módulos, decoradores
- ✅ **Docker** — contentores, docker-compose
- ✅ **PostgreSQL** — base de dados relacional
- ✅ **TypeORM** — entidades, repositórios, CRUD

### Mês 2 — Backend Completo
- ✅ **Testes unitários** — Jest, mocks
- ✅ **Validação de dados** — class-validator, DTOs
- ✅ **CORS** — comunicação entre frontend e backend
- ✅ **Autenticação JWT** — registo, login, tokens, bcrypt
- ✅ **Guards** — proteger rotas
- ✅ **WebSockets** — Socket.io, comunicação em tempo real
- ✅ **HTML** — estrutura de páginas web
- ✅ **CSS** — estilos visuais

### Mês 3 — Frontend e Integração
- ✅ **Vue.js** — componentes, reatividade, router
- ✅ **Axios** — pedidos HTTP ao backend
- ✅ **Extensão de Chrome** — manifest, popup, background script, notificações
- ✅ **Integração** — ligar backend + frontend + extensão
- ✅ **Pesquisa e filtros** — endpoints avançados
- ✅ **Templates** — mensagens pré-definidas

## 📚 Recursos para Continuar a Aprender

- **TypeScript:** https://www.typescriptlang.org/docs/
- **NestJS:** https://docs.nestjs.com/
- **Vue.js:** https://vuejs.org/guide/introduction.html
- **TypeORM:** https://typeorm.io/
- **Socket.io:** https://socket.io/docs/v4/
- **Chrome Extensions:** https://developer.chrome.com/docs/extensions/
- **PostgreSQL:** https://www.postgresql.org/docs/

## 💪 Próximos Passos (Opcional)

Se quiseres continuar a melhorar o projeto:
1. Confirmação de leitura das mensagens
2. Dashboard com estatísticas
3. Envio para grupos dinâmicos
4. Variáveis de ambiente (.env) em vez de dados fixos no código
5. Deploy numa plataforma cloud (Railway, Render, etc.)
6. Mais testes unitários e de integração

---

> **Nota final:** Todo o código que já existia no projeto foi comentado
> (está entre `/* */`). Podes usá-lo como referência se ficares preso em
> algum passo, mas o ideal é escreveres tudo tu, passo a passo,
> para realmente aprenderes. Boa sorte! 🚀
