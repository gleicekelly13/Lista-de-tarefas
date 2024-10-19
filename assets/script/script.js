//Seleção dos elementos que serão manipulados
const input = document.querySelector('input');
const lista = document.querySelector('ul');


function handleKeyUp(e) { //Função que lida com o evento de soltar uma tecla
    if(e.key === 'Enter') { //Verifica se o usuário digitou a tecla 'Enter'
        const newLi = document.createElement('li'); //Cria um novo elemento, neste caso, um novo item da lista, e armazena em newLi

        const checkbox = document.createElement('input'); //Cria o checkbox
        checkbox.type = 'checkbox';

        newLi.appendChild(checkbox); //Adiciona o checkbox ao item da lista

        const texto_tarefa = document.createElement('span'); //Cria um elemento <span> para o texto da tarefa
        texto_tarefa.innerHTML = input.value;

        newLi.appendChild(texto_tarefa); //Adiciona o texto da tarefa ao item da lista
        lista.appendChild(newLi); //Adiciona o item à lista

        input.value = ''; //Limpa o que foi digitado no campo de texto 
    }
}

//Evento
input.addEventListener('keyup', handleKeyUp); //Adição do evento quando o usuário soltar a tecla
