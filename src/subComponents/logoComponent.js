import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../components/theme';


const Logo = styled.h1`
display:inline-block;
color:${props=>props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-size:30px;
font-weight:bold;


position:fixed;
top:2rem;
left:2rem;
z-index:3;
`


const LogoComponent = (props) => {
  return (
    <Logo color = {props.theme}>
      <i class="fa-brands fa-accusoft"> AK</i>
    </Logo>
  );
}

export default LogoComponent;
