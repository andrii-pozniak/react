import Modal from "./Modal";
import { useState } from "react";


const ToDoItem = ({ text, descriptions, id }) => {
    const [showModal, setShowModal] = useState(false);
    console.log("firs", {setShowModal})

    const toggleModal = () =>{
        setShowModal(!showModal)
    }

    return (
        <li className="li" onClick={toggleModal} >
            <div>
                <h4>ID</h4>
                <span>{id}</span>
            </div>
            <div>
                <h4>TITLE</h4>
                <span>{text}</span>
            </div>
            <div>
                <h4>DESCRIPTION</h4>
                <span>{descriptions}</span>
            </div>
            <div>
                <h4>STATUS</h4>
                <input type={'checkbox'} />
            </div>
            {showModal && <Modal  toggleModal={toggleModal}
           text={text} descriptions={descriptions} statusBox={ <input type={'checkbox'} />}/>}
       /     {/* <div>
        //         <h3>{text}</h3>
        
        //   <h3>descriptions:</h3>
        //   <p>{descriptions}</p>          
            
        //   <h3>Status:</h3>
         </div> */}
            
             </li>
    )
}

export default ToDoItem