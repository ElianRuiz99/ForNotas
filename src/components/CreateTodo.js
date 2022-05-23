import React from "react";
import '../styles/CreateTodo.css';

function CreateTodo(){

    //funcion del evento
    const onClickButton = () =>{
        alert('aqui va el modal')
    }
    return(
        <button 
        className="CreateTodoBtn"
        onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodo };