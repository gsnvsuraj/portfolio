import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoPerson } from 'react-icons/io5';


const Menu = ({ open, setOpen }) => {
    return ( 
        <>
            <div className={open ? "menuHidden showMenu" : "menuHidden hideMenu"}>
                <div className="menuItems">
                    <div className="headerLinks">
                        
                        <NavLink to="/" exact={true} className="navLink" onClick={() => setOpen(false)} >
                            <span className="navLinkIcons"><AiFillHome /></span>
                            Home
                        </NavLink>
                        
                        <NavLink to="/about" exact={true} className="navLink" onClick={() => setOpen(false)} >
                            <span className="navLinkIcons"><IoPerson /></span>
                            About
                        </NavLink>
                        
                        <NavLink to="/projects" exact={true} className="navLink" onClick={() => setOpen(false)} >
                            <span className="navLinkIcons"><AiOutlineFundProjectionScreen /></span>
                            Projects
                        </NavLink>
                        

                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Menu;