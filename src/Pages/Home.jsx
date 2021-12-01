import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Input, Selector, Button } from 'Components'
import { getTaskTypes, addTask } from 'API'
import { setupTaskTypes } from 'Redux/actions'

import 'Styles/pages/home.css'
import { Link } from 'react-router-dom'


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
        window.store.dispatch(addTaskAction(task))
    }

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
                    className='button'
                    type="submit"
                    onClick={this.submit}>
                        <Link 
                            to={`/tasks/${this.state.newTask.id}`}
                            className='link hidden'>
                                Submit
                        </Link>
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

export default connect(mapStoreToProps)(Home)