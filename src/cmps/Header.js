import React from 'react';

import headerLogo from '../assets/img/small-logo-white.png';

export default function Header() {
    return (
        <div className="flex header-container">
            <div className="header-logo-container">
                <img src={headerLogo} alt="" />
            </div>
            <div className="flex center align-center app-title-container">
                <div className="uppercase">gazorpasounds</div>
            </div>
        </div>
    )
}