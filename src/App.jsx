import './App.css';
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";
// import Modal from "./components/Modal";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState('');
  const [descriptions, setDescriptions] = useState('')
  // const [showModal, setShowModal] = useState(false);

  const addToDo = () => {
    if (text.length && descriptions.length) {
      setToDos([...toDos,
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

  const removeToDos = (toDoId) => {
    setToDos(toDos.filter(toDo => toDo.id !== toDoId) )
  }
 
  return (
    <div className="App">

      <InputField text={text} descriptions={descriptions}
        handelSubmit={addToDo}
        handelText={setText} handelDescriptions={setDescriptions} />
      <ToDoList toDos={toDos} removeToDos={removeToDos} />
     
    </div>
  );
}

export default App;

