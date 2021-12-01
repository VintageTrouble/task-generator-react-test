import React, {Component} from 'react'

import { getTask } from 'API'

export class Task extends Component {
    constructor(props){
        super(props);

        console.log(this.props)
        this.state = {
            taskId: 1,
            task: null
        }

        console.log(this.state.taskId)
    }

    async componentDidMount(){
        const task = await getTask(this.state.taskId)

        this.setState({...this.state, task: task})
    }

    render() {
        return (
            <>
                <h1>
                    Title: 
                </h1>
                <p>
                    Category: 
                </p>
                <div>
                    <p>Description</p>
                    
                </div>
            </>
        )
    }
}

export default Task
