import React from "react";
import '../styles/TodoCounter.css';

function TodoCounter({total, completedActivities}){
    return(
        <h2 className="TodoCounter-h2">Has Completado {completedActivities} de {total} Actividades</h2>
    );
}

export { TodoCounter } ;