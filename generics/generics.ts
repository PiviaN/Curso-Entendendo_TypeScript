function echo(objeto: any) {
  return objeto;
}

console.log(echo("João"));
console.log(echo(27).length);
console.log(echo({ nome: "João", idade: 27 }));

// Usando Generics

function echoMelhorado<T>(objeto: T): T {
  // O nome do tipo é qualquer
  return objeto;
}

console.log(echoMelhorado<string>("João").length);
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado<object>({ nome: "João", idade: 27 }));

// Generics disponíveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push("5.5");
console.log(avaliacoes);

// Array
function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([1, 2, 3]);
imprimir<number>([1, 2, 3]);
imprimir<string>(["Ana", "Bia", "Carlos"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "Fulano", idade: 22 },
  { nome: "Ciclano", idade: 35 },
]);

type Aluno = { nome: string; idade: number };

imprimir<Aluno>([
  { nome: "Fulano", idade: 22 },
  { nome: "Ciclano", idade: 35 },
]);

// Tipo Genérico

type Echo = <T>(data: T) => T;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho<string>("Alguma coisa"));

// Class com Generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

// console.log(new OperacaoBinaria("Bom", "Dia").executar());
// console.log(new OperacaoBinaria(3, 7).executar());
// console.log(new OperacaoBinaria(3, "três").executar());

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

// console.log(new SomaBinaria(3, 4).executar());

// class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
//   getTime(data: Data): number {
//     let { dia, mes, ano } = data;
//     return new Date(`${mes}/${dia}/${ano}`).getTime();
//   }

//   executar(): string {
//     const t1 = this.getTime(this.operando1);
//     const t2 = this.getTime(this.operando2);
//     const diferenca = Math.abs(t1 - t2);
//     const dia = 1000 * 60 * 60 * 24;
//     return `${Math.ceil(diferenca / dia)} dia(s)`;
//   }
// }

// const d1 = new Data(1, 2, 2020);
// const d2 = new Data(5, 2, 2020);
// console.log(new DiferencaEntreDatas(d1, d2).executar());

// Desafio Classe Fila
// Atributo: fila (Array)
// Métodos: entrar, próximo, imprimir

class Fila<T extends number | string> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }

  entrar(elemento: T): void {
    this.fila.push(elemento);
  }

  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }

  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>("Gui", "Pedro", "José", "Jorge");

fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
