import React, { Component } from 'react'
import { Input, Selector } from 'Components/index.js'

export class Home extends Component {
    

    render() {
        const data = [
            {id: 1, text: 'test1'},
            {id: 2, text: 'test2'},
            {id: 3, text: 'test3'},
            {id: 4, text: 'test4'},
            {id: 5, text: 'test5'},
            {id: 6, text: 'test6'},
            {id: 7, text: 'test7'},
            {id: 8, text: 'test8'},
        ]

        return (
            <>
                <h1>Task Generator</h1>
                <Input className='title' 
                    placeholder='task title...' 
                    label='Task title' />
                <Selector label='Task type' data={data}/>
                {/* <div className='task-type'>
                    <label>Task type <i className="fas fa-caret-down" /></label>
                    <div className='type-selector'>

                    </div>
                </div> */}
                <Input className='descr' 
                    textarea 
                    placeholder='task description...' 
                    label='Description'/>
            </>
        )
    }
}

export default Home
