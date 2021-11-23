import React from 'react'
import Logo from './Logo.jsx'

import 'Styles/components/header.css'

const Header = () => {
    return (
        <div className='header'>
            <Logo text='Task Manager' />
        </div>
    )
}

export default Header;
