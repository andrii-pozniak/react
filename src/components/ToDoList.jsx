import ToDoItem from "./ToDoItem";

const ToDoIList = ({ toDos, setActive, active }) => {
    return (
        <ul className="ul">{
            toDos.map(toDo => <ToDoItem key={toDo.id}
                setActive={setActive} active={active} {...toDo} />)
        }
        </ul>
    )
}

export default ToDoIList