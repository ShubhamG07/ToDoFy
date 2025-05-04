import './styles.css'

function Header(props){
    return (
        <>
        <h1 className="title">To do List</h1>
        <div className="input-box">
        <input
          type="text"
          value={props.toDoText}
          className="to-do-input"
          onChange={(e) => props.setToDoText(e.target.value)}
          placeholder="Add a new task"
        />
        <div>
        <button className="to-do-button" onClick={props.handleAdd}>
        <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        </div>
       
      </div>
      
        </>
    )
}

export default Header 