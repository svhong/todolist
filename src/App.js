import React from "react";

import Todoitem from "./components/Todoitem.js";
import todoData from "./todoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
  };
  render() {
    const todos = this.state.todos.map(chore => <Todoitem key={chore.id} chore={chore} />)
    return (
      <div className="todo-list">
        {todos}
      </div>
    )
  }
};

// function App() {
//   const chores = todoData.map(chore => <Todoitem chore={chore} />);
//   return (
//     <div className="todo-list">
//       {chores};
//     </div>
//   );
// }

export default App;
