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

        this.selectRefs = [React.createRef(), React.createRef(), React.createRef()]
    }

    async componentDidMount() {
        const taskTypes = await getTaskTypes()
        window.store.dispatch(setupTaskTypes(taskTypes))

        this.selectRefs[this.state.selectedItem].current.click()
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

    //task validation
    isValid = () => this.state.newTask.label 
        && this.state.newTask.label.length > 0
        && this.state.newTask.type_id
        && this.state.newTask.type_id > 0
    
    handleKeyPress = async (event) => {
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                if(this.isValid()) {
                    this.submit()
                }
                break;
            case 'Tab':
                event.preventDefault();
                this.handleTabClick()
                break
            default:
                break;
        }
    }

    handleTabClick = () => {
        this.state.selectedItem === this.selectRefs.length - 1
            ? this.setState({...this.state, selectedItem: 0})
            : this.setState({...this.state, selectedItem: this.state.selectedItem + 1})

        this.selectRefs[this.state.selectedItem].current.click()
    }

    render() {
        return (
            <form 
                onSubmit={(e) => e.preventDefault()} 
                className='home' 
                onKeyDown={this.handleKeyPress}>
                <h1 className='label'>Task Generator</h1>
                <Input 
                    className='simple'
                    placeholder='task title...' 
                    label='Task title:'
                    onChange={(item) => this.setState({...this.state, newTask:{...this.state.newTask, label: item }})}
                    onKeyPress={this.handleKeyPress} 
                    ref={this.selectRefs[0]}/>
                <Selector 
                    label='Task type:' 
                    data={this.props.taskTypes}
                    onClickItem={(item) => this.setState({...this.state, newTask:{...this.state.newTask, type_id: item.id }})}
                    ref={this.selectRefs[1]} />
                <Input className='textarea' 
                    textarea 
                    placeholder='task description...' 
                    label='Description:'
                    onChange={(item) => this.setState({...this.state, newTask:{...this.state.newTask, description: item }})}
                    onKeyPress={this.handleKeyPress}
                    ref={this.selectRefs[2]}/>
                <Button 
                    className={`button ${ this.isValid() ? '' : 'disabled'}` }
                    onClick={this.submit}
                    onKeyPress={this.handleKeyPress}
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