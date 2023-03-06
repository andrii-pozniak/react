import Modal from "./Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleToDoCompleted, removeToDos  } from "./store/todoSlice";


const ToDoItem = ({ text, descriptions, id, completed }) => {
    console.log("first", completed)
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const toggleModal = () =>{
        setShowModal(!showModal)
    }

    return (
        <li className="li" onClick={toggleModal} >
            <div>
                <h4 className="text">ID</h4>
                <span>{id}</span>
            </div>
            <div>
                <h4 className="text">TITLE</h4>
                <span>{text}</span>
            </div>
            <div>
                <h4 className="text">DESCRIPTION</h4>
                <span>{descriptions}</span>
            </div>
            <div>
                <h4 className="text">STATUS</h4>
                <input type={'checkbox'} checked={completed} onChange={() => dispatch(toggleToDoCompleted({id}))} />
            </div>
            <button type="button" onClick={() => dispatch(removeToDos({id}))}>Delete</button>
            {showModal && <Modal  toggleModal={toggleModal}
           text={text} descriptions={descriptions} statusBox={ <input type={'checkbox'} />}/>}
        
             </li>
    )
}

export default ToDoItem