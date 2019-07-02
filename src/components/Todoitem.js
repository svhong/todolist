import React from "react";

function Todoitem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.chore.completed} />
      <span>{props.chore.text}</span>
    </div>
  );
}

export default Todoitem;
