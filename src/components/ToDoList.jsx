import ToDoItem from "./ToDoItem";

const ToDoIList = ({ toDos, setActive, active, removeToDos }) => {
    return (
        <ul className="ul">{
            toDos.map(toDo => <ToDoItem key={toDo.id}
                setActive={setActive} active={active} 
                removeToDos={removeToDos} {...toDo} />)
        }
        </ul>
    )
}

export default ToDoIList