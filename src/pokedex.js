/*
1. esse componente representa a enciclopédia de pokémons;
2. esse componente recebe como entrada uma lista de pokémons
para serem mostrados na tela;
3. para cada pokémon recebido, Pokedex chama o componente Pokemon.
*/

import React from 'react';
import Pokemon from './pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  render() {
    return (
      <div className="PokemonDiv">
        {pokemons.map(pokemon => <Pokemon pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;