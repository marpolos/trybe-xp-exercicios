import React from 'react';
import pokemons from './data';
import './index.css'

class Pokemon extends React.Component {
    render() {
        return (
            pokemons.map((poke) => {
                const { name, type, averageWeight: {value, measurementUnit}, image} = poke;
                return (
                    <div className='poke'>
                        <img src={image} alt={name} />
                        <div className='infos-poke'>
                            { `Nome: ${name}` }
                            { `Type: ${type}`}
                            { `Peso: ${value} ${measurementUnit}`}
                        </div>
                    </div>
                )
/* peso médio do pokemon, acompanhado da unidade de medida usada;
imagem do pokemon. */
            })
        )
    }
}
export default Pokemon;