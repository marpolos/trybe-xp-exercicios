 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/
function criarTexto(){
 let textoP = document.getElementsByTagName('p')[1];
console.log(textoP);
textoP.innerText = "DOM: \n Quando você abre uma página web em seu navegador, ele resgata o texto em HTML da página e o interpreta, de maneira semelhante ao que nosso interpretador do Capítulo 11 fazia. O navegador constrói um modelo da estrutura do documento e depois usa esse modelo para desenhar a página na tela.\nUm dos 'brinquedos' que um programa em JavaScript possui disponível em sua caixa de ferramentas é essa representação do documento. Você pode lê-la e também alterá-la. Essa representação age como uma estrutura viva de dados: quando modificada, a página na tela é atualizada para refletir as mudanças.";
}
criarTexto();
 /*
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).*/
 //cores: https://convertacolor.com/
 function changeColor() {
     let squareGreen = document.getElementsByClassName('main-content')[0];
     console.log(squareGreen);
     squareGreen.style.backgroundColor = '#4ca46d';

 }
 changeColor();
/* Crie uma função que mude a cor do quadrado vermelho para branco.
*/
function changeColorCenter() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
changeColorCenter();

/*
 Crie uma função que corrija o texto da tag <h1>.*/
 function titleCorrect() {
 document.getElementsByClassName('title')[0].innerText = "Exercício 5.1 - JavaScript";
 }
 titleCorrect();
 /*
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.*/
 //text-transformation: https://www.w3schools.com/jsref/prop_style_texttransform.asp
 function uppercaseParagraph() {
     document.getElementsByTagName('p')[0].id = 'uppercaseFor';
     document.getElementById('uppercaseFor').style.textTransform = 'uppercase';
 }
 uppercaseParagraph();
 /*
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
function exibiP() {
    console.log(document.getElementsByTagName('p'));
}
exibiP();