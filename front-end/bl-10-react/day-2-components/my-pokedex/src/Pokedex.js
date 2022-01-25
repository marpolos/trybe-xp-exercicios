import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return (
            <>
            <header>
                <h1>Pokedex</h1>
            </header>
            <main className='pokedex'>
              <Pokemon />
            </main>
            </>
        )
    }
}
export default Pokedex;
