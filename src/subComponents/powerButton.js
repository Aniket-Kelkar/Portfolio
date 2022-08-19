import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MainButton from '../components/allSvg';
import { motion } from 'framer-motion';

const Power = styled(motion.button)`
position:fixed;
top:2rem;
left:50%;
transform: translate(-50%,0);

background-color:#FCF6F4;
padding:0.3rem;
border-radius:50%;
border:1px solid #000;
width:2.5rem;
height:2.5rem;
cursor:pointer;

display:flex;
justify-content:center;
align-items:center
z-index:3;


&:hover{
  background-color: rgba(0,236, 236, 0.4);
  box-shadow:0 0 8px 6px rgba(0,236, 236, 0.2)
}

&>*:first-child{
  color:inherit;
  text-decoration:none;
}
`


const PowerButton = (props) => {
  return (
    <Power 
    initial = {
      { y:-200,
       transition: {type:'spring',duration: 1.5, delay:1}}
     }
     animate={{
       y:0,
       transition: {type:'spring',duration:1.5, delay:1}
     }}

     whileHover={{
      scale:1.1
     }}
     whileTap={{
      scale:0.9
     }}
    >
      <NavLink to="/">
          <MainButton height={32} width={32} fill="#263238"/>
      </NavLink>
        
    </Power>
  );
}

export default PowerButton;
