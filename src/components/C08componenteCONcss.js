import React from 'react';
import "./C08css.css";
import { estiloObj } from "./C08cssObj";

const C08componenteCONcss = () => {
    
    return (
        <div className='marcoComponente'>
            <h4>Componente 8. Con formas de definir estilos</h4>
            
            <button style={{background:'green', color:'blue', padding:'3px'}}>
                Botón 1 con estilos en línea de atributos (definido como obj)
            </button>

            <button>
                Botón 2 con estilos en archivo.css (normal)
            </button>
            
            <div className='centrado'>
                <button style={estiloObj.estilo1}> 
                    Botón 3 con estilos en archivo.js (Definida como objeto)
                </button>
            </div>
        </div>
    );
};

export default C08componenteCONcss;
