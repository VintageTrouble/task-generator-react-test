import React, {Component} from 'react'
import { useParams } from "react-router-dom";

import { getTask, getTaskType } from 'API'

import 'Styles/pages/task.css'

const Task = () => {
    const [task, setTask] = React.useState();
    const [taskType, setTaskType] = React.useState();
    const [isLoaded, setIsLoaded] = React.useState(false);
    const { id } = useParams();

    React.useEffect(async () => {
        const newTask = await getTask(parseInt(id, 10))
        const type = await getTaskType(newTask.type_id)

        setTask(newTask)
        setTaskType(type)
        setIsLoaded(true)
    }, [])

    return (
        <>
        {isLoaded
            ?
                <div className='task'>
                    <div className="label">
                        <h1 className='text'>
                            {task.label}
                        </h1>
                    </div>
                    <p className='category'>
                        <p className='label'>Category: {taskType.text}</p>
                    </p>
                    <div className='description'>
                        <p className='label'>Description:</p>
                        <div className='text'>{task.description}</div>
                    </div>
                </div>
            :
                <h1>Загрузка</h1>
            
        }
        </>
    )
}

export default Task
