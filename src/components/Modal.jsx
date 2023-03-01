

const Modal = ({active, setActive, children}) => {
    return(
      <div className={active?"modal active" : "modal"}>
        <div className="modal__content">
        {children}
            <button className="btnModal" type="button"
            onClick={() => setActive(false)}>Close</button>
        </div>
       
      </div>  
    )
}

export default Modal