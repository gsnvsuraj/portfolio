import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from './Contact';
import Projects from './Projects';
import About from './About';
import Home from './Home';


const Content = () => {

    return (
        <Switch>
            <Route path="/" exact component = {Home} />
            <Route path="/home" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/projects" component = {Projects} />
            <Route path="/contact" component = {Contact} />
        </Switch>
    );

}

export default Content;