import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Projects from './Projects';
import About from './About';
import Home from './Home';
import Intro from './Intro';


const Content = () => {

    return (
        <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/intro" exact component = {Intro} />
            <Route path="/home" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/projects" component = {Projects} />
        </Switch>
    );

}

export default Content;