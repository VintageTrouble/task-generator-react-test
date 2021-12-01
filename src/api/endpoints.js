import Api from "./Api";

export const getTasks = async () => await Api.get('Tasks').then(({data}) => data);
export const getTask = async (id) => await Api.get(`Tasks/${id}`).then(({data}) => data);
export const addTask = async (task) => await Api.post(
    `Tasks`, 
    JSON.stringify(task), 
    {
        headers: {'Content-Type': 'application/json'}
    }
).then(({data}) => data); 


export const getTaskTypes = async () => await Api.get('TaskTypes').then(({data}) => data);
export const getTaskType = async (id) => await Api.get(`TaskTypes/${id}`).then(({data}) => data);

