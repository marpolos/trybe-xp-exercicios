const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


// let elementLi = document.querySelectorAll('li')[1];
// elementLi.addEventListener('click', newClassTech);

// function newClassTech (event1) {
//     elementLi.classList.add('tech');
//     document.querySelectorAll('li')[0].className = '';
//     document.querySelectorAll('li')[2].className = '';
// }

// let elementLi0 = document.querySelectorAll('li')[0];
// elementLi0.addEventListener('click', newClassTech0);

// function newClassTech0 (event0) {
//     elementLi0.classList.add('tech');
//     document.querySelectorAll('li')[1].className = '';
//     document.querySelectorAll('li')[2].className = '';
// }

// let elementLi2 = document.querySelectorAll('li')[2];
// elementLi2.addEventListener('click', newClassTech2);

// function newClassTech2 (event2) {
//     elementLi2.classList.add('tech');
//     document.querySelectorAll('li')[0].className = '';
//     document.querySelectorAll('li')[1].className = '';
// }

//console.log(document.querySelectorAll('li'));
firstLi.addEventListener('click', eleitoParaMudar);
secondLi.addEventListener('click', eleitoParaMudar);
thirdLi.addEventListener('click', eleitoParaMudar);

function eleitoParaMudar(event){
  zerar()
    event.target.className = 'tech';
}
function zerar() {
  firstLi.className = '';
  secondLi.className = '';
  thirdLi.className = '';

}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keydown', mudarTexto);
function mudarTexto() {
let boxAdicionarTexto = document.querySelectorAll('.tech');
//let textoBox = boxAdicionarTexto[0];
console.log(boxAdicionarTexto);
//console.log(textoBox);
console.log(input.value);
boxAdicionarTexto[0].innerText = input.value;
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
//double: https://www.w3schools.com/jsref/event_ondblclick.asp
myWebpage.addEventListener('dblclick', redireciona);
function redireciona () {
  window.open("https://pt.stackoverflow.com/questions/3312/como-redirecionar-o-usu%C3%A1rio-para-outra-p%C3%A1gina-em-javascript-jquery");
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:
let mouseOn = true;
myWebpage.addEventListener('mouseover',colorText)
  function colorText() {
    if(mouseOn) {
      myWebpage.style.color = 'purple';
      mouseOn = false;
    }
    else {myWebpage.style.color = 'white';
      mouseOn = true;}
}

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

//coresRandom: https://pt.stackoverflow.com/questions/402316/mudan%C3%A7a-de-cores-ao-passar-o-mouse
