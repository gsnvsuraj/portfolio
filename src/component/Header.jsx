import { Component } from 'react';
import data from '../data/Header.json';
import '../styles/Header.css';

class Header extends Component {

    render() {
        return(
            <header className="header-main">

                <div className="header-left">
                    <div className="header-name">
                        {data.name}
                    </div>
                </div>

                <div className="header-right">
                    <div className="headerLinks">
                        <a href="/">Home</a>
      			        <a href="/contact">Contact</a>
                    </div>
                </div>

            </header>
        )
    }

}

export default Header;