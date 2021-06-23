import React from 'react';


const BurgerSymbol = ({ open, setOpen }) => {
    return (
        <>
            <div className={open ? "menuIcon changeMenu" : "menuIcon"} onClick={() => setOpen(!open)}>
                <div className="menuBar1"></div>
                <div className="menuBar2"></div>
                <div className="menuBar3"></div>
            </div>  
        </>
    );
}
 
export default BurgerSymbol;