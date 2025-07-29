//  Exercício 1: Verificação de Desconto
//  Crie um programa verificaDesconto que verifique se um cliente tem direito a um desconto. Se o valor da
//  compra for maior ou igual a R$ 100, o cliente recebe um desconto de 10%. Caso contrário, nenhum desconto
//  é aplicado. O programa deve imprimir mensagens que retornem o se o cliente possui ou não o direito de
//  retorno e o valor da compra no console.


function verificaDesconto(valorCompra) {

    if (valorCompra >= 100) {
        let desconto = (10 / 100) * valorCompra;
        let valorFinal = valorCompra - desconto;

        console.log(`Devido ao desconto de 10%, o valor da compra foi de R$ ${valorFinal.toFixed(2)}.`);

    } else {
        console.log(`Infelizmente você não teve direito ao desconto de 10%.`);
    }
}

verificaDesconto(10);