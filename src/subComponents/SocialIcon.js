import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Facebook,Instagram,LinkedIn} from '../components/allSvg';
import { motion } from 'framer-motion';


const Icon = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:left;
background-color: #FCF6F4;
transition:all 1s ease;

position:fixed;
bottom:0;
right:2rem;

&>*:not(:last-child){
    margin:0.5rem 0;
}
` 

const Line = styled(motion.span)`
width:2px;
height:4rem;
background-color:${props=>props.theme === 'dark' ? props.theme.body : props.theme.text};


`
const SocialIcon = () => {
  return (
    <Icon>
      <motion.div
      initial={{transfor:"scale(0"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring',duration:1, delay:1.2}}      
      >
        <NavLink target="_blank" to={{pathname:"https://facebook.com/aniket.kelkar.37"}}>
            <Facebook />
        </NavLink>
      </motion.div>

      <motion.div
      initial={{transfor:"scale(0"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring',duration:1, delay:1.4}}
      >
        <NavLink  target="_blank" to={{pathname:"https://instagram.com/dec_saga/"}}>
            <Instagram/>
        </NavLink>
      </motion.div>

      <motion.div
      initial={{transfor:"scale(0"}}
      animate={{scale:[0,1,1.5,1]}}
      transition={{type:'spring',duration:1, delay:1.6}}
      >
        <NavLink  target="_blank" to={{pathname:"https://in.linkedin.com/in/aniket-kelkar-a3406b200"}}>
            <LinkedIn />
        </NavLink>
      </motion.div>


      <Line 
      initial={
       {height:0}
      }
      animate={{
        height:'6rem'
      }}
      transition={{
        type:'spring', duration:1, delay:0.8
      }}
      
      />
    </Icon>
  );
}

export default SocialIcon;
