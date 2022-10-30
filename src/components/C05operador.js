import React from 'react'

export default function C05operador() {
  const edad = 15;
  return (
    <div>
      <h1>Operador ternario</h1>
      { edad >= 18? "Mayor de edad" : "Menor de edad"}
    </div>
  )
}
