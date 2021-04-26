import styles from "./TodoList.module.css";

 function TodoList({item,deleted,deleting,id}){
     return <div className={styles.div}>
               <div style={{margin:"20px"}}>
               <input style={{width:"20px",height:"20px"}} onChange={()=>deleted(id)} type="checkbox" /> 
               </div>
               <div>
               <h3 className={`${item.status?styles.strike:""}`}>{item.item}</h3>
               </div>
               <button className={styles.btn} onClick={()=>deleting(id)}>remove</button>
            </div>
 }

 export {TodoList};
