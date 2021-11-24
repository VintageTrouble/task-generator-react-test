import React, { Component } from 'react'
import { Input, Selector, Button } from 'Components'

import 'Styles/pages/home.css'

export class Home extends Component {
    
    render() {
        const data = [
            {id: 1, text: 'epic'},
            {id: 2, text: 'task'},
            {id: 3, text: 'bug-fix'},
            {id: 4, text: 'test'},
            {id: 5, text: 'design'},
            {id: 6, text: 'devops'},
            {id: 7, text: 'frontend'},
            {id: 8, text: 'backend'},
        ]

        return (
            <div className='home'>
                <h1 className='label'>Task Generator</h1>
                <Input 
                    className='simple'
                    placeholder='task title...' 
                    label='Task title:' />
                <Selector 
                    label='Task type:' 
                    data={data} />
                    {//onClickItem={(item) => console.log(item)} />
                    }
                <Input className='textarea' 
                    textarea 
                    placeholder='task description...' 
                    label='Description:'/>
                <Button 
                    className='button'
                    onClick={() => console.log('click')}>
                    Submit
                </Button>
            </div>
        )
    }
}

export default Home
