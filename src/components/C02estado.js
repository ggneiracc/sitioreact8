import React, { useState, Fragment } from 'react'

const C02estado = () => {
  //Estado y su modificador iniciado con 0
  const [numero, setNumero] = useState(0);
  //Función aumentar el estado
  const aumentar = () => {
    console.log("Hacer cli");
    setNumero(numero + 1);
  }
  
  return (
    <Fragment>
      <h3>Mi primer componente {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </Fragment>
  )
}

export default C02estado
