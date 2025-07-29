// Exercício 5: Verificação de Velocidade
//  Crie uma função chamada verificarVelocidade que recebe a velocidade de um veículo como argumento e
//  retorna true se o veículo estiver dentro do limite de velocidade (limite igual ou inferior a 80 km/h) e false caso
//  contrário, utilizando o operador ternário.


let velocidade = 81;

function verificarVelocidade(velocidade) {
    let speed = velocidade <= 80 ? true : false;

    return speed;
} 

console.log(verificarVelocidade(velocidade));