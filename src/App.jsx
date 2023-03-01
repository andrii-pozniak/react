import './App.css';
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";
import Modal from "./components/Modal";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState('');
  const [descriptions, setDescriptions] = useState('')
  const [showModal, setShowModal] = useState(false);

  const addToDo = () => {
    if (text.length && descriptions.length) {
      setToDos([
        ...toDos,
        {
          id: new Date().toISOString(),
          text,
          descriptions,
          completed: false,
        }])
      setText('')
      setDescriptions('')
    }

  };

  return (
    <div className="App">

      <InputField text={text} descriptions={descriptions}
        handelSubmit={addToDo}
        handelText={setText} handelDescriptions={setDescriptions} />
      <ToDoList toDos={toDos} setActive={setShowModal} />
      <Modal active={showModal} setActive={setShowModal}>
        <div>
          <h3>{text}</h3>
          <h3>descriptions:</h3>
          <p>{descriptions}</p>
          <h3>Status:</h3>
        </div>


      </Modal>
    </div>
  );
}

export default App;

