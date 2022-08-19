import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useState, useRef } from 'react';
import music from '../assests/audio/roa-music-tropical-night.mp3'
import { motion } from 'framer-motion';

const Box = styled(motion.div)`
display:flex;
cursor:pointer;
position :fixed;
left:2rem;
top:10rem;
z-index:10;

&>*:nth-child(1){
  animation-delay:0.2s;
}
&>*:nth-child(2){
  animation-delay:0.3s;
}
&>*:nth-child(3){
  animation-delay:0.4s;
}
&>*:nth-child(4){
  animation-delay:0.5s;
}
&>*:nth-child(5){
  animation-delay:0.6s;
}
&>*:nth-child(6){
  animation-delay:0.7s;
}
`

const play = keyframes`
0%{
  transform: scaleY(1);
}
50%{
  transform: scaleY(2);
}
100%{
  transform: scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};

animation: ${play} 1s ease infinite;
animation-play-state: ${props=> props.click ? "paused" : "running"};
height: 1rem;
width:2px;
margin:0 0.1rem;

`

const Sound = () => {

 const ref = useRef(null);
 const [click, setclick] = useState(true);

 const handleClick = () =>{
    setclick(!click);
    if(click){
        ref.current.play();
    }else{
        ref.current.pause();
    }
 }
  return (
    <Box onClick={()=>handleClick()}
    initial = {
      { x:-200,
       transition: {type:'spring',duration: 1.5, delay:1}}
     }
     animate={{
       x:0,
       transition: {type:'spring',duration:1.5, delay:1}
     }}
    >
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <Line click={click}/>
      <audio src={music} ref={ref}></audio>
    </Box>
  );
}

export default Sound;
