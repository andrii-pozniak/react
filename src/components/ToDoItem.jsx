

const ToDoItem = ({ text, descriptions, id, setActive }) => {
    return (
        <li className="li" onClick={() => setActive(true)}>
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
        </li>
    )
}

export default ToDoItem