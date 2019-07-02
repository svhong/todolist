import React from "react";

import Todoitem from "./components/Todoitem.js";
import todoData from "./todoData";

function App() {
  const chores = todoData.map(chore => <Todoitem chore={chore} />);
  return (
    <div className="todo-list">
      {chores};
    </div>
  );
}

export default App;
