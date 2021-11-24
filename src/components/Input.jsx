import React from 'react'

import 'Styles/components/input.css'

const Input = ({textarea, className, placeholder, label}) => {
    return (
        <div className={`input ${className}`}>
            <label 
                className='label' 
                htmlFor={`input_${className}`}>
                    {label}
                </label>
            {textarea 
                ?
                <textarea id={`input_${className}`}
                    className='textbox'
                    type='text'
                    placeholder={placeholder} />
                :
                <input id={`input_${className}`}
                    className='textbox'
                    type='text'
                    placeholder={placeholder} />
            }
            
        </div>
    )
}

export default Input;