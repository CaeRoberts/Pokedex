import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ContentArea from './components/contentArea/ContentArea';
import LeftMenu from './components/leftMenu/LeftMenu'
import PokemonList from './components/PokemonList/PokemonList';
import { findPokemon, getPokemon, getPokemonDetails } from './api/Pokemon'
import SelectPokemon from './components/contentArea/SelectPokemon';

const Container = styled.div`
height: 100vh;
width: 100vw;
`;


const ContentContainer = styled.div`
width: 80%;
height: 100%;
margin-left: 20%;
display: flex;
`;

interface getPokemonTypes {
    limit: number;
    offset: number;
}

type Props = {}


function App() {
  const [menuMinimized, setMenuMinimized] = useState<boolean>(false);
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [numberToReturn, setNumberToReturn] = useState<Number>(151);
  const [pokemonResults, setPokemonResults] = useState<any>();
  const [featuredPokemon, setFeaturedPokemon] = useState<any>();
  const [featuredPokemonDescription, setFeaturedPokemonDescription] = useState<any>();
  const [offSet, setOffSet] = useState<Number|undefined>(0);

  const getFeaturedPokemon = async(pokemon?: string) => {
    const data = await findPokemon(pokemon ? pokemon : 'psyduck');
    const data2 = await getPokemonDetails(pokemon ? pokemon : 'psyduck')
    setFeaturedPokemon(data);
    setFeaturedPokemonDescription(data2);
  }
  
  useEffect(() => {
    const fetchPokemon = async() => {
      const data = await getPokemon(numberToReturn, offSet);
      const results = data.results;
      setPokemonResults(results);
    };

    fetchPokemon();
  }, [numberToReturn, offSet])
  
  useEffect(() => {
    getFeaturedPokemon()
  }, [])



  return (
    <Container className="App">
      <LeftMenu menuMinimized={menuMinimized} setMenuMinimized={setMenuMinimized} signedIn={signedIn} setSignedIn={setSignedIn}  />
      <ContentContainer>
        <PokemonList pokemonResults={pokemonResults} getFeaturedPokemon={getFeaturedPokemon} />
        {featuredPokemon ? (<ContentArea featuredPokemon={featuredPokemon} featuredPokemonDescription={featuredPokemonDescription} />) : (<SelectPokemon />)}
      </ContentContainer>
    </Container>
  );
}

export default App;
