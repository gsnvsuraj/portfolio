import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = ({ open, setOpen }) => {
    return ( 
        <>
            <div className={open ? "menuHidden showMenu" : "menuHidden hideMenu"}>
                <div className="menuItems">
                    <div className="headerLinks">
                        <NavLink to="/" exact={true} className="navLink" onClick={() => setOpen(!open)} >Home</NavLink>
                        <NavLink to="/about" exact={true} className="navLink" onClick={() => setOpen(!open)} >About</NavLink>
                        <NavLink to="/timeline" exact={true} className="navLink" onClick={() => setOpen(!open)} >Timeline</NavLink>
                        <NavLink to="/projects" exact={true} className="navLink" onClick={() => setOpen(!open)} >Projects</NavLink>
                        <NavLink to="/contact" exact={true} className="navLink" onClick={() => setOpen(!open)} >Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Menu;