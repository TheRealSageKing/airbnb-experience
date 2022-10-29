import React from "react";
import brandLogo from '../images/logo.png';
export default function Navbar()
{
    return (
        <nav>
            <img src={brandLogo} alt="" className="logo" />
        </nav>
    )
}