import React from 'react'

import 'Styles/components/selector.css'

const Selector = ({label, tabIndex, data, onClickItem}) => {
    const selfRef = React.useRef();
    const [isOpened, setIsOpened] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState(null)
    const firstItemRef = React.useRef();
    const lastItemRef = React.useRef();

    const switchOpen = () => setIsOpened(!isOpened)

    const onSelectItem = (item) => 
    { 
        setSelectedItem(item);
        switchOpen();
        onClickItem && onClickItem(item) 
    }
    const getItemByIndex = (index) => {
        return data.find(item => item.id === +index)
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

    React.useEffect(() => {
        if(isOpened && firstItemRef.current){
            firstItemRef.current.focus();
        } else {
            selfRef.current.focus()
        }
      }, [isOpened])

    const handleKeyDown = (e) => {
        switch (e.code.toLowerCase()) {
            case "space":
                switchOpen();  
                e.preventDefault()
                break;
            case "enter":
                onSelectItem(getItemByIndex(document.activeElement.id))
                setIsOpened(false);
            case "tab":
                if(isOpened) {
                    e.preventDefault()
                }
                break;
            case "arrowup":
                e.target.previousElementSibling.focus()
                e.preventDefault()
                break;
            case "arrowdown":
                e.target.nextElementSibling.focus()
                e.preventDefault()
                break;
            default:
                e.preventDefault();
                break;
        }
    }

    return (
        <div 
            className='selector' 
            ref={selfRef} 
            tabIndex={tabIndex}
            onKeyDown={handleKeyDown}
        >
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
                        <span tabIndex={'0'} onFocus={() => lastItemRef.current.focus()}/>
                        {data &&
                            data.map((item, i) => {
                                const ref = i === 0 ? firstItemRef : lastItemRef
                                return (
                                    <li
                                        onClick={() => onSelectItem(item)}
                                        className='item'
                                        key={item.id}
                                        id={item.id}
                                        tabIndex={'1'}
                                        ref={ref}
                                        onFocus={(e) => e.preventDefault()}
                                        autoFocus
                                        
                                    >
                                        <div className="wrapper">{item.text}</div> 
                                    </li>
                                )
                            })
                        }
                        <span tabIndex={'0'} onFocus={() => {firstItemRef.current.focus()}}/>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Selector