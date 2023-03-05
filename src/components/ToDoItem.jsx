import Modal from "./Modal";
import { useState } from "react";


const ToDoItem = ({ text, descriptions, id, removeToDos, completed, toggleToDoCompleted }) => {
    const [showModal, setShowModal] = useState(false);
    console.log("firs", {setShowModal})

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
                <input type={'checkbox'} checked={completed} onChange={() => toggleToDoCompleted(id)} />
            </div>
            <button type="button" onClick={() => removeToDos(id)}>Delete</button>
            {showModal && <Modal  toggleModal={toggleModal}
           text={text} descriptions={descriptions} statusBox={ <input type={'checkbox'} />}/>}
        
             </li>
    )
}

export default ToDoItem