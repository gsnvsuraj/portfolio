import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Intro from './Intro';
import Timeline from './Timeline';
import Contact from './Contact';

class Content extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component = {Intro} />
                <Route path="/home" component = {Intro} />
                <Route path="/about" component = {Intro} />
                <Route path="/timeline" component = {Timeline} />
                <Route path="/projects" component = {Intro} />
                <Route path="/contact" component = {Contact} />
            </Switch>
        )
    }

}

export default Content;