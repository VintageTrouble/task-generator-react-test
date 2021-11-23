import React from 'react'

const Input = ({textarea, className, placeholder, label}) => {
    return (
        <div className={className}>
            <label>{label}:
            {textarea 
                ?
                <textarea
                    className={`input ${className}`}
                    type='text'
                    placeholder={placeholder} />
                :
                <input
                    className={`input ${className}`}
                    type='text'
                    placeholder={placeholder} />
            }
            </label>
        </div>
    )
}

export default Input;