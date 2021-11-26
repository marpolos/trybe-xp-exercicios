const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "pink";
      
      paragraph.style.textTransform = 'uppercase';
      console.log(document.getElementsByClassName("likes"));
//Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.querySelector("#page-title").innerText = "Meia-noite em Paris";

//Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
//STYLE: https://www.w3schools.com/jsref/dom_obj_style.asp
//rotate: https://www.w3schools.com/jsref/prop_style_transform.asp
document.getElementById("second-paragraph").style.transform = 'rotate(7deg)';
document.getElementById("second-paragraph").style.color = "blue";

//Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = "Diretor: Woody Allen";


document.querySelectorAll(".likes")[0].innerText = "Mudando de hábito";

let itens = document.getElementsByClassName("likes");
for (let i = 0; i < itens; i +=1) {
      itens[i].innerText = "Lorem";
}

//Adicione uma classe igual para os dois parágrafos.
let paragraph1 = document.getElementById('paragraph');
let paragraph2 = document.getElementById('second-paragraph');
paragraph1.classList.add('destak');
paragraph2.classList.add('destak');
//Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
let paragraphs = document.getElementsByClassName('destak');
console.log(paragraphs);
//Altere algum estilo do primeiro deles.

//Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
document.getElementsByTagName('h4')[0].style.color = 'red';
