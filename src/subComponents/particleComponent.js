import React, { useCallback } from 'react';
import styled from 'styled-components';
import Particles from 'react-particles'
import {loadFull} from "tsparticles"
import configDark from "../config/particles-config.json"
import configLight from "../config/particlesjs-config-light.json"
 


const Box = styled.div`
position : absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleComponent = (props) => {

  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])


  return (
    <Box>
      <Particles style={{position:"absolute",top:0}}options = {props.theme === "light" ? configLight : configDark} init={particlesInit} />
    </Box>
  );
}

export default ParticleComponent;
