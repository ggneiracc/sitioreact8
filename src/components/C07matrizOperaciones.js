import { Fragment, useState } from "react";

const MatrizConOperaciones = () => {
    const [lista, setLista] = useState([1,2,3,4,5]);
    const [dias, setDias]   = useState(["L","M","X","J","V"]);
    
    const uniendoArray = [...lista, ...dias];
    //console.log(uniendoArray);

    const [numero, setNumero] = useState(6);
    const agregarNumero  = () => {
        setNumero(numero + 1);
        setLista([...lista, numero]);
    }

    const [texto, setTexto] = useState(["S","D"])
    const agregarTexto = () => {
        setDias([...dias, ...texto]);
    }
     
    return ( 
        <Fragment>
            <h1>Lectura de unión de matrices</h1>
            {
                uniendoArray.map((item, index) =>
                    <p key={index}> {index} - {item}</p>
                ) 
            }

            <h1>Agregar un valor a un array</h1>
            <button onClick={agregarNumero}>Agregar número</button>
            {
                lista.map((item, index) =>
                    <p key={index}> {index} - {item}</p>
                ) 
            }

            <h1>Agregar varios textos a un array</h1>
            <button onClick={agregarTexto}>Agregar texto</button>
            {
                dias.map((item, index) =>
                    <p key={index}> {index} - {item}</p>
                ) 
            }
        </Fragment>
     );
}
 
export default MatrizConOperaciones;