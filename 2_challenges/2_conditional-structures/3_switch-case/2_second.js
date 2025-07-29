//  Crie uma função verificarPlaca que recebe o último dígito da placa de um veículo como argumento (um
//  número de 0 a 9) e retorna uma mensagem indicando o dia de rodízio em São Paulo, com base no último
//  dígito da placa.

let digito = 10;

function verificarPlaca(digito) {
    switch (digito) {
        case 1:
        case 2:
            console.log('O dia da restrição é: Segunda-feira');
            break;

        case 3:
        case 4:
            console.log('O dia da restrição é: Terça-feira');
            break;

        case 5: 
        case 6:
            console.log('O dia da restrição é: Quarta-feira');
            break;

        case 7: 
        case 8:
            console.log('O dia da restrição é: Quinta-feira');
            break;

        case 9: 
        case 0:
            console.log('O dia da restrição é: Sexta-feira');
            break;

        default:
            console.log('Placa não identificada.');
    }
}

verificarPlaca(digito);