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
                            <p>{ `Nome: ${name}` }</p>
                            <p>{ `Type: ${type}`}</p>
                            <p>{ `Peso: ${value} ${measurementUnit}`}</p>
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