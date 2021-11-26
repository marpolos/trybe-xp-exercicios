//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let fraseInicial = document.createElement('h1');
fraseInicial.innerText = 'Exercício 5.2';
let corpinho = document.body;
corpinho.appendChild(fraseInicial);

//Adicione a tag main com a classe main-content como filho da tag body ;
let principal = document.createElement('main');
principal.className = 'main-content';
corpinho.appendChild(principal);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let section = document.createElement('section');
section.className = 'center-content';

document.getElementsByTagName('main')[0].appendChild(section);


//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let paragrafo = document.createElement('p');
paragrafo.innerText = 'Uma frase é um enunciado falado ou escrito que apresenta um sentido completo, podendo conter apenas uma ou várias palavras';
document.body.children[2].firstChild.appendChild(paragrafo);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let secondSection = document.createElement('section');
secondSection.className = 'left-content';
document.body.getElementsByTagName('main')[0].appendChild(secondSection);
//document.body.children[2].appendChild(secondSection);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let thirdSection = document.createElement('section');
thirdSection.className = 'right-content';
document.body.children[2].appendChild(thirdSection);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
//Pesquisa: https://qastack.com.br/programming/226847/what-is-the-best-javascript-code-to-create-an-img-element
//Info de imagem no HTML: https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
let imagem = document.createElement('img');
imagem.setAttribute ('src', 'https://picsum.photos/200');
 imagem.setAttribute('alt', 'descrição da imagem');
imagem.className = 'small-image';
document.body.children[2].firstElementChild.nextElementSibling.appendChild(imagem);
//document.body.children[2].lastElementChild.appendChild(imagem);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
let numExtenso =  ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];
let listNoOrdered = document.createElement('ul');
for (let i = 0; i < numExtenso.length; i += 1) {
    let itensOfList = document.createElement('li');
    itensOfList.innerText = numExtenso[i];
    listNoOrdered.appendChild(itensOfList);
}
document.body.children[2].lastElementChild.appendChild(listNoOrdered);

//Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 1; i <= 3; i += 1){
    let paragraphs = document.createElement('h3');
    paragraphs.innerText = i;
    paragraphs.className = 'description';
    document.body.getElementsByTagName('main')[0].appendChild(paragraphs);
}

// Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
// Adicione a classe title na tag h1 criada;
fraseInicial.classList.add('title');
// Adicione a classe description nas 3 tags h3 criadas;
//Acima

// Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let excluirSection = document.body.getElementsByTagName('section')[1];
document.body.children[2].removeChild(excluirSection);
// Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
document.body.getElementsByTagName('section')[1].style.marginRight = 'auto';
// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
document.getElementsByClassName('center-content')[0].style.backgroundColor = '#836fff'
// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let dez = document.getElementsByTagName('ul')[0].lastElementChild;
let nove = document.getElementsByTagName('ul')[0].lastElementChild.previousElementSibling;
console.log(nove);
document.getElementsByTagName('ul')[0].removeChild(dez, nove);
document.getElementsByTagName('ul')[0].removeChild(nove);