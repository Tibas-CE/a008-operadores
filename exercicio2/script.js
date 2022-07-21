let numero;
numero = Number (prompt("Digite um número"));
let numero1;
numero1 = Number (prompt("Digite outro número"));
let divisivel = numero % numero1;
let divisivel1 = numero1 % numero;

console.log("O primeiro numero é maior que segundo?", numero > numero1);
console.log("O primeiro numero é igual ao segundo?", numero === numero1);
console.log("O primeiro numero é divisível pelo segundo?", divisivel===0);
console.log("O segundo numero é divisível pelo primeiro?", divisivel1===0);

console.log(typeof numero);
console.log(typeof numero1);
/*outras maneiras de dividendo; isso elimina a criação de mais duas variáveis
console.log("O primeiro numero é divisível pelo segundo?", numero%numero1===0);
console.log("O segundo numero é divisível pelo primeiro?", numero1%numero===0);*/