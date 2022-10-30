import React, { useState } from 'react'

const C06matriz = () => {
  const [lista, setLista] = useState([1,2,3,4,5]);
  return (
    <div>
      <h1>lectura sin index y SIN html</h1>
      {lista.map(( item ) => item )}

      <h1>lectura sin index y CON html</h1>
      {lista.map(( item ) => <span> { item } </span> )}

      <h1>lectura CON index y SIN key</h1>
      {
        lista.map(( item, index ) => 
            <p> { item } </p> 
        )
      }

      <h1>lectura CON index y CON key</h1>
      {
        lista.map(( item, index ) => 
            <p key={index}> { index } { item } </p> 
        )
      }

    </div>
  )
}

export default C06matriz
