import './TodoCounter.css'

function TodoCounter({ total, completed }){
    return (
      // <h1>
      //   Has completado {completed} de {total} Tareas
      // </h1>
      <h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOs</h1>
    );
  }
  export { TodoCounter };