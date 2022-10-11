import React from 'react'
import Logo from '../Images/logo.svg'
export default function Header() {
    return (
        <header className="header center">
            <img className="header__logo" src={Logo} alt="SPLITTER Logo" />
        </header>
    )
}
