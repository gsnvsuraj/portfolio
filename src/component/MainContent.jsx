import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Intro from './Intro';
import Timeline from './Timeline';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

class Content extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component = {Intro} />
                <Route path="/home" component = {Intro} />
                <Route path="/about" component = {About} />
                <Route path="/timeline" component = {Timeline} />
                <Route path="/projects" component = {Projects} />
                <Route path="/contact" component = {Contact} />
            </Switch>
        )
    }

}

export default Content;