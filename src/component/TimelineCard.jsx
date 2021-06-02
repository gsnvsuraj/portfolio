import { Component } from 'react';
import '../styles/TimelineCard.css';

class TimelineCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            side: this.props.side,
            title: this.props.title,
            year: this.props.year,
            desc: this.props.desc
        }

    }

    render() {
        return (
            <>
                <div>
                    <div>
                        <div>
                            {this.state.side}
                            {
                                this.state.side === "left" ?

                                <div className="lineCirlce">
                                    <div className="line leftLine"></div>

                                    <div className="dot circle"></div>
                                </div>

                                :

                                <div className="lineCirlce">                                    
                                    <div className="dot circle"></div>

                                    <div className="line rightLine"></div>
                                </div>
                            }

                            <div></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default TimelineCard;