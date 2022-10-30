import React, { useState } from 'react'

const C03dobleestado = () => {
  //Estado y su modificador iniciado con 0
  const [numero, setNumero] = useState(0);
  const [valor, setValor]   = useState(0);

  //Función aumentar el estado
  const aumentar = () => {
    console.log("Hacer clic");
    setNumero(numero + 1);
  }

  return (
    <div>
      <h1>Componente con dos estados</h1>

      <h3>Primer estado con función normal {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>

      <h3>Segundo estado con función anónima {valor}</h3>
      <button onClick={()=>setValor(valor + 1)}>Aumentar</button>

    </div>
  )
}

export default C03dobleestado
