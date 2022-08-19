import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyle";
import { lightTheme } from "./components/theme";
import {BrowserRouter as Router,Route,Routes, useLocation} from "react-router-dom";
import React from 'react';

import Main from "./components/main"; 
import About from "./components/about";
import Blog from "./components/blog";
import Skills from "./components/skills";
import Work from "./components/work";
import { AnimatePresence } from "framer-motion";

import Sound from "../src/subComponents/sound"

function App(){

  const location = useLocation();
  return<>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
    <Sound/> 
      <AnimatePresence exitBeforeEnter>
        
      <Routes location = {location} key = {location.pathname}>
        <Route path="/" element = {<Main/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/blog" element = {<Blog/>}/>
        <Route path="/skills" element = {<Skills/>}/>
        <Route path="/work" element = {<Work/>}/>
      </Routes>
      </AnimatePresence>
    </ThemeProvider>
  </>
}

export default App;
