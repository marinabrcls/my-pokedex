/* 
1. esse componente recebe como entrada um objeto que contém
informações referentes a um pokémon específico;
2. esse componente precisa retornar as seguintes informações:
- nome do pokémon;
- tipo do pokémon;
- peso médio do pokémon, acompanhado da unidade de medida;
- imagem do pokémon;
*/

import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='container-info'>
          <p> {this.props.pokemon.name} </p>
          <p> {this.props.pokemon.type} </p>
          <p> {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit} </p>
        </div>
        <div>
          <img src ={this.props.pokemon.image} />
        </div>
      </div>
    )
  }
}

export default Pokemon;
