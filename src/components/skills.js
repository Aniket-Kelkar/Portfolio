import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import LogoComponent from '../subComponents/logoComponent';
import ParticleComponent from '../subComponents/particleComponent';
import PowerButton from '../subComponents/powerButton';
import SocialIcon from '../subComponents/SocialIcon';
import {lightTheme} from './theme'



const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position:relative;
display:flex;
justify-content:space-evenly;
align-items:center;
` 

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
background-color:${props => props.theme.body};
padding: 2rem;
width:30vw;
height:60vh;
z-index:3;
line-height:1.5;
cursor:pointer;


font-family: 'ubuntu Mono',monospace;
display:flex;
flex-direction:column;
justify-content:space-between;

&:hover{
  color: ${props => props.theme.body};
  background-color: ${props => props.theme.text};
}
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items:center;
font-size:calc(1em + 1vw)

${Main}:hover &{
  &:*>{
   color :${props => props.theme.body}
  }
}

&>*:first-child{
  margin-right:1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left:2rem;
}

${Main}:hover &{
   color :${props => props.theme.body}
}

`
const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
      <ParticleComponent theme = 'light'/>
        <LogoComponent />
        <SocialIcon/>
        <PowerButton/>
        <Main>
          <Title>
            Designer
          </Title>
          <Description>
            I am learner and in designing but I love to learn new things and create simple but attractive designs.
          </Description>
          <strong>I like to design</strong>
          <ul>
            <li>Web frond design</li>
          </ul>

          <strong>Tools</strong>
          <ul>
            <li>VScode</li>
          </ul>
        </Main>
        <Main>
        <Title>
            Developer
          </Title>
          <Description>
            Developing websites gives mee jot for printing my ideas on pages.
          </Description>
          <strong>Skills</strong>
          <p>Html, Css, Js, React, Bootstrap, node</p>
        
          <strong>Tools</strong>
          <ul>
            <li>VScode</li>
          </ul>
        </Main>
    </Box>
    </ThemeProvider>
    
  );
}

export default Skills;
