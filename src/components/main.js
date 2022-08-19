import React ,{useState}from 'react';
import styled from 'styled-components';
import LogoComponent from '../subComponents/logoComponent';
import PowerButton from '../subComponents/powerButton';
import SocialIcon from '../subComponents/SocialIcon';
import {NavLink} from 'react-router-dom'
import { User } from './allSvg';
import Intro from './intro';
import {motion} from 'framer-motion';

const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width:100vw;
  height:100vh;
  overflow:hidden;

  position:relative;


  h1,h2,h3,h4,h5,h6{
    font-family:roboto;
    font-weight:500;
  }
`
const Container = styled.div`
padding:2rem;
`

const Contact = styled(NavLink)`
color:${props=>props.theme.text};
position:absolute;
top :2rem;
right: 2rem;
text-decoration:none;
z-index:1;

font-size:10px;
`

const About = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position:absolute;
top:45%;
left: 2rem;
text-decoration:none;
z-index:3;

font-size:10px;
`

const Skills = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position:absolute;
top:50%;
left: 2rem;
text-decoration:none;
z-index:3;

font-size:10px;
`

const Work = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position:absolute;
top:40%;
left: 2rem;
text-decoration:none;
z-index:3;

font-size:10px;
`

const Center = styled.button`
  position:absolute;
  top:${props => props.click ? "90%": "50%"};
  left:${props => props.click ? "80%" : "50%"};
  transform:translate(-50%,-50%);
  border:none;
  outline:none;
  cursor:pointer;
  background-color:${props => props.click ? '#000' : ''};

  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transition: all 1s ease;

  &>:last-child{
    display:${props => props.click ? 'none' : 'inline-block'};
    padding-top:1rem;
  }
`

const DarkDiv = styled.div`
position:fixed;
top:0; 
background-color:#000;
bottom:0;
right:50%;
width:${props => props.click ? '50%':'0'};
width:${props => props.click ? '100%':'0'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s; 
`
 
const Main = () => {

  const [click, setclick] = useState(false);

  const clickHandler = () =>setclick(!click);
  
  return (
    <MainContainer>
      <Container>
        <DarkDiv click={click}/>
        <PowerButton />
        <LogoComponent theme = {click ? 'dark' : 'light'}/>
        <SocialIcon/>

        

        <Center click = {click}>
          <User onClick = {()=>clickHandler()} width={click ? '100' : '450'} height={click ? '30' : '500'}/>
          <span> ^ Click here ^ </span>
        </Center>

        <Contact to={{pathname:"mailto:aniketskelkar01@gmail.com"}}>
          <motion.h1

          initial = {
           { y:-200,
            transition: {type:'spring',duration: 1.5, delay:1}}
          }
          animate={{
            y:0,
            transition: {type:'spring',duration:1.5, delay:1}
          }}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >Mail</motion.h1>
        </Contact>

        <Work to="/work" click={click}>
          <motion.h1
          
          initial = {
            { x:-200,
             transition: {type:'spring',duration: 1.5, delay:1}}
           }
           animate={{
             x:0,
             transition: {type:'spring',duration:1.5, delay:1}
           }}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >Work</motion.h1>
        </Work>

        <Skills to="/skills" click = {click}>
          <motion.h1

          initial = {
            { x:-200,
            transition: {type:'spring',duration: 1.5, delay:1}}
          }
          animate={{
            x:0,
            transition: {type:'spring',duration:1.5, delay:1}
          }}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >Skills</motion.h1>
        </Skills>
        
        <About to="/about" click = {click}>
          <motion.h1
          initial = {
            { x:-200,
             transition: {type:'spring',duration: 1.5, delay:1}}
           }
           animate={{
             x:0,
             transition: {type:'spring',duration:1.5, delay:1}
           }}

          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          >About</motion.h1>
        </About>

        {click ? <Intro click = {click}/> : null}

      </Container>
    </MainContainer>
  );
}

export default Main;
