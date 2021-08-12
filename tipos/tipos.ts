let hobbies: any[] = ['1', 'SDSD', () => { console.log('aa') }]

//tuplas

let endereco: [string, number, string] = ['sds', 99, 'bloco a']
console.log(endereco)

//enums

enum Cor {
    Cinza,
    Verde = 100,
    Azul = 2,
    Laranja = 4,
    Amarelo = 100
}

let minhaCor: Cor = Cor.Verde

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }

// funções

let nome: string = 'pedro';
let minhaIdade: number = 20;

function retornaMeuNome(): string {
    return nome
}

function digaOi(): void {
    console.log('Oi')
}

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(4, 9));

const teste = function (a: number, b: number): boolean {
    return false;
}

// tipo função

let calculo: (numeroA: number, numeroB: number) => number 

calculo = multiplicar
console.log(calculo(2, 4))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

usuario = {
    idade: 31,
    nome: 'Maria'
}

console.log(usuario)

// Desafio
/*
    Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe hora e retorna uma string
        -> Ponto normal (<= 8)
        -> Fora do horário (> 8)
*/

type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// union types

let nota: number | string = 10;

nota = 20;
nota = '0'

// never
// function falha(msg: string): never {
//     throw new Error(msg)
// }

// const produto = {
//     nome: 'Sabão',
//     preco: -1,
//     validarProduto() {
//         if(!this.nome || this.nome.trim().length == 0) {
//             falha('Precisa ter um nome')
//         }
//         if (this.preco <= 0) {
//             falha('Preco inválido')
//         }
//     }
// }

// produto.validarProduto()

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '90232193',
    tel2: null
}

console.log(contato1.nome)

let podeSerNulo = null; // any
podeSerNulo = 32;


//Desafio

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
};

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)

const caracteristicas = ['Motor', 2018]

const [motor, ano] = caracteristicas

const item = {
    nome: 'SSD 480GB',
    preco: 200
}

// const nomeItem = item.nome;
// const preco = item.preco;

const { nome: n, preco } = item;