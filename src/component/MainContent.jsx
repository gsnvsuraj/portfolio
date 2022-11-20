import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Projects from './Projects';
import About from './About';
import Home from './Home';
import Intro from './Intro';


const Content = () => {

    return (
        <Routes>
            <Route path="/" exact element = {<Home/>} />
            <Route path="/intro" exact element = {<Intro/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/projects" element = {<Projects/>} />
        </Routes>
    );

}

export default Content;