import React from "react";


function Todoitem(props) {
  return (
    //When the prop is an event handler, the event gets passed through the parameter, use arrow function to pass in id through the onChange method. 
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.chore.completed} onChange={(event) => props.onChange(props.chore.id)}
      />
      <span>{props.chore.text}</span>
    </div>
  );
}

export default Todoitem;
