import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Intro from './Intro';

class Content extends Component {

    render() {
        return (
            <Switch>
                <Route path="/" exact component = {Intro} />
                <Route path="/home" component = {Intro} />
                <Route path="/contact" component = {Contact} />
            </Switch>
        )
    }

}

export default Content;