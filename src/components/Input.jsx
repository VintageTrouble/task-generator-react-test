import React from 'react'

import 'Styles/components/input.css'

const Input = React.forwardRef(({textarea, className, placeholder, label, onChange, onKeyPress}, ref) => {
    return (
        <div className={`input ${className}`}>
            <label 
                className='label' 
                htmlFor={`input_${className}`}
                ref={ref}>
                    {label}
                </label>
            {textarea 
                ?
                <textarea id={`input_${className}`}
                    className='textbox'
                    type='text'
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    onKeyPress={onKeyPress}
                    />
                :
                <input id={`input_${className}`}
                    className='textbox'
                    type='text'
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    onKeyDown={onKeyPress} />
            }
            
        </div>
    )
})

export default Input;