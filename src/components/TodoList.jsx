
import TodoItems from "./TodoItems"
import styles from "./todolist.module.css"

export default function TodoList({todos, setTodos}){
    const sortTodos = todos.slice().sort((a,b) =>Number(a.done)-Number(b.done))


    return(
        <div className={styles.list}>
        {sortTodos.map((item) => (
        <TodoItems key={item.name} item = {item} todos={todos} setTodos={setTodos}></TodoItems>
       ))}
        </div>
    )
}