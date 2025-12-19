// INPUT DO USUÁRIO//


let usuario;

document.getElementById('Mybutton').onclick = function(){
    window.alert('Você clicou no botão!')
usuario = document.getElementById('Myinput').value;

document.getElementById('h1').textContent = (`Seu usuário é ${usuario}`)
}

//AQUI IRÁ calcular a idade

// INPUT DO USUÁRIO//


let idade;

document.getElementById('Mybutton2').onclick = function(){
    window.alert('Você clicou no botão!')
idade = document.getElementById('Myinput2').value - 2025;
idade = idade * -1;
document.getElementById('h2').textContent = (`Sua idade é ${idade} anos`)
}

//AQUI IRÁ calcular a idade