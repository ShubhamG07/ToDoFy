import { useState } from "react";
import Header from "./Components/Header";
import "./Components/styles.css";
import ToDoList from "./Components/ToDoList";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDoText, setToDoText] = useState("");

  function handleAdd() {
    if (toDoText.trim()) {
      setToDos([...toDos, { id: Date.now(), text: toDoText }]);
      setToDoText("");
    }
  }

  function handleDelete(id){
    setToDos(toDos.filter(todo=>todo.id !==id))
  }

  function handleEdit(id,updatedText){
    const updatedToDo= toDos.map(todo=>
      todo.id===id?{...todo, text:updatedText}:todo
    );
    setToDos(updatedToDo);
  }

  return (
    <div className="todo-container">
      <Header toDoText={toDoText} setToDoText={setToDoText} handleAdd={handleAdd} />
      
      <ToDoList toDos={toDos} handleEdit={handleEdit} handleDelete={handleDelete}  />
    </div>
  );
}

export default App;
