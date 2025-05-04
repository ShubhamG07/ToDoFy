import { useState } from "react";
import "./styles.css";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(props.todo.text);
  const [taskCompleted, setTaskCompleted] = useState(false);

  function handleCompleted() {
    taskCompleted ? setTaskCompleted(false) : setTaskCompleted(true);
  }

  function handleSaveEdit() {
    if(editText.trim()){
    props.handleEdit(props.todo.id, editText);
    setIsEditing(false);
    }
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit Task"
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          {taskCompleted ? (
            <span>
              <del> {props.todo.text}</del>
            </span>
          ) : (
            <span>{props.todo.text}</span>
          )}
          <span>
            <button onClick={handleCompleted}>
              <i className="fa fa-check" aria-hidden="true"></i>
            </button>
            <button onClick={() => setIsEditing(true)}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button onClick={() => props.handleDelete(props.todo.id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
          </span>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
