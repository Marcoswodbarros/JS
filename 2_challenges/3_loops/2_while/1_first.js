/*  Exercício 3: Contagem de Dinheiro no Caixa
 Você é o caixa de uma lanchonete e precisa contar o dinheiro recebido até que a última venda do dia seja
 feita. Crie um programa que simule a contagem do dinheiro recebido a cada venda até o fechamento da
 lanchonete. */

const vendas = [15, 20, 10, 50, 15];

function contarDinheiro(vendas) {
    let contador = 0;
    let valor = 0;

    while (contador < vendas.length) {
        valor += vendas[contador];
        contador++;
    }

    console.log(`O valor total recebido foi de R$ ${valor.toFixed(2)}.`);
}

contarDinheiro(vendas);