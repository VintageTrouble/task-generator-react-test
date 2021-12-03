import React from 'react'

import 'Styles/components/button.css'

const Button = ({className, children, onClick, onKeyPress}) => {
    return (
        <button className={className}
            onClick={onClick}
            onKeyDown={onKeyPress}>
            {children}
        </button>
    )
}

export default Button
