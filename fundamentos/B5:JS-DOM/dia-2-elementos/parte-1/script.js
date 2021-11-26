console.log(document.getElementById("elementoOndeVoceEsta"));
console.log(document.getElementById("elementoOndeVoceEsta").parentNode);
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "red";

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
console.log(document.getElementById("elementoOndeVoceEsta").firstChild);
document.getElementById("elementoOndeVoceEsta").firstElementChild.innerText = "Estou no first Child.";

//Acesse o primeiroFilho a partir de pai .
console.log(document.getElementById("pai").firstElementChild);

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

//Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById("pai").childNodes[5]);
console.log(document.getElementById("pai").children[2]);

//Crie um irmão para elementoOndeVoceEsta .
let paiDeOndeEstou = document.getElementById("pai");
let brotherForMe = document.createElement('section');
brotherForMe.innerText = "Brother for me.";
paiDeOndeEstou.appendChild(brotherForMe);

//Crie um filho para elementoOndeVoceEsta .
let ondeEstou = document.getElementById("elementoOndeVoceEsta");
let childrenDeOndeEstou = document.createElement('p');
childrenDeOndeEstou.innerText = "Esse é o novo filho de onde estou.";
ondeEstou.appendChild(childrenDeOndeEstou);

// Crie um filho para primeiroFilhoDoFilho .
let filhoDoPai = document.getElementById("primeiroFilhoDoFilho");
let childrenToFirst = document.createElement('p');
childrenToFirst.innerText = "Primeiro filho do primeiro filho do filho.";
filhoDoPai.appendChild(childrenToFirst);

//A partir desse filho criado, acesse terceiroFilho .
console.log(document.querySelector("#primeiroFilhoDoFilho").firstElementChild.parentNode.parentNode.parentNode.children[2]);

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
let tagMain = document.querySelector('#paiDoPai').firstElementChild;
console.log(document.querySelector('#paiDoPai').firstElementChild);


 tagMain.removeChild(pai.firstElementChild);
 tagMain.removeChild(pai.children[2]);
 tagMain.removeChild(pai.children[1]);
 elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.children[1]);