import './App.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import InputField from "./components/InputField";
import { addToDo } from "./components/store/todoSlice";
// import Modal from "./components/Modal";

function App() {
  const [text, setText] = useState('');
  const [descriptions, setDescriptions] = useState('')
  const dispatch = useDispatch()

const addTask = () => {
  dispatch(addToDo({descriptions, text}));
  setText('');
  setDescriptions('')
} 
  

  const removeToDos = (toDoId) => {
    // setToDos(toDos.filter(toDo => toDo.id !== toDoId) )
  }

  const toggleToDoCompleted = (toDoId) => {
    // setToDos(toDos.map(toDo => {
    //   if(toDo.id !== toDoId) return toDo;
    //   return {
    //     ...toDo,
    //     completed: !toDo.completed
    //   }
    // }))
  }
 
  return (
    <div className="App">

      <InputField text={text} descriptions={descriptions}
        handelSubmit={addTask}
        handelText={setText} handelDescriptions={setDescriptions} />
      <ToDoList  />
     
    </div>
  );
}

export default App;

