import React from "react";
//componentes 
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodo } from "./components/CreateTodo";
// import './App.css';

const activities = [
  {text: 'fgfgf', completed: true},
  {text: 'descripcion1', completed: false},
  {text: 'texto', completed: false},
];


function App() {
  return (
    <React.Fragment>
      <TodoCounter />

        <TodoSearch />
        
        <TodoList>
          {activities.map( activity => (
            <TodoItem 
              key={activity.text} 
              text={activity.text} 
              completed={activity.completed}
            />
          ))}
        </TodoList>

        <CreateTodo />
    
    </React.Fragment>
  );
}

export default App;
