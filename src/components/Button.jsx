import React from 'react'

import 'Styles/components/button.css'

const Button = ({className, children, onClick}) => {
    return (
        <button className={className}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
