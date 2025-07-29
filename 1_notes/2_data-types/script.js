// Tipos de dados primitivos

// String - Conjunto de caracteres;
let name = 'Marcos';

// Number - Números inteiros ou com casa décimal;
let age = 30;

// Boolean - Verdadeiro ou falso;
let isOld = false;

// Undefined - Valor não atribuído;
let lastName;

// Null - Valor definido como "sem valor" (propositalmente).
let color = null;


// Tipos de dados de referência

// Array - Estrutura de dados para armazenar diversos valores em uma única variável
let cars = ["classic", "sandero"];
console.log(cars);

// Adicionando novos itens ao array
cars[2] = "HB20";
console.log(cars);

// Copiando os valores de um array
carsCopy = [...cars];
console.log(carsCopy);


// Object - Estrutura para armazenar dados em pares de chave e valor
let classic = {
    ano: 2011,
    cor: "Azul"
}
console.log(classic);

// Adicionando novos valores a um objeto
classic.marca = "Chevrolet";
classic["ar"] = true;
console.log(classic.marca);

// Copiando os valores de um objeto
let onix = {...classic};
console.log(`Onix: ${JSON.stringify(onix)}.`);