import React from "react";
import '../styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

    //Evento para el input
    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
        className="TodoSearch" 
        placeholder="Buscar Nota" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };