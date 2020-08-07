import React from "react";

//class based component
class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    /*Then, replace every this.props.todo with their corresponding variables. 
    For instance, this.props.todo.completed should be replaced with completed and so on.*/

    const { completed, id, title } = this.props.todo;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}

export default TodoItem;

//functional component
/*
function TodoItem(props) {
  return <li>{props.todo.title}</li>;
}

export default TodoItem; */
