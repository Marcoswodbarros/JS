// Conditional structures

// if else
let ano = 2025;

if (ano > 2025) {
    console.log(`A variável possui ano maior que 2025.`);

} else if (ano == 2025) {
    console.log(`A variável possui ano igual a 2025.`);

} else {
    console.log(`A variável possui ano menor que 2025.`);
}


// switch case
let nome = 'Marcos';

switch (nome) {
    case 'Marcos':
        console.log('Bem-vindo, Marcos');
        break;

    case 'Neto':
        console.log('Bem-vindo, Neto.');
        break;

    default:
        console.log('Bem-vindo, usuário.');
}