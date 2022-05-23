import React from "react";
import '../styles/TodoItem.css';

function TodoItem(props){

    //funciones para los botones delete y completed
    const onCompleted = () =>{
        alert('Ya completaste la tarea: ' + props.text);
    };
    const onDelete = () =>{
        alert('Eliminaste la tarea: ' + props.text);
    };

    return (
        <li className="TodoItem">

            <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={onCompleted}
            >
                ✔
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>{props.text}</p>

            <span 
            className="Icon Icon-delete"
            onClick={onDelete}
            >
                X
            </span>

        </li>
    );
}

export { TodoItem };