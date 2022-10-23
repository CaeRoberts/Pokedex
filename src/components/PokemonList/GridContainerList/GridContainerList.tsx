import React from 'react'
import styled from 'styled-components';
import { resolveProjectReferencePath } from 'typescript';
import { ToUpperCase } from '../../../tools/General';
const GridContainer = styled.div`
display: grid;
height: 100%;
grid-template-columns: repeat(1, minmax(50px, 1fr));
grid-auto-rows: minmax(100px, 150px);
gap: 15px;
overflow: scroll;
&::-webkit-scrollbar {
        width: 0px;
    }
`;

interface PokemonListInterface {
    key?: Number;
    onClick?: any;
}

const PokemonList = styled.div<PokemonListInterface>`
    grid-column: span 1;
    grid-row: span 1;
    background-color: #efefef;
    cursor: pointer;
    &:hover {
  background-color: #d8d8d8;
}
`;

const TextArea = styled.div`
padding: 35px;
text-align: center;
`;

interface Pokemon {
    name: string;
}

type Props = {
    pokemonResults: any;
    getFeaturedPokemon: any;
}

function GridContainerList({pokemonResults, getFeaturedPokemon}: Props) {


    const handleClick = (pokemon: string) => {
        // call API to get singular pokemon
        getFeaturedPokemon(pokemon);
    }

  return (
    <GridContainer>
        {pokemonResults.map((pokemon:Pokemon, index:(string & Number) | (number & Number) | undefined) => (
            <PokemonList key={index} onClick={() => handleClick(pokemon.name)}>
            <TextArea>
                {ToUpperCase(pokemon.name)}
            </TextArea>
            </PokemonList>
        ))}
    </GridContainer>
  )
}

export default GridContainerList