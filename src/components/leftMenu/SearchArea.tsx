import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
padding: 25px;
`;

const SearchInput = styled.input`
width: 100%;
height: 35px;
padding: 0px;
`;

const InputDiv = styled.div`
width: 100%;
`;

interface TypeButtonInterface {
  color?: string;
}

const TypeButton = styled.div<TypeButtonInterface>`
width: 100%;
background-color: ${({color}) => color ?? 'blue'};
cursor: pointer;
`;

const Paragraph = styled.p`
padding: 15px;
`;

type Props = {}

interface TypeObject {
  name: string;
  color: string;
}

const Types: TypeObject[] = [
  {
    name: 'Fire',
    color: 'red'
  }, {
    name: 'Ice',
    color: 'blue'
  }, {
    name: 'Poison',
    color: 'green'
  }, {
    name: 'RESET',
    color: 'grey'
  }
];

function SearchArea({}: Props) {
  return (
    <InputContainer>
      <InputDiv>
        <SearchInput placeholder='Search Pokemon' />
      </InputDiv>
      <Paragraph>Unfortunately, I ran out of time here. So the search above and filter buttons are not connected.</Paragraph>
      {Types.map((t) => (
      <TypeButton color={t.color}>
        <Paragraph>{t.name}</Paragraph>
      </TypeButton>
        ))}
    </InputContainer>
  )
}

export default SearchArea