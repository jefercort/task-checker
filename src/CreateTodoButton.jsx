import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(){
    return(
        <button className="CreateTodoButton">+</button>
    );
}


// FUNCION PARA CONTAR CLICK O CONTADOR DE ANYTHING y lo muestra en la interface

function countClicks(){
    let [contador, setContador]=React.useState(0);

    return (
        <>
            <p>
                clickeaste {contador} veces el botón
            </p>
            <button
                onClick={() => {
                    setContador(contador++)
                }}
            >Click </button>
        </>
    );
}


export {CreateTodoButton};