//Seleção dos elementos que serão manipulados
const input = document.querySelector('input');
const lista = document.querySelector('ul');


function handleKeyUp(e) { //Função que lida com o evento de soltar uma tecla
    if(e.key === 'Enter') { //Verifica se o usuário digitou a tecla 'Enter'
        const newLi = document.createElement('li'); //Cria um novo elemento, neste caso, um novo item da lista, e armazena em newLi
        newLi.innerHTML = input.value;  //Coloca o texto digitado no input dentro do novo elemento(newLi)
        lista.appendChild(newLi); //Adiciona o elemento novo à tela, dentro da lista

        input.value = ''; //Limpa o que foi digitado no campo de texto
    }
}

//Evento
input.addEventListener('keyup', handleKeyUp); //Adição do evento quando o usuário soltar a tecla
