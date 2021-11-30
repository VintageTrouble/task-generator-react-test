import React, { Component } from 'react'
import { Input, Selector, Button } from 'Components'
import { getTaskTypes } from 'API'

import 'Styles/pages/home.css'

export class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [],
            task: {
                id: 0,
                label: null,
                type_id: null,
                description: null
            }
        }
    }

    async componentDidMount(){
        const data = await getTaskTypes()
        this.setState({...this.state, data: data })
    }
    
    submit = () => {
        console.log(this.state.task)
    }

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()} className='home'>
                <h1 className='label'>Task Generator</h1>
                <Input 
                    className='simple'
                    placeholder='task title...' 
                    label='Task title:'
                    onChange={(item) => this.setState({...this.state, task:{...this.state.task, label: item }})} />
                <Selector 
                    label='Task type:' 
                    data={this.state.data}
                    onClickItem={(item) => this.setState({...this.state, task:{...this.state.task, type_id: item.id }})} />
                <Input className='textarea' 
                    textarea 
                    placeholder='task description...' 
                    label='Description:'
                    onChange={(item) => this.setState({...this.state, task:{...this.state.task, description: item }})}/>
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