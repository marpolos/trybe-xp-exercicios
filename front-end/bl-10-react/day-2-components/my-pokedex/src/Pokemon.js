import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
    render() {
        return (
            pokemons.map((poke) => {
                return (
                    `Nome do pokemon: ${poke.name}`
                    `Tipo do pokemon: ${poke.type}`
                )
/* peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon. */
            })
        )
    }
}
export default Pokemon;