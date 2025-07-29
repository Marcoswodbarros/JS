/*  Exercício 4: Entrega de Pedidos Pendentes
 Você é o entregador de uma lanchonete e precisa entregar pedidos até que não haja mais pedidos
 pendentes. Crie um programa que simule a entrega de pedidos até que não haja mais pedidos na lista. */


const pedidos = ['pizza', 'batata frita', 'hamburguer', 'pão de queijo'];
let contador = 0;

function controlarPedidos(pedidos) {

    while (contador < pedidos.length) {
        console.log(`Foi realizada a venda de: 1 ${pedidos[contador]}.`);
        contador++;
    }

    console.log(`Todos os itens foram vendidos.`);
}

controlarPedidos(pedidos);