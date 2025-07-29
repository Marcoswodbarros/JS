//  Exercício 2: Listagem do Cardápio Digital
//  Você deseja criar um cardápio digital para sua lanchonete. Crie um programa que liste os itens do cardápio
//  juntamente com seus preços. Utilize um loop for para percorrer o cardápio e exibi-lo.

const itens = [
    { nome: 'Pizza de Calabresa', preco: 45 },
    { nome: 'Pizza de Frango', preco: 35 },
    { nome: 'Pizza de Queijo', preco: 40 }
]


function exibirCardapio(itens) {

    for (let i = 0; i < itens.length; i++) {
        console.log(`- ${itens[i].nome} = R$ ${itens[i].preco}.`);
    }
}

exibirCardapio(itens);
