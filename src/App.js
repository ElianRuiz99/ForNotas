import React from "react";
//componentes 
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodo } from "./components/CreateTodo";
// import './App.css';

const defaultActivities = [
  {text: 'fgfgf', completed: true},
  {text: 'descripcion1', completed: false},
  {text: 'texto', completed: false},
];


function App() {

  //Estado actividades
  const [activities, setActivities] = React.useState(defaultActivities);

  //Estado TodoSearch
  const [searchValue, setSearchValue] = React.useState('');

  //Contador de actividades
  const completedActivities = activities.filter(todo => !!todo.completed).length;
  const totalActivities = activities.length;

  //filtrar actividades
  let searchedActivities = [];
  if(!searchValue.length >= 1){
    searchedActivities = activities;
  }else{
    searchedActivities = activities.filter(todo =>{
      //texto para la comparacion
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      
      return todoText.includes(searchText);
    })
  }

  //completar actividad, marcar actividad
  const completeActivity = (texto) => {
    //obtener index de la actividad
    const activityIndex = activities.findIndex(activity => activity.text == texto);

    //Crear un nuevo array de actividades
    const newActivities = [...activities];

    //marcar la propiedad de completed
    newActivities[activityIndex].completed = true;
    
    //actualizamos el estado
    setActivities(newActivities);
  }

  //Eliminar actividad
  const deleteActivity = (texto) => {
    //obtener index de la actividad
    const activityIndex = activities.findIndex(activity => activity.text == texto);

    //Crear un nuevo array de actividades
    const newActivities = [...activities];

    //eliminar
    newActivities.splice(activityIndex, 1);
    
    //actualizamos el estado
    setActivities(newActivities);
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalActivities}
        completedActivities={completedActivities}
      />

        <TodoSearch 
          serchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        
        <TodoList>
          {searchedActivities.map( activity => (
            <TodoItem 
              key={activity.text} 
              text={activity.text} 
              completed={activity.completed}
              onCompleted={() => completeActivity(activity.text)}
              onDelete={() => deleteActivity(activity.text)}
            />
          ))}
        </TodoList>

        <CreateTodo />
    
    </React.Fragment>
  );
}

export default App;
