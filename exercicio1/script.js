let pergunta = prompt("Digite um número par");
let par = pergunta%2;
console.log(par);
console.log(typeof par);

/*o valor sempre retorna a 0 pois não existe resto da divisão de números
pares por pares*/
/*quando o úsuario coloca um número impor a resposta ira variar de acordo
com a sobra da divisão de número impar por 2, exemplo 5 % 2 = 1*/

//outras maneiras
/*let par = Number(prompt("insira um número par"));
console.log(par);
teste = Number(par%2);
console.log(teste);
console.log("O resto da divisão de", par, "por 2 é", teste);
console.log(typeof par);*/
/*let numPar = prompt("digite um numero par")
console.log(Number(par%2));*/