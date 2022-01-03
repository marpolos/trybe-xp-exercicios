//Criar array:
let frutas = ['pêssego', 'maça', 'manga', 'laranja'];
let cesta = new Array ('pera', 'abacate', 'abacaxi');
let oleaginosas = new Array (4);

console.log(cesta);
console.log(oleaginosas);
oleaginosas.unshift('castanha-do-para');
oleaginosas.push('nozes');
oleaginosas.push('amendoas');
oleaginosas.push('castanha-de-caju');
console.log(oleaginosas);

//Acessar itens do array:
let frutaFavorita = frutas[0];
let segundaFrutaFavorita = frutas[frutas.length - 1];
console.log(`Lista de frutas: ${frutas}, 
fruta favorita: ${frutaFavorita}, 
segunda favorita: ${segundaFrutaFavorita}`)

//Iterar array:
frutas.forEach(function (item, indice, array) {
    console.log(item, indice, array);
});

//Adicionar item ao final do array:
frutas.push('banana');
console.log(frutas);

//Remover um item do final:
frutas.pop();
console.log(frutas);

//Remover do início do array:
frutas.shift();
console.log(frutas);

//Adicionar item ao in[icio:
frutas.unshift('kiwi');
console.log(frutas);

//Procurar índice de um item:
let itemQueProcuro = frutas.indexOf('maça');
console.log(itemQueProcuro);

//Remover item pela posição do index:
let removedItem = frutas.splice(itemQueProcuro, 1);
console.log(removedItem);
console.log(frutas);

//Copiar um array:
let copiarCesta = frutas.slice();
console.log(copiarCesta);

