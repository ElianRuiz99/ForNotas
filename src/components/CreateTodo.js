import React from "react";
import '../styles/CreateTodo.css';

function CreateTodo(props){

    //funcion del evento
    const onClickButton = () =>{
        props.setOpenModal(true); 
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