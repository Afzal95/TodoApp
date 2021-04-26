import { useState } from "react";
import { TodoList } from "./TodoList";
import {v4 as uuid} from "uuid";
import { TodoInput } from "./TodoInput";
import styles from "./Todo.module.css";

function Todo(){

    const [item,setItem] = useState("");
    const [todo,setTodo] = useState([]);
    const [show,setShow] = useState(false);

    const handleClick=()=>{
        if(item.trim()=="" || item==undefined){
            return alert("Add something...")
        }

        setTodo([...todo,{
            item,
            status:false,
            id:uuid()
        }]);
        setItem("")
    }

    const deleted=(id)=>{
        const del = todo.map(el=>el.id===id?{...el,status:!el.status}:el);
        setTodo(del);
    }
    const handleshow=()=>{
        setShow(!show);
    }
    const handleChange=(e)=>{
        setItem(e.target.value);
    }
    const deleteing=(id)=>{
        const filtered = todo.filter(item=>item.id!==id);
        setTodo(filtered);
    }

    return <div>
    <TodoInput item={item} handleClick={handleClick} handleChange={handleChange} />
    {todo.map(el=>{
        return <TodoList key={el.id} item={el} id={el.id} deleted={deleted} deleting={deleteing} />
    })}

    {todo.length>0 && <button className={styles.btn} style={{backgroundColor:`${show?"#0a6783":"rgb(7, 121, 67)"}`}} onClick={handleshow}>{show?"Hide Completed Tasks":"Show completed Tasks"}</button>}
    {show && 
        todo.filter(el=>el.status).map(el=>{
            return <h3 className={styles.div} >{el.item}</h3>
        })
    }

    </div>
}

export {Todo};