import React from "react";

function useLocalStorage (itemName, initialValue) {

    /* lO PRIMERO ES CREAR UNA CONSTANTE PARA REVISAR EL LOCALSTORAGE*/
    const localStorageItem = localStorage.getItem(itemName);
    /* VAMOS A CREAR UNA FUNCION QUE ACTUALICE TANTO EL ESTADO COMO EL LOCAL STORAGE
    POR ELLO ES QUE PRIMERO CREAMOS UNA VARIABLE VACIA Y LUEGO UN CONDICIONAL para que actue con respecto a eso*/
    
    let parsedItem;
    
    if (!localStorageItem) {
      /* Aca pongo el array Vacio para que la app no se rompa por el null 
      itemName lo uso en remplazo de 'TODOS_V1'
      */
     localStorage.setItem(itemName, JSON.stringify(initialValue));
     parsedItem = initialValue
    }else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    /*VAMOS A CREAR UN NUEVO ESTADO DENTRO DEL CUSTOM HOOK */
    const [item, setItem] = React.useState(parsedItem);
  
  /* FUNCION QUE ACTUALIZA EL ESTADO Y EL LOCAL STORAGE 
      aca lo que vamos a recibir es un nuevo array de TODOS*/
  
      const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      }
   /*LUEGO SE RETORNA YA SEA UNA FUNCION O UN OBJETO LO QUE SEA */
    return [item, saveItem]; 
  }

  export { useLocalStorage };