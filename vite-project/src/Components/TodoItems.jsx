import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from './Assets/cross.png'

const TodoItems = ({no, text, display, setTodos}) => {

   const toggle=()=>{
       let data= JSON.parse(localStorage.getItem('todos'));
       for(let i=0;i<data.length;i++){
           if(data[i].no==no){
               if(data[i].display===""){
                   data[i].display="line-through";
               }else{
                   data[i].display="";
               }
               break;
           }
      }
      setTodos(data);
    }

    const deleteTodo=(no)=>{
        let data= JSON.parse(localStorage.getItem('todos'));
        data=data.filter(item=>item.no!=no);
        setTodos(data);
    }

  return (
    <div className='todoitems'>
        <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
          {display===""?<img src={not_tick} alt="" /> :<img src={tick} alt="" /> }
         
            <div className="todoitems-text">
                 {text}
            </div>
        </div>
        <img className="todoitems-crossicon" onClick={()=>{deleteTodo(no)}} src={cross} alt="" />
    </div>
  )
}

export default TodoItems
