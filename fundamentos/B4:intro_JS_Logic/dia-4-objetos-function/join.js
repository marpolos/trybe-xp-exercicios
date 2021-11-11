//   Escreva uma função que produza o seguinte resultado:
  
//   O Diego possui as habilidades: Javascript, ReactJS, Redux
//   Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
//   Dica: Para percorrer um vetor, você deve utilizar a sintaxe for...of e para unir valores de um array com um separador, utilize o join."
//Fonte: https://pt.stackoverflow.com/questions/439904/d%C3%BAvida-sobre-a-utiliza%C3%A7%C3%A3o-do-m%C3%A9todo-join

let usuarios = [
    {
      nome: 'Diego',
      habilidades: ['Javascript', 'ReactJS', 'Redux']
    },
    {
      nome: 'Gabriel',
      habilidades: ['VueJS', 'Ruby on Rails', 'Elixir']
    }
  ];

function readArray(usuarios){
    for(let array in usuarios){
        console.log("O " + usuarios[array].nome + " possui as habilidades: " + usuarios[array].habilidades.join(" and ") + ".");
    }
}

readArray(usuarios);
//https://www.w3schools.com/jsref/jsref_join.asp