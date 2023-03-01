import ToDoItem from "./ToDoItem";

const ToDoIList = ({ toDos, setActive }) => {
    return (
        <ul className="ul">{
            toDos.map(toDo => <ToDoItem key={toDo.id}
                setActive={setActive} {...toDo} />)
        }
        </ul>
    )
}

export default ToDoIList