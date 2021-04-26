import styles from "./TodoInput.module.css";

function TodoInput({item,handleClick,handleChange}){

    return <div className={styles.div}>
        <input className={styles.inp} type="text" value={item} placeholder="start adding.." onChange={handleChange} />
        <button className={styles.btn} onClick={handleClick}>+</button>
    </div>
}

export {TodoInput}