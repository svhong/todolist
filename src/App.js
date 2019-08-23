import React, { Component } from "react";

// import Todoitem from "./components/Todoitem.js";
// import todoData from "./todoData";

export default class App extends Component {
  render() {
    return (
      <div>
        This is the app component
      </div>
    )
  }
}



// function App() {
//   const chores = todoData.map(chore => <Todoitem chore={chore} />);
//   return (
//     <div className="todo-list">
//       {chores};
//     </div>
//   );
// }

  // constructor() {
  //   super();
  //   this.state = {
  //     todos: todoData
  //   };
  //   this.handleChange = this.handleChange.bind(this);

  // };

  // handleChange(id) {
  //   this.setState((prevState) => {
  //     const updatedTodos = prevState.todos.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     });
  //     return {
  //       todos: updatedTodos
  //     }
  //   })
  // }

  // render() {
  //   const todos = this.state.todos.map(chore => 
  //     <Todoitem 
  //       key={chore.id} 
  //       chore={chore} 
  //       onChange={this.handleChange} 
  //     />)
  //   return (
  //     <div className="todo-list">
  //       {todos}
  //     </div>
  //   );
  // };


