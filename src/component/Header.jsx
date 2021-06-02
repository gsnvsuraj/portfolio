import { Component } from 'react';
import data from '../data/Header.json';
import '../styles/Header.css';

class Header extends Component {

    render() {
        return(
            <header className="header-main">

                <div>
                    <div className="header-name">
                        {data.name}
                    </div>
                </div>

            </header>
        )
    }

}

export default Header;