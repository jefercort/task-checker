import React from 'react'
/*import { useState } from 'react'*/

/* PARA IMPORTAR UNA CARPETA UN NIVEL ATRÁS USAMOS LA NOMENCLATURA DE DOS PUNTOS PARA 
DEVOLVERNOS UNA CARPETA USAMOS ".." EJEMPLO import { TodoCounter } from '../TodoCounter' */
// import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';
// import './App.css' 

// rendereizado de arrays los cuales representan la informacion de los componentes

/* VAMOS A CREAR UNA CUSTOM HOOK y ahi vamos a incluir todo lo relacionado al localStorage 
por ello siempre que vayamos a crear una custom hook el nombre de la funcion debe empezar por "use"*/App

function App() {
  return (

    // ESTOY ENVIANDO MI COMPONENTE APPUI COMO CONTENIDO DEL CONTEXTO DE TodoProvider
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

// ESTO SE HACE SI SE IMPORTAN PROPS DE OTROS COMPONENTES
// function App() {
//   return (
//     /* PARA QUE NOS LLEGUEN AL COMPONENTE APPUI Y SE LO ENVIAMOS POR ACA LA PROPIEDAD */
//     <AppUI 
//       loading={loading}
//       error={error}
//       completedTodos = {completedTodos}
//       totalTodos = {totalTodos}
//       searchValue = {searchValue}
//       setSearchValue = {setSearchValue}
//       searchedTodos = {searchedTodos}
//       completeTodo = {completeTodo}
//       deleteTodo = {deleteTodo}
//     />
//   );
// }

export default App;
