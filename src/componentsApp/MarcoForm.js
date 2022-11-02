import React, { useState, useEffect } from 'react';
import firebase, { db } from '../firebase';
import { doc, getDoc, } from "firebase/firestore";

const MarcoForm = (props) => {
    ////////// VALORES INICIALES del FORM. //////////////////////////////////
    const valoresIniciales = {url:"", nombre:"", descripcion:""};
    const [valores, setValores] = useState(valoresIniciales);

    ////////// MANEJA (submit) //////////////////////////////////////////////
    const manejarEnvio = (e) => {
        e.preventDefault();                     //Previene comportamient x defecto
        if(!validarURL(valores.url)){
            alert("URL no es válido...");
            return false;
        }else{
            props.agregarOeditarTarea(valores); //llama a fn pasando valores
            setValores(valoresIniciales);       //Pasa valores iniciales
            //console.log(valores);
        }
    };
    const validarURL = (cadena) => {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(cadena);
    }

    ////////// MANEJA (input) ///////////////////////////////////////////////
    const manajarCambioEntrada = (e) => {
        const {name, value} = e.target;         //Obtiene name y value HTML
        setValores({...valores, [name]:value}); //Agrega lo escrito en form
        //console.log(name, value);
    };

    ////////// CARGA DATOS por "id" - UPDATE ////////////////////////////////
    useEffect(() => {
        if(props.idActual===''){
            ////////// DEJA VACIO el form //////////////////////////////////
            setValores(valoresIniciales);        //Si idActual esta vacio
        }else{
            const obtenerDatosPorId = async () => {
                ////////// OBTENER REGISTRO por idActual ///////////////////
                //const docRef = doc(db, "registro", props.idActual);
                const xDoc = await getDoc(doc(db, "registro", props.idActual));
                if (xDoc.exists()) {
                    //console.log("Doc.", docSnap.data());
                    //console.log("IdDoc.", docSnap.id);
                    setValores(xDoc.data());
                } else {
                    console.log("No hay datos");
                }
            }
            obtenerDatosPorId();
        }
    }, [props.idActual]);
    //console.log("ver", valores);

    return (
        <div style={{background:"violet", padding:"10px", textAlign:"center"}}>
            <form onSubmit={manejarEnvio}>
                <h1>MarcoForm.js</h1>
                <input type='text' name='url' placeholder='URL de sitio' 
                    onChange={manajarCambioEntrada}                    
                    value={valores.url }
                /><br/>

                <input type='text' name='nombre' placeholder='Nombre...' 
                    onChange={manajarCambioEntrada}
                    value={valores.nombre }
                /><br/>

                <textarea type='textarea' name='descripcion' placeholder='Describir...' 
                    onChange={manajarCambioEntrada}
                    value={valores.descripcion }
                ></textarea><br/>

                <button> 
                    {props.idActual===""? "Guardar": "Actualizar"} 
                </button>
            </form>
        </div>
    );
};

export default MarcoForm;