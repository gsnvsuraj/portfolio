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
                            {data.greeting.map( (greet, index) => 
                                <div key={index} className={"greet"+(index+1)} >{greet}</div>
                            )}
                        </h1>

                    </div>

                    <div className="introTitleBody">
                        <h1 className="introTitle">
                            I am {data.name}.
                        </h1>

                        <div className="introDesc">
                                {data.description}
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Intro;