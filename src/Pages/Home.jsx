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
            },
            selectedItem: 0
        }

        this.firstItemRef = React.createRef()
        this.lastItemRef = React.createRef()
    }

    async componentDidMount() {
        const taskTypes = await getTaskTypes()
        window.store.dispatch(setupTaskTypes(taskTypes))

        this.firstItemRef.current.focus();
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
            <div className='home'>
                <h1 className='label'>Task Generator</h1>
                <span tabIndex={'0'} onFocus={() => this.lastItemRef.current.focus() }/>
                <Input 
                    className='simple'
                    placeholder='task title...' 
                    label='Task title:'
                    onChange={(item) => this.setState({...this.state, newTask:{...this.state.newTask, label: item }})}
                    ref={this.firstItemRef}
                    tabIndex={'0'} />
                <Selector 
                    label='Task type:' 
                    data={this.props.taskTypes}
                    onClickItem={(item) => this.setState({...this.state, newTask:{...this.state.newTask, type_id: item.id }})}
                    tabIndex={'0'} />
                <Input className='textarea' 
                    textarea 
                    placeholder='task description...' 
                    label='Description:'
                    onChange={(item) => this.setState({...this.state, newTask:{...this.state.newTask, description: item }})}
                    tabIndex={'0'} />
                <Button 
                    className={`button ${ this.isValid() ? '' : 'disabled'}` }
                    onClick={() => {
                            if(this.isValid()) {
                                this.submit()
                            }
                        }}
                    ref={this.lastItemRef}
                    tabIndex={ this.isValid() ? '0' : '-1'}>
                    Submit
                </Button>
                <span tabIndex={'0'} onFocus={() => this.firstItemRef.current.focus()}/>
            </div>
        )
    }
}

const mapStoreToProps = (state) =>{
    return {
        taskTypes: state.taskTypes.items
    }
}

export default connect(mapStoreToProps)(withNavigate(Home))