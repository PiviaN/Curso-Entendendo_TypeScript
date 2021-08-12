function logarClasse(construtor: Construtor) {
  console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + "" + obj.b);
  };
}

// @logarClasse
// @decorator({ a: "Teste", b: 123 })
@logarClasseSe(true)
class Eletrodomestico {
  constructor() {
    console.log("novo...");
  }
}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
    return class extends construtor {
        constructor(...args? any[]) {
            console.log('Antes...')
            super(...args)
        }
    }
}
