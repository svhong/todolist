import React from "react";


const Todoitem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  return (
    //When the prop is an event handler, the event gets passed through the parameter, use arrow function to pass in id through the onChange method. 
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.chore.completed} onChange={(event) => props.onChange(props.chore.id)}
      />
      <span style={props.chore.completed ? completedStyle : null}>{props.chore.text}</span>
    </div>
  );
}

export default Todoitem;
