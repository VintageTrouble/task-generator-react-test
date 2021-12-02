import React, { Component } from 'react'
import { connect } from 'react-redux'


import { Input, Selector, Button } from 'Components'
import { getTaskTypes, addTask } from 'API'
import { setupTaskTypes } from 'Redux/actions'
import { withNavigate } from 'HOC'

import 'Styles/pages/home.css'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newTask: { 
                id: 0,
                label: null,
                type_id: null,
                description: null
            }
        }
    }

    async componentDidMount() {
        const taskTypes = await getTaskTypes()
        window.store.dispatch(setupTaskTypes(taskTypes))
    }
    
    submit = async () => {
        const task = await addTask(this.state.newTask)
        this.setState({
            ...this.state, 
            newTask:{
                ...this.state.newTask, 
                id: task.id 
            }
        })

        this.props.navigate(`/tasks/${task.id}`)
    }

    isValid = () => this.state.newTask.label 
        && this.state.newTask.label.length > 0
        && this.state.newTask.type_id
        && this.state.newTask.type_id > 0
    

    render() {
        return (
            <form onSubmit={(e) => e.preventDefault()} className='home'>
                <h1 className='label'>Task Generator</h1>
                <Input 
                    className='simple'
                    placeholder='task title...' 
                    label='Task title:'
                    onChange={(item) => this.setState({...this.state, newTask:{...this.state.newTask, label: item }})} />
                <Selector 
                    label='Task type:' 
                    data={this.props.taskTypes}
                    onClickItem={(item) => this.setState({...this.state, newTask:{...this.state.newTask, type_id: item.id }})} />
                <Input className='textarea' 
                    textarea 
                    placeholder='task description...' 
                    label='Description:'
                    onChange={(item) => this.setState({...this.state, newTask:{...this.state.newTask, description: item }})}/>
                <Button 
                    className={`button ${ this.isValid() ? '' : 'disabled'}` }
                    onClick={this.submit}
                >
                    Submit
                </Button>
            </form>
        )
    }
}

const mapStoreToProps = (state) =>{
    return {
        taskTypes: state.taskTypes.items
    }
}

export default connect(mapStoreToProps)(withNavigate(Home))