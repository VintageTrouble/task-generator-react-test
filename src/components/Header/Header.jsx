import React from 'react'
import Logo from './Logo.jsx'

import 'Styles/components/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='link hidden'>
                <Logo text='Task Manager' />
            </Link>
        </div>
    )
}

export default Header;
