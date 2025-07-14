// Functions

// function nomeDaFuncao (parametro) {
//     acao a ser executada;
// }
// nomeDaFuncao(argumento);


// Função simples - bloco de código usado para executar ações.
function mostrarNome(nome) {
    console.log(nome)
}
mostrarNome("Marcos");


// Functions com return - usada para encerrar a execução da função e retornar um valor para quem a chamou.
function somar(a, b) {
    return a + b;
}
console.log(somar(10, 5));


// Funções de expressão - são funções armazenadas dentro de uma variável.
let subtracao = function subtrair(a, b) {
    return a - b;
}
console.log(subtracao(5, 3));


// Funções de alta ordem - são funções que recebem uma ou mais funções como argumento ou resultado
// Recebendo uma função como argumento
function aplicarOperacao(numero, funcao) {
    return funcao(numero);
}

function dividir(numero) {
    return numero / 2;
}
let mostrar = (aplicarOperacao(8, dividir));
console.log(mostrar);


// Recebendo uma função como resultado
function criarIncrementador(incremento) {
    // Função de Alta Ordem
    return function (numero) {
        return numero + incremento;
    };
}
const incrementoPor2 = criarIncrementador(2);
console.log(incrementoPor2(5));


// Funções com argumento padrão
function saudacao(cumprimento, nome = "Companheiro") {
    console.log(`Olá, ${nome}. ${cumprimento}?`);
}
saudacao("Tudo bem");


// Escopos
// Escopo global - acessível em todo o script
// Escopo local (função) - acessível apenas dentro da função onde foi a variável foi declarada
// Escopo de bloco - acessível apenas dentro do bloco onde a variável foi declarada
