import React, { useState, useEffect } from 'react';
import MarcoForm from './MarcoForm';
import firebase, { db } from '../firebase';
import { collection, doc, addDoc, deleteDoc, updateDoc, onSnapshot } from "firebase/firestore";
//import { getDocs, query, getDoc, setDoc, where, SnapshotMetadata } from "firebase/firestore";
const MarcoLista = () => {
    ////////// REGISTRAR / ACTUALIZAR ///////////////////////////////////////
    const [idActual, setIdActual] = useState("");
    //console.log("Modificar "+idActual);
    const agregarOeditarTarea = async (objParaBd) => {
        try {
            if(idActual === ""){
                ////////// REGISTRAR ///////////////////////////////////////
                await addDoc(collection(db, 'registro'), objParaBd);
                console.log("Se guardo...");
            }else{
                ////////// ACTUALIZAR //////////////////////////////////////
                console.log(objParaBd);
                await updateDoc(doc(collection(db, 'registro'), idActual), objParaBd);
                console.log("Se actualizó...");
            }
            setIdActual("");            
        } catch (error) {
            console.error(error);
        }
    }

    ////////// ELIMINAR /////////////////////////////////////////////////////
    const eliminarDocumento = async (id) => {
        if(window.confirm ("Seguro que desea eliminar... " + id)){
            await deleteDoc(doc(collection(db, 'registro'), id));
            console.log("Se eliminó... "+id);
        }
        setIdActual("");
    };
    
    ////////// LECTURA //////////////////////////////////////////////////////
    const [docsBd, setDocsBd] = useState([]);
    //console.log(docsBd);
    useEffect(() => {
        datosYlectura();  
    }, [idActual]);

    const datosYlectura = onSnapshot(collection(db, "registro"), (xDatosBD) => {
        const xDoc = [];
        //console.log(xDatosBD);
        xDatosBD.forEach(doc => {
            //console.log({id: doc.id}, doc.data());
            xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocsBd(xDoc);
    });
    //console.log(docsBd);

    const [orden, setOrden] = useState(0);
    
    return (
        <div style={{border: '2px dashed red', width:'300px', padding:"10px"}}>
            <h1>MarcoLista.js</h1>
            <MarcoForm {...{agregarOeditarTarea, idActual, datosYlectura}} /> 
            {
                docsBd.map( (row) => 
                    <p key={row.id}>
                        {orden} {row.url} --- 
                        <span onClick={() => eliminarDocumento(row.id) }>x</span>
                         - 
                        <span onClick={() => setIdActual(row.id) }>A</span>
                    </p>
                ) 
            }
        </div>
    );
};

export default MarcoLista;