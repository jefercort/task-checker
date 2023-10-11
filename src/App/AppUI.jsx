import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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
        {/* /* Estados de carga y error */}
        {loading && <p>Estamos Cargando ...</p>}
        {error && <p>Tenemos un error de Carga</p>}

        {/* PARA QUE SE EJECUTE EL ESTADO DE CARGA CON UN CONDICIONAL */}

        {(!loading && searchedTodos.length == 0) && <p>Crea tu Primer TODO!!</p>}

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
export { AppUI };