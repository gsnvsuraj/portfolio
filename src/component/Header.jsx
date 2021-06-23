import React, { useState, useRef } from 'react';
import Menu from './Menu';
import BurgerSymbol from './BurgerSymbol';
import ClickOutside from './ClickOutside';
import '../styles/Header.css';

// menuIconChange() {
//     let element = document.getElementsByClassName("menuIcon");
//     element[0].classList.toggle("changeMenu");

//     let menu = document.getElementsByClassName("menuHidden");
//     menu[0].classList.toggle("hideMenu");
// }


const Header = () => {

    const [open, setOpen] = useState(false);

    const node = useRef(); 
    ClickOutside(node, () => setOpen(false));

    return(
        <header className="header-main">

            <div className="header-right" ref={node} >

                <BurgerSymbol open={open} setOpen={setOpen} />               
                <Menu open={open} setOpen={setOpen} />
                
            </div>

        </header>
    );

}

export default Header;