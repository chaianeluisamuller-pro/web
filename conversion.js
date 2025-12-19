//Conversion//
// Conversão//
// Muda o tipo de dado para outro tipo //

//strings,numeros,booleanos//

let idade = window.prompt('Digite sua idade: ');
//Aqui converte o input que geralmente é uma string para um numero //
// Para conseguir fazer calculo//
idade = Number(idade);
idade +=2;
console.log(`Você irá ter ${idade} anos daqui a 2 anos`);
console.log(`Mas,agora você tem ${idade-2} anos`);


let ano = window.prompt('Em que ano você está?');
ano = Number(ano);
ano = ano -= idade-2;
console.log(`Você nasceu em ${ano}`);
console.log(typeof ano)

//Se não mudar para numero irá acontecer que irá adicionar no final //

let numero = window.prompt('Digite um numéro: ')
// Irá adicionar 2 no final do numero e não somar ele //
// Por que ele é uma string //
// Lembrando que input sempre retorna string //
// Por isso que tem que converter //
numero += 2;
console.log(numero,typeof numero)

x =  numero;
y = 10;
z = true;

// Aqui irá converta o x, uma string, em um numero //
// Irá aparecer NaN Porquê não é um numero //
x = Number(x);
console.log(x,typeof x);

// Já aqui vai mostrar que y é um numero, porque na verdade, ele realmente é //
console.log(y,typeof y);

// Aqui mostra um valor booleano //
console.log(z,typeof z);

// E se converter o booleano para numero? //
let w = true;
w = Number(w);
console.log(w, typeof w);

// Já que é true irá conveter no numero 1 //
// Mesmo que não colocamos nenhum numero //
// Se convertece para 0 seria o falso //

let f = false;
f = Number(f);
console.log(f,typeof f);

// Aqui irá mostrar o valor 0, por que é falso //

// se não colocar um valor na variavel irá retorna como 0,undefined ou falso //