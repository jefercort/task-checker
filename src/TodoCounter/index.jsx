import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    // DE ESTA FORMA SE USA EL useContext TRAYENDO PROPIEDADES NECESARIAS PARA USAR EN ESTE COMPLEMENTO
    // DE UNA FORMA PARECIDA AL REACT CONTEXT
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext);
    return (
      // <h1>
      //   Has completado {completed} de {total} Tareas
      // </h1>
      <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
    );
  }
  export { TodoCounter };