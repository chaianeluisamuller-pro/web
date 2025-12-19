// Input ///

// Criar variavel que irá usar //

//let username;
//Mostra uma tela estilo window alert para colocar o input//
// Input do usuário //
// username = window.prompt("What's your username? ");

// Irá fazer print das informações
//console.log(username);
//console.log(`Seu usuário é ${username}`);

// Declara a variável que irá usar //
let username;
// Cria uma função quando clicar no botão //
document.getElementById("Mysubmit").onclick = function (){
    // Pega o input e mostra o valor dele //
    username = document.getElementById("Myinput").value;
    console.log(username);
    document.getElementById("resultado").textContent = `O seu usuário é ${username}`;

}