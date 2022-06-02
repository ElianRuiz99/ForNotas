import React from "react";
//componentes 
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodo } from "./components/CreateTodo";
// import './App.css';
//importar hooks
import {useLocalStorage} from "./hooks/useLocalStorage";
//importar modal
import {Modal} from "./modal/Modal";

// const defaultActivities = [
//   {text: 'fgfgf', completed: true},
//   {text: 'descripcion1', completed: false},
//   {text: 'texto', completed: false},
// ];

function App() {

  const {
    item: activities,
    saveItem: saveActivities,
    loading,
    error
  } = useLocalStorage('TODO_V1', []);

  //Estado TodoSearch
  const [searchValue, setSearchValue] = React.useState('');

  //Estado Modal
  const [openModal, setOpenModal] = React.useState(false);

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
    const activityIndex = activities.findIndex(activity => activity.text === texto);

    //Crear un nuevo array de actividades
    const newActivities = [...activities];

    //marcar la propiedad de completed
    newActivities[activityIndex].completed = true;
    
    //actualizamos el estado
    saveActivities(newActivities);
  }

  //Eliminar actividad
  const deleteActivity = (texto) => {
    //obtener index de la actividad
    const activityIndex = activities.findIndex(activity => activity.text === texto);

    //Crear un nuevo array de actividades
    const newActivities = [...activities];

    //eliminar
    newActivities.splice(activityIndex, 1);
    
    //actualizamos el estado
    saveActivities(newActivities);
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
          {error && <p>Hubo un Error!!!!!!</p>}
          {loading && <p>Estamos Cargado la Información</p>}
          {(!loading && !searchedActivities.length) && <p>¡¡¡Crea Tu Primer Todo!!!</p>}

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

        {!!openModal && (
          <Modal
            setOpenModal={setOpenModal}
          >
            <p>Teletrasportacion</p>
        
          </Modal>
        )} 
         
        <CreateTodo 
          setOpenModal={setOpenModal}
        />
    
    </React.Fragment>
  );
}

export default App;