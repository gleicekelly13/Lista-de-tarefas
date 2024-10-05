const input = document.querySelector('input');
const lista = document.querySelector('ul');


function handleKeyUp(e) {
    if(e.key === 'Enter') {
        lista.innerHTML += '<li>'+ input.value + '</li'; //Pega o conteúdo de lista interno e adiciona o valor do input
    }
}

input.addEventListener('keyup', handleKeyUp);
console.log(input.value)