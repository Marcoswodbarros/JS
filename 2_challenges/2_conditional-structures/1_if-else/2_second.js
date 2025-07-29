// Exercício 2: Verificação de Produto em Estoque
//  Escreva um programa verificarEstoque que verifica se um produto está em estoque com base na quantidade
//  disponível. Se a quantidade disponível for maior que zero, exiba "Produto disponível", caso contrário, exiba
//  "Produto esgotado" no console.

let produto = 0;

function verificarEstoque (produto) {
    if (produto > 0) {
        console.log('Produto disponível.');

    } else {
        console.log('Produto esgotado.');
    }
}

verificarEstoque(produto);