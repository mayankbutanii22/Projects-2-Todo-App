import AppName from "./Component/AppName.jsx";
import AddTodo from "./Component/AddTodo.jsx";
import TodoItems from "./Component/TodoItems.jsx";

import './App.css';

function App() {

  const todoItems = [
    {
      name:"Buy Milk",
      dueDate:"4/10/2023"
    },
    {
      name:"Go to College",
      dueDate:"4/10/2023"
    },
    {
      name:"Like this video",
      dueDate:"right now"
    },
  ];

  return <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}/>
</center>

}

export default App
