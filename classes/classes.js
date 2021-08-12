"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
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
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.dia = 4;
const casamentoEsperto = new DataEsperta();
casamento.ano = 2017;
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    precoComDesconto() {
        let valorDesconto = this.preco * this.desconto;
        console.log(`O valor do desconto é ${valorDesconto.toFixed(2)}`);
        let valorModificado = this.preco - valorDesconto;
        if (this.desconto === 0) {
            return `${this.nome} custa R$${this.preco} (sem desconto disponível) `;
        }
        else {
            return this.resumo(valorModificado, this.desconto);
        }
    }
    resumo(valorModificado, descontoAplicado) {
        let descontoConvertido = descontoAplicado * 100;
        return `${this.nome} custa R$${valorModificado.toFixed(2)} com o desconto de ${descontoConvertido.toFixed(2)}% aplicado`;
    }
}
const produto = new Produto("Shampoo", 15, 0.4232452323);
console.log(produto.precoComDesconto());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
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
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(10);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
/* --------------- Getters & Setters: Validação associada à atributos --------------- */
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
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
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
/* ------------------------------------ Abstração ----------------------------------- */
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((acc, actual) => acc + actual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((acc, actual) => acc * actual);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
/* -------------------------------- Singleton ------------------------------------ */
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log(Unico.getInstance().agora());
/* --------------------------- Atributos somente leitura ---------------------------- */
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHelice);
//# sourceMappingURL=classes.js.map