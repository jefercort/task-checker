import React from "react";

function useLocalStorage (itemName, initialValue) {
    /*VAMOS A CREAR UN NUEVO ESTADO DENTRO DEL CUSTOM HOOK */
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  /*VAMOS A HACER LOS ESTADOS DE CARGA Y ERROR */
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
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
          setItem(parsedItem);
        }
        /* (ACTUALIZACION DEL ESTADO) Con esta parte el estado de carga para cuando termine de cargar todo lo anterior */
        setLoading(false);
      } catch (error) {      
        /*PODEMOS PASARLE QUE NOS MUESTRE EL ERROR ESPECIFICO*/
        setLoading(false);
        setError (error); 
        /*PODEMOS PASARLE QUE SE VUELVA UN TRUE*/
        // setError (false);
      }
      // EN ESTA PARTE LO QUE HACEMOS ES DEFINIR EL TIEMPO DURANTE EL CUAL SE VA A EJECUAR
      // LA FUNCION POR EL setTimeout
    }, 3000);

  });
  
    

  
  /* FUNCION QUE ACTUALIZA EL ESTADO Y EL LOCAL STORAGE 
      aca lo que vamos a recibir es un nuevo array de TODOS*/
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
   /*LUEGO SE RETORNA YA SEA UNA FUNCION O UN OBJETO LO QUE SEA */
   /* SI HAY MAS DE DOS ELEMENTOS QUE QUEREMOS RETORNAR DE UN CUSTOM HOOK ES
   RECOMENDABLE QUE ENVIEMOS UN OBJETO {} EN VEZ DE UN ARRAY []
    return [item, saveItem]; */
    return {
      item,
      saveItem,
      loading,
      error,
  };
}
  export { useLocalStorage };

  // localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   {text:"Pagar los recibos", completed: false},
//   {text:"Sacar a pasear las mascotas", completed: true},
//   {text:"Lavar la loza", completed: false},
//   {text:"Hacer meditación diaria", completed:false}
// ]