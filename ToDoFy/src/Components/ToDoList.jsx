import ToDoItem from "./ToDoItem";
import "./styles.css";

function ToDoList(props) {
  return (
    <ol className="list-todo">
      {props.toDos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
        />
      ))}
    </ol>
  );
}

export default ToDoList;
