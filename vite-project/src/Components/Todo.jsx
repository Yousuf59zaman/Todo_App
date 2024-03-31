import { useEffect } from 'react';
import './CSS/Todo.css'
import { useRef, useState } from 'react'
import TodoItems from './TodoItems';


let count = 0;
const Todo = () => {

   const [todos, setTodos] = useState([]);
   const inputRef= useRef(null);

   const add=()=>{
       setTodos([...todos, {no:count++, text:inputRef.current.value , display: ""}])
       inputRef.current.value = "";
    }

   useEffect(()=>{
       setTodos(JSON.parse(localStorage.getItem("todos")));
   },[])

   useEffect(()=>{
    setTimeout(()=>{
       console.log(todos);
       localStorage.setItem("todos",JSON.stringify(todos));
    },100)
   },[todos])

  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
          <input type="text" ref={inputRef} placeholder="Add To-Do Task" className="todo-input" />
          <button onClick={()=>add()} className="todo-add-btn">ADD</button>
        </div>
        <div className="todo-list">
             {todos.map((item,index)=>{
                 return <TodoItems key={index} setTodos={setTodos} no={item.no} text={item.text} display={item.display}/>
             })}
        </div>
    </div>
  )
}

export default Todo
