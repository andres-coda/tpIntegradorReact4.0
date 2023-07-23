/* Este componente muestra el mensaje de agradecimiento y tiene un Linck para volver al inicio. Utiliza para mostrar
el mensaje el nombre y el apellido del usuarioActivo*/

import './compra.css'
import { Link,  } from "react-router-dom";
import Parrafo from "../parrafo/parrafo";
import { useContext, useEffect } from 'react';
import { contexto } from '../contexto/Contexto';

function Comprar(){
    const {datos, setDatos} = useContext(contexto);
    useEffect(()=>{
        setDatos((prev)=>({...prev,titulo:"su tienda"}));
    },[datos.titulo]);

    return (
        <>
            <div className="compra">
                <Parrafo texto={`Muchas gracias ${datos.usuarioActivo.nombre} ${datos.usuarioActivo.apellido}`} />
                <Parrafo texto={`Su compra se realizo con exito, puede pasar a retirar los productos cuando guste`} />
                <Parrafo texto={`Su tienda, siempre atenta`} />
                <Link to={"/"} >VOLVER AL INICIO</Link>
            </div>
        </>
    );
};

export default Comprar;