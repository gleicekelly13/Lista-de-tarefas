//Seleção dos elementos que serão manipulados
const input = document.querySelector('#input-texto');
const lista = document.querySelector('ul'); //Também seleciona os checkBoxes das tarefas
const checkBoxPrincipal = document.querySelector('#check'); //* Seleciona o checkBox principal 


function handleKeyUp(e) { //Função que lida com o evento de soltar uma tecla
    if(e.key === 'Enter' && input.value.trim() !== '') { //Verifica se o usuário digitou a tecla 'Enter' e se há texto digitado
        const newLi = document.createElement('li'); //Cria um novo elemento, neste caso, um novo item da lista, e armazena em newLi

        const checkbox = document.createElement('input'); //Cria o checkbox
        checkbox.type = 'checkbox';

        newLi.appendChild(checkbox); //Adiciona o checkbox ao item da lista

        checkbox.addEventListener('change', function () {  //Evento de alteração no checkbox
            newLi.classList.toggle('concluida', checkbox.checked);  // Adiciona ou remove a classe 'concluida' no <li>
        })

        const texto_tarefa = document.createTextNode(input.value); //Cria o texto da tarefa
        texto_tarefa.innerHTML = input.value;

        newLi.appendChild(checkbox);  // Adiciona o checkbox ao <li>
        newLi.appendChild(texto_tarefa); //Adiciona o texto da tarefa ao item da lista <li>
        lista.appendChild(newLi); //Adiciona o item<li> à lista

        input.value = ''; //Limpa o que foi digitado no campo de texto 
    }
}

//Eventos
input.addEventListener('keyup', handleKeyUp); //Adição do evento quando o usuário soltar a tecla

// Adiciona um evento de mudança(change) ao checkbox principal para marcar/desmarcar todas as tarefas
checkBoxPrincipal.addEventListener('change', function() { //** 

    // Seleciona todos os itens de tarefa dentro da lista de tarefas
    const allTarefas = document.querySelectorAll('.lista-tarefa li');
    

    // Para cada item de tarefa, sincroniza o checkbox e marca/desmarca conforme o checkbox principal
    allTarefas.forEach(tarefa => { //*** 
        const checkBoxTarefa = tarefa.querySelector('input[type="checkbox"]');
        checkBoxTarefa.checked = checkBoxPrincipal.checked;  // Marca/desmarca o checkbox da tarefa
        tarefa.classList.toggle('concluida', checkBoxPrincipal.checked);  // Aplica ou remove a classe 'concluida'
    });
}); 
