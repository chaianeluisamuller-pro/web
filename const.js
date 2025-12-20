// Const //
// Variável que não pode ser mudada//
// Se mudada pode interferir com o sistema //

const PI = 13.14159;
// Nome da constante em maiúsculo por ser constante //
let raio;
let circunferencia;
// PI = 40.428
// Se "mudar" irá ocorrer um erro e não irá deixar mudar(Uncaught Error) //
//raio = window.prompt('Insira o numéro do raio:') //


// console.log(circunferencia,typeof circunferencia); //

document.getElementById("myButton").onclick = function(){
raio = document.getElementById("myText").value;
raio = Number(raio);
circunferencia = 2 * PI * raio;
document.getElementById("myH3").textContent = (`O resultado é ${circunferencia}`);
}