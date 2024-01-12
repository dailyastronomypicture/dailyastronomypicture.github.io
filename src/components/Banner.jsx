import React from "react";
import logo from '../statics/DAP.png'

function Header() {
    return(
        <>
            <header>
                <img src={logo} alt="DAP logo" id="dap"/>
                <h1>Daily Astronomy Picture</h1>
            </header>
        </>
    )
}

export default Header;