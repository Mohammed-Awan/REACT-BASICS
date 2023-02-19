import React from "react";
import { Link } from "react-router-dom";
const NavigationBar = () =>{
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>
            </ul>
        </div>
    );
};
export default NavigationBar;