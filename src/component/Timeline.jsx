import { Component } from 'react';
import TimelineCard from './TimelineCard.jsx';
import data from '../data/Timeline.json';

class Timeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstSide: "left",
            secondSide: "right"
        }

    }

    render() {
        return (
            <>
                <div>

                    <div>
                        <h1>
                            Timeline
                        </h1>
                    </div>

                    <div>
                        <div>
                            {data.timeline.map(
                                (obj, index) => 

                                <div>
                                    <div>
                                        {
                                            index % 2 === 0 ?
                                                
                                                <TimelineCard key={index} id={index}
                                                side={this.state.firstSide} title={obj.title} 
                                                year={obj.year} desc={obj.description} /> 
                                                
                                                :
                                                
                                                <TimelineCard key={index} id={index}
                                                side={this.state.secondSide} title={obj.title} 
                                                year={obj.year} desc={obj.description} />
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </>
        )
    }

}

export default Timeline;