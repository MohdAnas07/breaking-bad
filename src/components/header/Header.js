import React from 'react'
import CSS from './style.module.css'
import Image from '../../Assets/Logo.png'


const Header = () => {
    return (
        <header className={CSS.header}>
            <img className={CSS.logo} src={Image} alt="Breaking Bad's Logo" />
            <h2 className={CSS.header_heading}>Breaking Bad</h2>
        </header>
    )
}

export default Header
