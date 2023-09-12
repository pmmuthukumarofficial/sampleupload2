
import './Header.css';
import { useState } from 'react';

function Header() {
    const [toDoList, setToDo] = useState([]);
    const [newTask, setNewTask] = useState("");

    const updateTask = (event) =>{
        setNewTask(event.target.value);
    }

    const addTask = ()=>{  
      const task = {
        id: toDoList.length === 0 ? 1 : toDoList[toDoList.length-1].id+1,
        taskName: newTask,
      }    
      setToDo( [...toDoList, task]);
    }

    const deleteTask = (id) =>{
        const newtoDo = toDoList.filter((task) =>{
          if(task.id === id)
            return false
          else
            return true
        })

        setToDo(newtoDo)
    }

  return (
    <div className='App'>
      <div className='myToDo'>
        <div className='task'>
            <input type="text" onChange={updateTask}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list'>
           
              {toDoList.map((task)=>{
                return <div style={{display:'flex', justifyContent:'center' }}>
                         <h4>{task.id}  {task.taskName} </h4>
                         <button onClick={() => deleteTask(task.id)}>X</button>
                       </div>
              })}
            
        </div>
      </div>

    </div>
  );


}

export default Header;


