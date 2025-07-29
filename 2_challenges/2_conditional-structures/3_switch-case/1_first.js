// Exercício 7: Prioridade no Trânsito
// Crie uma função chamada coresDoSemaforo que recebe uma cor de semáforo como argumento (por
// exemplo, "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando se é seguro passar ou se é
// necessário parar.

let cor = 'vermelho';

function coresDoSemaforo(cor) {

    switch (cor) {
        case 'vermelho':
            console.log(`Semáforo em ${cor}, pare o veículo.`);
            break;

        case 'amarelo':
            console.log(`Semáforo em ${cor}, reduza a velocidade.`);
            break;

        case 'verde':
            console.log(`Semáforo em ${cor}, pode prosseguir.`);
            break;

        default:
            console.log(`Cor não identificada. Cuidado.`);
    }
}

coresDoSemaforo(cor);