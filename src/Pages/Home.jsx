import React, { Component } from 'react'
import { Input, Selector, Button } from 'Components'

import 'Styles/pages/home.css'

export class Home extends Component {
    task = {
        label: null,
        type_id: null,
        description: null
    }

    submit = () => {
        console.log(this.task)
    }

    data = [
        {id: 1, text: 'epic'},
        {id: 2, text: 'task'},
        {id: 3, text: 'bug-fix'},
        {id: 4, text: 'test'},
        {id: 5, text: 'design'},
        {id: 6, text: 'devops'},
        {id: 7, text: 'frontend'},
        {id: 8, text: 'backend'},
    ]

    render() {
        //get data from redux
        

        return (
            <form onSubmit={(e) => e.preventDefault()} className='home'>
                <h1 className='label'>Task Generator</h1>
                <Input 
                    className='simple'
                    placeholder='task title...' 
                    label='Task title:'
                    onChange={(item) => this.task.label = item} />
                <Selector 
                    label='Task type:' 
                    data={this.data}
                    onClickItem={(item) => this.task.type_id = item.id} />
                <Input className='textarea' 
                    textarea 
                    placeholder='task description...' 
                    label='Description:'
                    onChange={(item) => this.task.description = item}/>
                <Button 
                    className='button'
                    type="submit"
                    onClick={this.submit}>
                    Submit
                </Button>
            </form>
        )
    }
}

export default Home
