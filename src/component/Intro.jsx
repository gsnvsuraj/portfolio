import { Component } from 'react';
import data from '../data/Intro.json';
import '../styles/Intro.css';

class Intro extends Component {

    render() {
        return(
            <div>
                <div className="introBody">
                    <div className="introGreetingBody">
                        <h1 className="introGreeting">
                            <div className="greet1">Hello</div>
                            <div className="greet2">Namaste</div>
                        </h1>
                    </div>

                    <div className="introTitleBody">
                        <h1 className="introTitle">
                            I am {data.name}.
                        </h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default Intro;