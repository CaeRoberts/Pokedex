import React from 'react'
import styled from 'styled-components';
import SearchArea from './SearchArea';
import SplashScreen from './SplashScreen';

interface MenuContainerProps {
  menuMinimized: boolean;
  signedIn: boolean
}


const MenuContainer = styled.div<MenuContainerProps>`
height: 100%;
background-color: #0078AA;
color: white;
display: flex;
width: ${(props) => props.menuMinimized ? '20%' : '100%'};
/* width: 100%; */
max-width: ${({signedIn}) => signedIn ? '300px' : '100vw'};
flex-direction: column;
justify-content: space-between;
text-align: center;
transition: all 0.8s ease-in-out;
position: fixed;
z-index: 9998;
`;


type Props = {
  menuMinimized: boolean;
  setMenuMinimized: any;
  signedIn: boolean;
  setSignedIn: any;
}

function LeftMenu({menuMinimized, setMenuMinimized, signedIn, setSignedIn}: Props) {

  const handleClick = () => {
    setMenuMinimized(true);
  }

  return (
    <MenuContainer onClick={handleClick} menuMinimized={menuMinimized} signedIn={signedIn}>
      {menuMinimized ? (<SearchArea />) : (<SplashScreen />)}
    </MenuContainer>
  )
}

export default LeftMenu