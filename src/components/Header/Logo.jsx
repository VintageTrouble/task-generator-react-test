import React from 'react'
import { Link } from 'react-router-dom';


const Logo = ({text}) => {
    return (
            <div className="logo">
                <Link to='/' className='link hidden'>
                    <span className="first-letter">
                        { text.charAt(0) }
                    </span>
                        { text.slice(1) }
                </Link>
            </div>
            
    )
}

export default Logo;
