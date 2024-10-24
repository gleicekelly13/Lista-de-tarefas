//Seleção dos elementos que serão manipulados
const input = document.querySelector('#input-texto');
const lista = document.querySelector('ul'); //Também seleciona os checkBoxes das tarefas
const checkBoxPrincipal = document.querySelector('#check'); //* Seleciona o checkBox principal 


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

//Eventos
input.addEventListener('keyup', handleKeyUp); //Adição do evento quando o usuário soltar a tecla

// Adiciona um evento de clique ao checkbox principal
checkBoxPrincipal.addEventListener('change', function() { //** 

    // Pega todos os checkboxes dentro da lista de tarefas
    const checkBoxesTarefas = lista.querySelectorAll('input[type="checkBox"]');

    // Para cada checkbox de tarefa, marca/desmarca conforme o checkbox principal
    checkBoxesTarefas.forEach(function(checkBoxTarefa) { //*** 
        checkBoxTarefa.checked = checkBoxPrincipal.checked;
    });
});
