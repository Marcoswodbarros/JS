//  Exercício 1: Cálculo do Faturamento Semanal
//  Você é o gerente de uma lanchonete e deseja calcular o valor total das vendas de hambúrgueres em uma
//  semana. Cada hambúrguer custa R$10, e você registra o número de hambúrgueres vendidos a cada dia da
//  semana. Crie um programa que calcule o valor total das vendas em uma semana.

const vendasPorDia = [2, 6, 4, 5, 6, 1, 2];
const valorHambuguer = 10;

function calcularValorDeVendas(vendasPorDia, valorHambuguer) {
    let totalVendas = 0;

    for (let i = 0; i < vendasPorDia.length; i++) {
        totalVendas += vendasPorDia[i] * valorHambuguer;
    }

    return totalVendas;
}

console.log(`O valor faturado na semana foi de: R$ ${calcularValorDeVendas(vendasPorDia, valorHambuguer).toFixed(2)}.`);