import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

console.log(store.getState())

//{
// meuReducer: {/_estado do meuReducer_/},
// meuOutroReducer: {/_estado do meuOutroReducer_/,}
//}

//Outra funcionalidade bastante útil que iremos aprender hoje é o subscribe . Ele adiciona um listener que executará uma callback toda vez que uma action for despachada. Para ilustrar, vamos usar o subscribe junto com nossa store . No nosso exemplo, toda vez que a store sofrer alguma alteração, pegamos nosso estado e fazemos um console.log dele.
store.subscribe(() => {
    console.log(store.getState());
  });