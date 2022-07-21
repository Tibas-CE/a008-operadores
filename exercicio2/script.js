let numero;
numero = prompt("Digite um número");
let numero1;
numero1 = prompt("Digite outro número");
let divisivel = numero % numero1;
let divisivel1 = numero1 % numero;

console.log("O primeiro numero é maior que segundo?", numero > numero1);
console.log("O primeiro numero é igual ao segundo?", numero === numero1);
console.log("O primeiro numero é divisível pelo segundo?", divisivel===0);
console.log("O segundo numero é divisível pelo primeiro?", divisivel1===0);