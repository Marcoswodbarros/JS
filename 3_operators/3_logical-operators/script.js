// Logical Operators

// Variables eg.
let name = 'Marcos';
let age = 30;
let raining = true;

// Se ambas informações forem verdadeiras - &&
if (name == 'Marcos' && age == 30) {
    console.log('&& == True');

} else {
    console.log('&& == False');
}

// Se, ao menos, uma informação for verdadeira - ||
if (name == 'Marcos' || age == 30) {
    console.log('|| == True.');

} else {
    console.log('|| == False.');
}

// Inverte o valor lógico - !
if (raining) {
    console.log(`Changing value: True to ${!raining}.`);
}

