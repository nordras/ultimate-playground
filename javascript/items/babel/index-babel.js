// Exercicios basicos de Babel (ES6+). Transpile este arquivo com Babel.

// 1) let/const e template literals
const nome = "Ana";
let idade = 23;
const resumo = `Nome: ${nome}, Idade: ${idade}`;
console.log(resumo);

// 2) arrow functions
const soma = (a, b) => a + b;
console.log("Soma:", soma(2, 3));

// 3) parametros padrao
const saudacao = (pessoa = "visitante") => `Ola, ${pessoa}!`;
console.log(saudacao());
console.log(saudacao("Carlos"));

// 4) destructuring de objetos
const usuario = { id: 1, email: "ana@example.com", ativo: true };
const { id, email } = usuario;
console.log("ID:", id, "Email:", email);

// 5) destructuring de arrays
const numeros = [10, 20, 30, 40];
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro, segundo, resto);

// 6) spread em objetos e arrays
const extras = { admin: false, plano: "free" };
const perfil = { ...usuario, ...extras };
const maisNumeros = [...numeros, 50, 60];
console.log(perfil, maisNumeros);

// 7) classes e heranca
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    return `${this.nome} faz um som.`;
  }
}

class Cachorro extends Animal {
  falar() {
    return `${this.nome} late.`;
  }
}

const rex = new Cachorro("Rex");
console.log(rex.falar());

// 8) async/await
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function executar() {
  await esperar(200);
  return "Pronto!";
}

executar().then((msg) => console.log(msg));

// 9) import/export (comentado para evitar erro sem bundler)
// export const PI = 3.14159;
// import { PI } from "./modulo";

// 10) optional chaining e nullish coalescing
const config = { api: { timeout: 3000 } };
const timeout = config.api?.timeout ?? 1000;
console.log("Timeout:", timeout);
