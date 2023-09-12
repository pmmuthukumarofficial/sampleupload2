import './MyToDo.css';
import {useState} from 'react'

function MyToDo(){

   const [toDoList, setToDoList] = useState([]);
   const [newTask, setNewTask] = useState("");

   const updateText = (event)=>{
    setNewTask(event.target.value);
   }

   const addNewTask= () =>{
    const task ={
        id: toDoList.length ===0 ? 1: (toDoList.length)+1,
        taskName:newTask,
     }

    setToDoList([...toDoList, task]);

    }

   const deleteTask = (id) =>{
    const newToDo = toDoList.filter( (task) => {
        if(task.id === id)
            return false
        else 
           return true
    })

    // const deleteTask = (id) =>{
    //     const newToDo = toDoList.filter( (task) =>  task.id !== id )

    setToDoList(newToDo);
   }
   
    return (       
        
        <div className='my-todo'>
            <div className='add-task'>
                <input onChange={updateText} /> 
                <button onClick={addNewTask}>AddTask</button> 
            </div>
            <div className='list'>
                {
                    toDoList.map((t) => {
                        return <div className='task'>
                                    <h4> {t.taskName}</h4>
                                    <button onClick={() => deleteTask(t.id)}>Delete</button>
                                </div>
                    })
                }
            </div>
        </div>
    );
}

export default MyToDo; 