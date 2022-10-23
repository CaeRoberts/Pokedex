import React from 'react'
import styled from 'styled-components';
import secretcomponent from '../secretcomponent';
import { ToUpperCase } from '../../tools/General';


const Container = styled.div`
width: 70%;
height: 100%;
display: flex;
justify-items: center;
`;

const InnerContainer = styled.div`
padding: 50px;
width: 100%;
`;

interface ImageProps {
  url: string;
}

const ImageArea = styled.div<ImageProps>`
height: 40%;
background-image: ${({url}) => `url(${url})`};
background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const TextArea = styled.div`
display: flex;
height: 60%;
text-align: center;
flex-direction: column;
padding: 0px 25px;
`;

const Paragraph = styled.p`
margin: 0px 5px;
`;

const Description = styled.p`
margin: 10px 5px;
`;

const Name = styled.p`
font-size: 32px;
margin: 10px 0px 0px 0px;
font-family: decoy, serif;
font-weight: 400;
font-style: normal;
`;

const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(1, minmax(50px, 1fr));
grid-auto-rows: minmax(25px, 50px);
gap: 10px;
`;

const GridItem = styled.div`
display: flex;
`;

const GridItemLeft = styled.div`
width: 30%;
background-color: #ececec;
`;
const GridItemRight = styled.div`
width: 70%;
background-color: #f5f3f3;
`;

type Props = {featuredPokemon: any;
  featuredPokemonDescription: any;}

function ContentArea({featuredPokemon, featuredPokemonDescription}: Props) {

  if (featuredPokemon.name === 'psyduck') {
    secretcomponent();
  }

console.log(featuredPokemon)

  return (
    <Container>
        <InnerContainer>
        <ImageArea url={featuredPokemon.sprites.front_default} />
        <TextArea>
            <Name>{ToUpperCase(featuredPokemon.name)}</Name>
            <Paragraph>{`${ToUpperCase(featuredPokemon.types[0].type.name)} Type | #${featuredPokemon.id} `}</Paragraph>
            <Description>{featuredPokemonDescription.flavor_text_entries[2].flavor_text.toString()}</Description>
            <GridContainer>
            {featuredPokemon.stats.map((stat:any) => (
              <GridItem>
                <GridItemLeft>{stat.stat.name}</GridItemLeft>
                <GridItemRight>{stat.base_stat}</GridItemRight>
              </GridItem>
                ))}
            </GridContainer>
        </TextArea>
        </InnerContainer>
    </Container>
  )
}

export default ContentArea