import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

// CREAMOS NUESTRO PROPIO PROVIDER PARA PODER TENER TRES BENEFICIOS
// 1. Que el nombre sea mucho mas comodo
// 2. A la hora de exportarlo queda mas facil para nombrarlo y organizarlo
// 3. Dentro del provider podemos encapsular la logica de la aplicacion que querramos compartir en los diferentes niveles de lo componentes

function TodoProvider({children}) {

  /*EMPEZAMOS A USAR EN VEZ DE REACT.USESTATE USAMOS NUESTRO CUSTOM HOOK CREADO PARA QUE TRAIGA 
  LOS ELEMENTOS QUE NECESITAMOS DEFINIMOS EL NOMBRE DEL ESPACIO DONDE GUARDAMOS 
  PERO TAMBIEN GUARDAMOS EL ESTADO INICIAL */

  /* LO SEGUNDO QUE VA A HACER LA APP ES PARSEAR PARA PODERLO UTILIZAR YA QUE CONVIERTE
  DE STRING A CODIGO JS */
//  let parsedTodos = JSON.parse(localStorageTodos);
  /* LUEGO DE REVISAR, A PARTIR DE ESO CARGA LO QUE HAYA Y DESDE AHI SE EMPIEZA A TRABAJAR */
    const {
        /*SINTAXIS PARA RENOMBRAR PROPIEDADES DE UN OBJETO ":"*/
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

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
        (todo) => todo.text === text
        );    
        // ahora sabremos cual es el item que queremos modificar que tengan la propiedad true
        newTodos[todoIndex].completed = true
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
        );
        // el metodo .splice nos pide una posicion especifica donde poner el cuchillo como la analogia 
        // del pan tajado por ello usamos dos parametros, el indice y el segundo parametro es la cantidad
        // de tajas que deseas quitar
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    // ACA ENCAPSULAMOS Y PONEMOS TODOS LOS COMPONENTES QUE NECESITEMOS   
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {/* CUALQUIER COMPONENTE QUE ESTE AQUI DENTRO TIENE LA POSIBILIDAD DE OBTENER INFORMACION DE
            TODAS LAS PROPIEDADES MENCIONADAS ARRIBA */}
          {children}
        </TodoContext.Provider>
    );
}
export { TodoContext, TodoProvider };