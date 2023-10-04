import React from 'react'
/*import { useState } from 'react'*/
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
// import './App.css'

// rendereizado de arrays los cuales representan la informacion de los componentes

/*const defaultTodos = [
  {text:"Pagar los recibos", completed: false},
  {text:"Sacar a pasear las mascotas", completed: true},
  {text:"Lavar la loza", completed: false},
  {text:"Hacer meditación diaria", completed:false}
]*/



function App() {
  /* lO PRIMERO ES CREAR UNA CONSTANTE PARA REVISAR EL LOCALSTORAGE*/
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  /* LO SEGUNDO QUE VA A HACER LA APP ES PARSEAR PARA PODERLO UTILIZAR YA QUE CONVIERTE
  DE STRING A CODIGO JS */
  let parsedTodos = JSON.parse(localStorageTodos);
  /* LUEGO DE REVISAR, A PARTIR DE ESO CARGA LO QUE HAYA Y DESDE AHI SE EMPIEZA A TRABAJAR */
  const [todos, setTodos] = React.useState(parsedTodos);

  /* ESTE ES PARA CUANDO EL ESTADO INICIAL SEA EL defaultTodos
  const [todos, setTodos] = React.useState(defaultTodos); */


  const [searchValue, setSearchValue] = React.useState('');
  // estos nos van a permitir saber la suma de items con estado complete true or false, la doble negacion (!!) convierten todo en valor booleano por eso lo usamos
  const completedTodos = todos.filter(todo => !!todo.completed).length;  
  // para sumar todos los items o arrays que se suman 
  const totalTodos = todos.length;
  // para poder hacer el filtro de los items que sean escritos en el buscador, con esta funcion 
  // sabremos si el text declarado en searchValue contiene algo del o dicho 
  // para que el filtro funcione con mayusculas y minusculas en la validación pondremos
  // todo como si fuera en minuscula para ello usamos .toLowerCase
  const searchedTodos = todos.filter(
    (todo)=> {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
      // todo.text.toLowerCase().includes(searchValue.toLowerCase())});
    }
  );
  // vamos a crear una funcion actualizadora del estado a partir de setTodos 
  const completeTodo = (text) => {
    // usamos el operador de los tres puntos dentro del array para crear una copia de los todos
    // tenemos una copia de los array de todos
    const newTodos = [...todos];
    // acá utilizamos la propiedad .find y no .filter porque no necesitamos un nuevo array necesitamos un objeto especifico
    // por ello creamos la variable todoIndex y hace la validacion necesaria para saber cual es el "todoS"
    // que tiene el texto en particular que estamos buscando
    const todoIndex = newTodos.findIndex(
      // desarrollamos la logica y creamos una funcion que identifique el texto que buscamos en particular
      // para ello desarrollamos una funcion que reciba a cada uno de los "todos"  y cada uno de los todos va a 
      // tener una propiedad .text.. si todo.text es igual al texto que estamos recibiendo de la funcion completeTodo
      // entonces ese sera el que eligirá la funcion para marcarlo como comlpetado y enviar la nueva lista de todos al 
      // actualizador setTodos
      (todo) => todo.text == text
    );    
    // ahora sabremos cual es el item que queremos modificar que tengan la propiedad true
    newTodos[todoIndex].completed = true
    setTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    // el metodo .splice nos pide una posicion especifica donde poner el cuchillo como la analogia 
    // del pan tajado por ello usamos dos parametros, el indice y el segundo parametro es la cantidad
    // de tajas que deseas quitar
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };



  // console.log('Todos los usuarios estan buscando ' + searchValue);
  return (
    <>
    {/* <React.Fragment> = <> */}
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}
      />
      <TodoSearch
        // aca se genera la comunicacion del componente padre al componente hijo que en este caso es TodoSearch.jsx
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {/* Para renderizar un array lo llamamos con las llaves {} y con cada informacion creada vamos a renderizar TodoItem, primero se 
        llama el array y luego a partir de ella se crea un nuevo array */}
        {/* el metodo .map a diferencia de foreach crea un array a partir del array inicial  */}

        {/* {defaultTodos.map(todo => ( */}

        {/* ya no vamos a usar defaultTodos en vez de eso usamos el searchedTodos que es un estado derivado
        del primer array de todos del searchValue  */}
        {searchedTodos.map(todo => (

          // cada uno debe recibir un propiedad key, para que cada TodoItem tenga un identificador distinto utulizamos lo unico que podria ser diferente
          // por cada Item creado que seria text. Es decir que cada text va a ser el key diferencial por cada item creado
          <TodoItem 
            key={todo.text} 
            text ={todo.text}
            completed = {todo.completed}
            // la funcion completeTodo es la que va a generar todo el calculo
            // para que no nos genere error debemos envolver la funcion en otra funcion
            // para poder ejecutar la primer funcion  la que necesita los parametros 
            // pero no una funcion que ya este ejecutada porque react se va crashear
            onComplete = {() => completeTodo(todo.text)}
            // utilizamos 
            onDelete = {() => deleteTodo(todo.text)}
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
