import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch(){

    //Evento para el imput
    const onSearchValueChange = (event) =>{
        console.log(event.target.value)
    }

    return (
        <input 
        className="TodoSearch" 
        placeholder="Buscar Nota" 
        onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };