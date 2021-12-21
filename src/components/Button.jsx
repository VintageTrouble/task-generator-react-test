import React from 'react'
import 'Styles/components/button.css'

const Button = React.forwardRef(({className, tabIndex, children, onClick, onKeyPress, onFocus}, ref) => {
    return (
        <button className={className}
            onClick={onClick}
            onKeyDown={onKeyPress}
            onFocus={onFocus}
            tabIndex={tabIndex}
            ref={ref}>
            {children}
        </button>
    )
})

export default Button
