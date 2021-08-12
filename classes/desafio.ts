// Exercício 1 - Classe
class Moto {
    public velocidade: number = 0;

    constructor(public nome: string) {

    }

    buzinar(): void {
        console.log('Tooot');
    }

    acelerar(delta: number): void {
        this.velocidade += delta;
    }
}

const moto: Moto = new Moto('Ducati')
 
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança

abstract class objeto2D {
    constructor(public base: number = 0, public altura: number = 0) {}

    abstract area():number
}

class retangulo extends objeto2D {
    constructor(base: number, altura: number) {
        super(base, altura)
    }
    area():number {
        return this.base * this.altura
    }
}

let calculoBaseAltura: objeto2D = new retangulo(5, 4);

console.log(`Cálculo base altura: ${calculoBaseAltura.area()}`);
 
// Exercício 3 - Getters & Setters

class Estagiario {
    public _primeiroNome: string = ''

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(valor: string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario;
 
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)