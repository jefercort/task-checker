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

/*Primero creamos un objeto */
const iconTypes = {
    /*Aca necesito tener varios tipos de arrays o elementos que se van a renderizar */
    "check": <CheckSVG />,
    "delete": <DeleteSVG />,
};

/*dependiendo del valor de "type" se va a ejecutar la className correspondiente */
function TodoIcon ({ type }) {
    return (
        <span
        /* Necesitamos que esta classname sea dinamica ya que el icono debe albergar varios 
        estados que deben reaccionar segun el tiempo, por ello utilizamos comilla invetrita (`)*/
            className={`Icon Icon-svg Icon-${type}`}
        >
            {/* Dependiendo del "type" mostramos un SVG o otro con respecto a ese valor de type por eso 
            debemos desarrollar un condicional mas complejo porque con el operador ternario no seria
            tan funcional si son varios SVG que queremos manejar */}
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon };