import { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                        <NavLink to="/" exact={true} >Home</NavLink>
                        <NavLink to="/about" exact={true} >About</NavLink>
                        <NavLink to="/timeline" exact={true} >Timeline</NavLink>
                        <NavLink to="/projects" exact={true} >Projects</NavLink>
                        <NavLink to="/contact" exact={true} >Contact</NavLink>
                    </div>
                </div>

            </header>
        )
    }

}

export default Header;