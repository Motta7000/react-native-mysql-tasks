
const API = 'http://192.168.1.19:3000/tasks'

export const getTasks = async () => {
    
    const res = await fetch(API)
   
    return await res.json()
}

export const saveTask = async (newTask) => {
    const res = await fetch(API,{method:'POST',
    headers:{Accept:'application/json',"Content-Type":'application/json'},
    body: JSON.stringify(newTask)
});
console.log('save task')
 
    return await res.json()
}

export const deleteTask = async (id) => {

 
    const res = await fetch(API + '/' + id,{
    method:'DELETE',

    })
   
}

export const getTask = async (id) => {
    const res = await fetch(API + '/' + id,{
        method:'GET',
    })
    return await res.json()
}

export const updateTask = async (id,newTask) => {
    const res = await fetch(API +'/' +id,{method:'PUT',
    headers:{Accept:'application/json',"Content-Type":'application/json'},
    body: JSON.stringify(newTask)
});
}
/*
POST {{api}}
Content-Type: application/json

{
    "title":"hacer tarea",
    "description":"bla bla bla bla"
}
*/