import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height: 100%;
`;

const TextContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

interface ImageProps {
  url: string;
}

const ImageArea = styled.div<ImageProps>`
height: 40%;
width: 50%;
background-image: ${({url}) => `url(${url})`};

background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const SmallTitle = styled.p`
font-size: 32px;
margin: 0px 0px 10px 0px;
font-family: decoy, serif;
font-weight: 400;
font-style: normal;
`;

const Paragraph = styled.p`
margin: 5px 0px;
`;

const Button = styled.div`
padding: 15px 25px;
margin: 10px 0px;
background-color: #1f85b0;
border: 1px white solid;
cursor: pointer;
`;


//
type Props = {}

function SplashScreen({}: Props) {
  return (
    <Container>
        <TextContainer>
            <ImageArea url={'https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png'} />
            <SmallTitle>Welcome to my Pokedex!</SmallTitle>
            <Paragraph>Hello, thanks for taking the time to check out my Pokedex!</Paragraph>
            <Paragraph>Looking forward to hearing from you,</Paragraph>
            <Paragraph>Cae Roberts</Paragraph>
            <Button>Click here to begin.</Button>
        </TextContainer>
    </Container>
  )
}

export default SplashScreen