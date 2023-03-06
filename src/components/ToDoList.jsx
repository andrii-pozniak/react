import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const ToDoIList = ({ setActive, active}) => {
    const toDos = useSelector(state => state.toDos.toDos );
    console.log(toDos)

    return (
        <ul className="ul">{
            toDos.map(toDo => <ToDoItem key={toDo.id}
                setActive={setActive} active={active} 
                 {...toDo} 
                />)
        }
        </ul>
    )
}

export default ToDoIList