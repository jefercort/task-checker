import React from 'react';
import './TodoSearch.css'

// el searchValue y el setSearchValue son creados en el componente padre App pero se 
// ejecutan acá en este componente por medio de las props
// e ingreso las props llamadas searchValue y setSearchValue que son los comunicadores
function TodoSearch({
    searchValue,
    setSearchValue
}){
    return (
        <input 
            placeholder="Soy Exitoso y empresario" 
            className='TodoSearch'
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
                // console.log(event);
                // console.log(event.target);
                // console.log(event.target.value);
            }}
        />
    );
  }
  export { TodoSearch };