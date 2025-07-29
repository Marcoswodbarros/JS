//  Exercício 6: Semáforo de Trânsito
//  Crie uma função mensagemSemaforo que recebe uma cor de semáforo como argumento (por exemplo,
//  "vermelho", "amarelo" ou "verde") e retorna uma mensagem indicando a ação a ser tomada com base na cor
//  do semáforo. Utilize o operador ternário para determinar a mensagem.


function mensagemSemaforo(cor) {
    const mensagem = 
    cor === 'vermelho'
    ? 'Pare o veículo.'
    : cor === 'amarelo'
    ? 'Reduza a velocidade.'
    : cor === 'verde'
    ? 'Pode prosseguir.'
    : 'Cor desconhecida. Cuidado ao prosseguir.'

    return mensagem;
}

console.log(mensagemSemaforo('blue'));