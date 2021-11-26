function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createDaysOfMonth(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDaysList = document.querySelector('#days');
    console.log(monthDaysList);

    for(let i = 0; i < dezDaysList.length; i += 1) {
      const numberDay = dezDaysList[i];
      const numberList = document.createElement('li');
      numberList.className = 'day';
      numberList.innerText = numberDay;

      if(numberDay == 24 || numberDay == 25 ||numberDay == 31) {
        numberList.classList.add('holiday');
      }
      if(numberDay == 4 || numberDay == 11 ||numberDay == 18|| numberDay == 25 ) {
        numberList.classList.add('friday');
      }

      monthDaysList.appendChild(numberList);
    }
  }
  createDaysOfMonth();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
//button: https://pt.stackoverflow.com/questions/217656/criar-botao-usando-document-createelement
function feriadosDezembro(feriados) {
  let buttonFeriado = document.createElement('button');
  buttonFeriado.id = 'btn-holiday';
  let textButton = document.createTextNode('Feriados');
  buttonFeriado.appendChild(textButton);
  document.body.getElementsByClassName('buttons-container')[0].appendChild(buttonFeriado);
}
feriadosDezembro();
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
function changeHoliday() {
  let buttonHoliday = document.getElementById('btn-holiday');
  buttonHoliday.addEventListener('click', changeColorHoliday);
}

changeHoliday();
let isHoliday = true;
function changeColorHoliday() {
  let holiday = document.getElementsByClassName('holiday');
  
  if (isHoliday) {
    for (let i = 0; i < holiday.length; i += 1) {
      holiday[i].style.backgroundColor = '#ee1cff';
    }
    isHoliday = false;
  }
  
  else {
    for (let i = 0; i < holiday.length; i += 1) {
      holiday[i].style.backgroundColor = '#eeeeee';
    }
    isHoliday = true;
    
  }
  
}

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
let isFriday = true;

function isFridayDay (SextaFeira) {
  let buttonFriday = document.createElement('button');
  let textFriday = document.createTextNode('Friday');
  buttonFriday.appendChild(textFriday);
  buttonFriday.id = 'btn-friday';
  document.body.getElementsByClassName('buttons-container')[0].appendChild(buttonFriday);
  //Fiz tudo junto para testar o onclick.
  buttonFriday.onclick = function()
  {
    if(isFriday) {
     let fridayDay = document.getElementsByClassName('friday');
     for (let i = 0; i < fridayDay.length; i += 1) {
       fridayDay[i].innerText = "Friday!"
       fridayDay[i].style.color = "red";
     }
     isFriday = false;
    }
    else {
      let arrayFriday = [4, 11, 18, 25];
      let fridayDay = document.getElementsByClassName('friday');
     for (let i = 0; i < fridayDay.length; i += 1) {
       fridayDay[i].innerText = arrayFriday[i];
       fridayDay[i].style.color = 'gray';
     }
     isFriday = true;
    }
  }
}
isFridayDay();

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
//ACIMA JUNTO COM A FUNÇÂO PRINCIPAL.

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// Dica - Propriedade: event.target .
function efeitoZoom () {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
 // daySelect.style.transform = 'translate(50, 40)';
}
efeitoZoom();
function tirarZoom() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
}
tirarZoom();

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function addPersonalTask(nameTask) {
  let boxTask = document.createElement('span');
  boxTask.innerText = nameTask;
  let encaixeTask = document.getElementsByClassName('my-tasks')[0];
  encaixeTask.appendChild(boxTask);
}
addPersonalTask('cozinhar');

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addColorInTask(color) {
  let boxColor = document.createElement('div');
  boxColor.classList.add('task');
  boxColor.style.backgroundColor = color;
  let insertBoxColor = document.querySelector('.my-tasks');
  insertBoxColor.appendChild(boxColor);
}
addColorInTask('purple');

// Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
// Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function eventForTask() {
  let divColorTask = document.querySelector('.task');
  divColorTask.addEventListener('click', function(event) {
    event.target.classList.toggle('selected');
  })
}
eventForTask();

// Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
function addEventMonthly() {
  let days = document.querySelector('#days');
  let taskSelected = document.getElementsByClassName('selected');
  let colorTask = document.querySelector('.task').style.backgroundColor;

  days.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if (taskSelected.length > 0 && eventTargetColor != colorTask) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    }
    else if (eventTargetColor === colorTask && taskSelected != null) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}
addEventMonthly();

// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
function setCompromisso() {
  let compromisso = document.querySelector('#task-input');
  let buttonToSet = document.querySelector('#btn-add');
  let insertTask = document.querySelector('.task-list');

  buttonToSet.addEventListener('click', function() {
    if (compromisso.value.length > 0) {
      let item = document.createElement('li');
      item.innerText = compromisso.value;
      insertTask.appendChild(item);
      compromisso.value = '';
    }
    else {
      alert("Erro: digite um compromisso antes de tentar adicionar.")
    }
  })
  compromisso.addEventListener('keyup', function(event) {
    if (event.key == 'Enter' && compromisso.value.length > 0) {
      let item = document.createElement('li');
      item.innerText = compromisso.value;
      insertTask.appendChild(item);
      compromisso.value = '';
    }
  })
}
setCompromisso();