import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  // console.log('Todos los usuarios estan buscando ' + searchValue);
  return (
    <>
    {/* <React.Fragment> = <> */}
      <TodoCounter />
      <TodoSearch
        // aca se genera la comunicacion del componente padre al componente hijo que en este caso es TodoSearch.jsx
        // searchValue = {searchValue}
        // setSearchValue = {setSearchValue}
      />
      {/* ASI ES COMO EL COMPONENTE TODO LIST PUEDE ACCEDER A TODAS LAS PROPIEDADES QUE NECESITA PARA 
      PODER TRABAJAR, LLAMANDO A TODOCONTEXT COMO UN COMPONENTE  */}

      {/* TODOS LOS CONSUMER TIENEN UN PATRO DE RENDER QUE SE LLAMAN LAS RENDERPROPS QUE LO QUE ESPERAN NO ES EL COMPONENTE
      PARA SABER QUE TRABAJAR, LO QUE ESPERA ES UNA FUNCION  */}
        {/* ACA LO QUE ESTAMOS HACIENDO ES UN RETURN DENTRO DE OTRO RETURN Y ACA LLAMAMOS TODAS LAS PROPIEDADES NECESARIOAS DENTRO DE TODO 
        LIST*/}
      <TodoList>
        {/* /* Estados de carga y error */}
        {loading && 
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />          
          </>        
        }
        {error && <TodosError />}

        {/* PARA QUE SE EJECUTE EL ESTADO DE CARGA CON UN CONDICIONAL */}

        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
        {/* Por dentro del Modal debe ir toda la logica y componentes que quiero teletransportar entre nodos de HTML */}
        {/* Por medio de estados creamos uno con el cual por medio de true or false se active o desactive el portal */}
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    {/* </React.Fragment> = </> */}
    </>
  );
}   
export { AppUI };