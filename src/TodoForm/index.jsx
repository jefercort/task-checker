import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

// Lo primero creamos el componente
function TodoForm() {
    // vamos a agregar el contexto a nuestro formilario
    // para eso vamos a llamar unas propiedades que vienen en forma de objeto y de aqui tomamos
    // las propiedades que estemos necesitando
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext);

    // VAMOS A CREAR UN NUEVO ESTADO LOCAL NO GLOBAL
    // LO CREAMOS ACA Y NO EL TODOCONTEXT PORQUE EL CONTEXTO NO ES NECESARIO SABER QUE ESCRIBEN EN TIEMPO REAL 
    // LOS USUARIOS SI NO QUE CUANDO LE DEN CLICK EN EL BOTON DE AÑADIR EN ESE MOMENTO AHI SI SEPA EL TEXTO QUE ESCRIBIERON 
    // LOS USUARIOS PORQUE YA ESTAN SEGUROS DE LO QUE QUIEREN AÑADIR

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) =>{
        // preventDefault es un metodo que cuando lo ejecutamos evita que cuando se
        // dispare el evento la pagina se recargue y el formulario haga su accion por defecto
        event.preventDefault();
        // CUANDO FUNCIONE EL SUBMIT AHI SI NOS CONECTAMOS AL CONTEXTO GLOBAL DE LA APLICACION PARA LLAMAR ALA FUNCION ADDTODO
        // PARA ENVIARLE CUAL ES EL NUEVO VALOR QUE QUEREMOS GUARDAR EN NUESTRA APLICACION 
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () =>{
        setOpenModal(false);
    }

    // VAMOS A CREAR UNA NUEVA FUNCIO ON CHANGE Y SE VA A ENCAGAR DE RECIBIR UN EVENTO QUE ES EL QUE VAMOS A GUARDAR EN EL ESTADO LOCAL 

    const onChange = () =>{
        setNewTodoValue(event.target.value);
    }

    return(
        // lo que hacemos con el onsubmit es que controlamos que los datos 
        // recopilados por el formulario no se vayan a una url X o a otro lugar si 
        // no que se quede en el localStorage  
        <form onSubmit = {onSubmit}>
            <label>Escribe tu nueva Tarea</label>
            <textarea 
                placeholder="Ingresa la tarea que tiene pendiente por hacer"
                // ACA TOMA EL VALOR Y LO GUARDA EN EL NUEVO ESTADO newTodoValue
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                // debemos ponerle type a los botones que estan dentro de un formulario
                // porque lo que pasa es que si no le ponemos el type JS va a interpretar
                // que es de tipo submit
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel" 
                    // aca le mandamos la funcion on cancel al evento onclick del boton cancelar
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add" 
                >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm }