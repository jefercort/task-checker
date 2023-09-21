import React from 'react'
/*import { useState } from 'react'*/
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
// import './App.css'

// rendereizado de arrays los cuales representan la informacion de los componentes
const defaultTodos = [
  {text:"Pagar los recibos", completed: false},
  {text:"Sacar a pasear las mascotas", completed: true},
  {text:"Lavar la loza", completed: true},
  {text:"Hacer meditación diaria", completed:false}
]

function App() {
  return (
    <>
    {/* <React.Fragment> = <> */}
      <TodoCounter completed={5} total={18} />
      <TodoSearch />
      <TodoList>
        {/* Para renderizar un array lo llamamos con las llaves {} y con cada informacion creada vamos a renderizar TodoItem, primero se 
        llama el array y luego a partir de ella se crea un nuevo array */}
        {/* el metodo .map a diferencia de foreach crea un array a partir del array inicial  */}
        {defaultTodos.map(todo => (
          // cada uno debe recibir un propiedad key, para que cada TodoItem tenga un identificador distinto utulizamos lo unico que podria ser diferente
          // por cada Item creado que seria text. Es decir que cada text va a ser el key diferencial por cada item creado
          <TodoItem 
            key={todo.text} 
            text ={todo.text}
            completed = {todo.completed}
          />
        ))}
        {/* nos permite renderizar arrays y por cada array  */}
      </TodoList>
      <CreateTodoButton />
    {/* </React.Fragment> = </> */}
    </>
  );
}
export default App;
