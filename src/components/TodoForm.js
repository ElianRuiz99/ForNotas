import React from "react";

//css
import "../styles/TodoForm.css";


function TodoForm({addActivity, setOpenModal}){

    //Estado del input
    const [inputValue, setInputValue] = React.useState('');
    //tomar el valor del textarea
    const onChange = (evento) => {
        setInputValue(evento.target.value);
    };

    //cancelar modal o actividad
    const onCancel = () => {
        setOpenModal(false);
    };
    //gusardar actividad
    const onSubmit = (event) => {
        event.preventDefault(); //No se recarga la pagina
        addActivity(inputValue);
        setOpenModal(false);
    };

    return(
       <form onSubmit={onSubmit} className="form-create-todo">
           <label className="label-form">Escribe tu nueva activida!!</label>
           <textarea
                required 
                placeholder="Actividad a realizar...."
                value={inputValue}
                onChange={onChange}
           />
           <div className="buttonsContainer">
               <button type="button" onClick={onCancel} className="form-button cancel">Cancelar</button>
               <button type="submit" className="form-button submit">Añadir</button>
           </div>
       </form>
    );
}

export {TodoForm}