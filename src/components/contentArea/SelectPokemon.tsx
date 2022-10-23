import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
width: 70%;
height: 100%;
display: flex;
justify-items: center;
`;

const TextContainer = styled.div`
padding: 50px;
width: 100%;
`;

const TextArea = styled.div`
display: flex;
background-color: orange;
height: 100%;
text-align: center;
flex-direction: column;
padding: 0px 25px;
`;

type Props = {}

function SelectPokemon({}: Props) {
  return (
    <Container>
        <TextContainer>
            <TextArea>
                Select a Pokemon from the List
            </TextArea>
        </TextContainer>
    </Container>
  )
}

export default SelectPokemon