import React, {useState} from 'react'
import styled from 'styled-components';
import GridContainerList from './GridContainerList/GridContainerList';

const ListContainer = styled.div`
width: 30%;
background-color: #e2e2e2;
display: flex;
flex-direction: column;
padding: 25px;

`;

const GridMenu = styled.div`
height: 5%;
width: 100%;
display: flex;
max-height: 40px;
justify-content: end;
`;

const Paragraph = styled.p`
padding: 10px;
margin: 0px 5px;
cursor: pointer;
`;


type Props = {
    pokemonResults: Object[];
    getFeaturedPokemon: any;
}

function PokemonList({pokemonResults, getFeaturedPokemon}: Props) {
    const [gridView, setGridView] = useState<boolean>(true);

  return (
    <ListContainer>
        <GridMenu>
            <Paragraph>Grid</Paragraph>
            <Paragraph>List</Paragraph>
        </GridMenu>
        {gridView && pokemonResults ? (<GridContainerList pokemonResults={pokemonResults} getFeaturedPokemon={getFeaturedPokemon} />) : ('')}
    </ListContainer>
  )
}

export default PokemonList