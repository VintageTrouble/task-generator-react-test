import React from 'react'
//import { Link } from 'react-router-dom';


const Logo = ({text}) => {
    return (
            <div className="logo">
                <span className="first-letter">
                    { text.charAt(0) }
                </span>
                    { text.slice(1) }
            </div>
    )
}

export default Logo;
