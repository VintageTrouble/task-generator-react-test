import React from 'react'

import 'Styles/components/button.css'

const Button = ({className, children, type, onClick}) => {
    return (
        <button className={className}
            type={type}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
