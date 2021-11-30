import React, { Component } from 'react'

export class Task extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <h1 className='label'>
                    Title: {this.props.task.label}
                </h1>
                <p>
                    Category: {this.getType(this.props.task.type_id).text}
                </p>
                <div>
                    <p>Description</p>
                    <span>{this.props.task.description}</span>
                </div>
            </>
        )
    }
}

export default Task
