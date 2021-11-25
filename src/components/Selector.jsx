import React from 'react'

import 'Styles/components/selector.css'

const Selector = ({label, data, onClickItem}) => {
    const selfRef = React.useRef();
    const [isOpened, setIsOpened] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)

    const switchOpen = () => setIsOpened(!isOpened)
    const onSelectItem = (item) => 
    { 
        setSelectedItem(item);
        switchOpen();
        onClickItem && onClickItem(item) 
    }

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());

        if (!path.includes(selfRef.current)) {
            setIsOpened(false);
        }
    };

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
      }, []);

    return (
        <div className='selector' ref={selfRef}>
            <label className='label'
                onClick={switchOpen}>
                <i className={`fas fa-caret-${isOpened ? 'up' : 'down'}`} />
                {label}
            </label>
            <p 
                className={`${
                    selectedItem 
                    ? 
                    'selected-item' 
                    : 
                    'placeholder'}`
                }
                onClick={switchOpen}
            >
                {
                    selectedItem 
                    ? 
                    selectedItem.text 
                    : 
                    'Select task type...'
                }
            </p>
            {isOpened &&
                <div className='drop-down'>
                    <ul>
                        {data &&
                            data.map((item) => (
                                <li
                                    onClick={() => onSelectItem(item)}
                                    className='item'
                                    key={item.id}
                                >
                                    {item.text}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Selector