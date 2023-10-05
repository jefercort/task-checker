/* El "as" lo usamos para renombrar los componentes importador para que cuando sean varios archivos no 
nos genere error al ser importados para su uso */
// import { ReactComponent as CheckSVG } from './icons/check.svg';
//ESTE REACTCOMPONENT NO FUNCIONÓ PORQUE EL FRAMEWORK QUE SE USÓ FUE CREATE-REACT-APP Y EN ESTE PROYECTO ESTOY USANDO VITE

// import { ReactComponent as CheckSVG } from './icons/check.svg';
// import { ReactComponent as DeleteSVG } from './icons/delete.svg';

// ESTA ES LA FORMA PARA IMPORTAR ICONOS DESDE REACT-ICON DONDE LO PRIMERO QUE
// TUVE QUE HACER FUE INSTALAR EN EL REPOSITORIO LOS ICONOS PARA LUEGO IMPORTARLOS npm install react-icons --save

import { AiOutlineCheck as CheckSVG } from 'react-icons/ai'
import { AiOutlineClose as DeleteSVG } from 'react-icons/ai'
import './TodoIcon.css'

/*Primero creamos un objeto */

const iconTypes = {
    /*Aca necesito tener varios tipos de arrays o elementos que se van a renderizar 
    
    Para insertar una clase en mi SVG, cada uno de los elementos de mi objeto va a ser una arrow function " => " y va a recibir un color*/

    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
};

/*dependiendo del valor de "type" se va a ejecutar la className correspondiente 
Para pasarle y traducirle los eventos de cada componente vamos a usar onClick */
function TodoIcon ({ type, color, onClick }) {
    return (
        <span
        /* Necesitamos que esta classname sea dinamica ya que el icono debe albergar varios 
        estados que deben reaccionar segun el tiempo, por ello utilizamos comilla invetrita (`)*/
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {/* Dependiendo del "type" mostramos un SVG o otro con respecto a ese valor de type por eso 
            debemos desarrollar un condicional mas complejo porque con el operador ternario no seria
            tan funcional si son varios SVG que queremos manejar */}

            {/* agregamos color como si fuera una funcion () por ello tomariamos que cada elemento de iconTypes va a ser una funcion
            a la que yo le puedo enviar la propiedad color */}
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };