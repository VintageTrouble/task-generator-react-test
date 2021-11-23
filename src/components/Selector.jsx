import React from 'react'

const Selector = ({label, data}) => {
    const [isOpened, setIsOpened] = React.useState(false)

    const switchOpen = () => setIsOpened(!isOpened)
    return (
        <div className='selector'>
            <label onClick={switchOpen}>
                {label} 
                <i className={`fas fa-caret-${isOpened ? 'up' : 'down'}`} />
            </label>
            {isOpened &&
                <div className='drop-down'>
                    {
                        data.map(item => {
                            <div key={item.id} className='drop-down-item'>
                                {item.text}
                            </div>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Selector