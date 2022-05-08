import React from "react";
import HaloCentralLogo from "./HaloCentralLogo";

function NavBar(){
    
    return(
        <div className="navbar">
            <HaloCentralLogo/>
            <div className="nav-right-bar"></div>
            <ul className="navlist" >
                <li>Home</li>
                <li>Ranked</li>
                <li>Social</li>
                <li>About</li>
            </ul>
        </div>
    )
} export default NavBar