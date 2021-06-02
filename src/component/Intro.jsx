import { Component } from 'react';
import data from '../data/Intro.json';
import '../styles/Intro.css';

class Intro extends Component {

    render() {
        return(
            <div>
                <div className="introBody">
                    <h1 className="introTitle">Namaste</h1>
                    <h1 className="introTitle">I am {data.name}.</h1>
                </div>
            </div>
        )
    }

}

export default Intro;