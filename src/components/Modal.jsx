

const Modal = ({ toggleModal,   text, descriptions, statusBox }) => {
    // console.log("setActive", {setActive})
    // console.log(first)

   
    
    return(
      <div  className="modal">
        <div className="modal__content">
        <h3>{text}</h3>
        
        <h3>descriptions:</h3>
        <p>{descriptions}</p>          
          
        <h3>Status:</h3>
        {statusBox}
            <button className="btnModal" type="button"
            onClick={toggleModal}>Close</button>
        </div>
      
      </div>  
    )
}

export default Modal