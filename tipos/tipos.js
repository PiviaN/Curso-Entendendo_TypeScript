"use strict";
let hobbies = ['1', 'SDSD', () => { console.log('aa'); }];
//tuplas
let endereco = ['sds', 99, 'bloco a'];
console.log(endereco);
//enums
var Cor;
//enums
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 4] = "Laranja";
    Cor[Cor["Amarelo"] = 100] = "Amarelo";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
// funções
let nome = 'pedro';
let minhaIdade = 20;
function retornaMeuNome() {
    return nome;
}
function digaOi() {
    console.log('Oi');
}
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4, 9));
const teste = function (a, b) {
    return false;
};
// tipo função
let calculo;
calculo = multiplicar;
console.log(calculo(2, 4));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
let funcionario2 = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// union types
let nota = 10;
nota = 20;
nota = '0';
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
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '90232193',
    tel2: null
};
console.log(contato1.nome);
let podeSerNulo = null; // any
podeSerNulo = 32;
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
const caracteristicas = ['Motor', 2018];
const [motor, ano] = caracteristicas;
const item = {
    nome: 'SSD 480GB',
    preco: 200
};
// const nomeItem = item.nome;
// const preco = item.preco;
const { nome: n, preco } = item;
//# sourceMappingURL=tipos.js.map