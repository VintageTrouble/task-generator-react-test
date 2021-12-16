import React from 'react'

import 'Styles/components/button.css'

const Button = React.forwardRef(({className, tabIndex, children, onClick, onKeyPress}, ref) => {
    return (
        <button className={className}
            onClick={onClick}
            onKeyDown={onKeyPress}
            tabIndex={tabIndex}
            ref={ref}>
            {children}
        </button>
    )
})

export default Button
