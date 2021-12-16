import React from 'react'

import 'Styles/components/input.css'

const Input = React.forwardRef(({textarea, tabIndex, className, placeholder, label, onChange}, ref) => {
    return (
        <div className={`input ${className}`}>
            <label 
                className='label' 
                htmlFor={`input_${className}_${textarea ? 'textarea' : ''}`}>
                    {label}
                </label>
            {textarea 
                ?
                <textarea id={`input_${className}_textarea`}
                    className='textbox'
                    type='text'
                    tabIndex={tabIndex}
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    ref={ref} />
                :
                <input id={`input_${className}`}
                    className='textbox'
                    type='text'
                    tabIndex={tabIndex}
                    placeholder={placeholder}
                    onChange={e => onChange(e.target.value)}
                    ref={ref} />
            }
            
        </div>
    )
})

export default Input;