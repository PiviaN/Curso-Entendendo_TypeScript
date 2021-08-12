class Data {
  dia: number;
  public mes: number;
  ano: number;

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;

const casamento = new Data();
casamento.ano = 2017;

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4;

const casamentoEsperto = new DataEsperta();
casamento.ano = 2017;

class Produto {
  constructor(
    public nome: string,
    public preco: number,
    public desconto: number = 0
  ) {}

  public precoComDesconto(): any {
    let valorDesconto: number = this.preco * this.desconto;
    console.log(`O valor do desconto é ${valorDesconto.toFixed(2)}`);
    let valorModificado: number = this.preco - valorDesconto;

    if (this.desconto === 0) {
      return `${this.nome} custa R$${this.preco} (sem desconto disponível) `;
    } else {
      return this.resumo(valorModificado, this.desconto);
    }
  }

  private resumo(valorModificado: number, descontoAplicado: number): string {
    let descontoConvertido: number = descontoAplicado * 100;

    return `${this.nome} custa R$${valorModificado.toFixed(
      2
    )} com o desconto de ${descontoConvertido.toFixed(2)}% aplicado`;
  }
}

const produto = new Produto("Shampoo", 15, 0.4232452323);
console.log(produto.precoComDesconto());

class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade: number = this.velocidadeAtual + delta;
    const velocidadeValida: boolean =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Ford", "Ka", 185);

Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(25)
  .fill(0)
  .forEach(() => carro1.frear());
console.log(carro1.frear());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public acelerar(): number {
    return this.alterarVelocidade(10);
  }

  public frear(): number {
    return this.alterarVelocidade(-15);
  }
}

/* --------------- Getters & Setters: Validação associada à atributos --------------- */

class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) {
      this._idade = valor;
    }
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);

/* ----------------------- Atributos e métodos estáticos ---------------------------- */

class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return Matematica.PI * raio * raio;
  }
}

console.log(Matematica.areaCirc(4));

/* ------------------------------------ Abstração ----------------------------------- */

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((acc, actual) => acc + actual);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((acc, actual) => acc * actual);
  }
}

let c1: Calculo = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

/* -------------------------------- Singleton ------------------------------------ */

class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance() {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

console.log(Unico.getInstance().agora());

/* --------------------------- Atributos somente leitura ---------------------------- */

class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHelice);
