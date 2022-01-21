//O fetch busca a API
//API pokemon: https://pokeapi.co/
const pokemonName = 'ditto';
const data = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response) => response.json())
//O primeiro then trás um dado de servidor e por isso convertemos ele em JSON.
//O then é assíncrono, significa que quando tiver pronta a informação ele vai retornar.
//O then é usado em código assíncro, que é quando meu código fetch devolve um Promise(descobrimos isso passando o mouse sobre o fetch).
.then((data) => {
    console.log('Com o then: ', data);
    document.body.innerHTML += data.weight});
    
    document.body.innerHTML += 'Meu texto síncrono';

    //Podemos trocar todos os then pelo await que só será usado quando temos Promises. E só pode ser usado dentro de função assíncrona.
    //Um await sempre depende do outro para acontecer, eles acontece um após o outro de cima para baixa como um código síncrono normal.

async function addPokemonWeight(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    console.log('Assíncrono: ', data);
    document.body.innerHTML += '\n' + data.abilities[0].ability.name;
    //Aqui ele não pula linha porque o texto não é block.
}
addPokemonWeight();
//Funções assíncronas encapsulam seus retornos em promises, então ao chamá-lo preciso converter para objeto com async e await ou o then.