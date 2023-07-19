/* El inicio es el componente encargado de mapear el arreglo datos, filtrarlo por categorias y renderizar los 
componentes que corresponden a cada producto. Si la categoria es igual a "todas" se muestran todos los productos.
También se encarga de cambiar el titulo en el contexto. poniendo como titulo la categoría o si están todas el 
nombre de la tienda "su tienda" */

import './inicio.css'
import { useContext, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import Producto from "../producto/Producto";
function Inicio ({categoria}) {
    const { datos, setDatos } = useContext(contexto);
    useEffect(()=>{
        if (categoria !== "todas"){
            setDatos((prev)=>({...prev, titulo: categoria}));
        } else {
            setDatos((prev)=>({...prev, titulo: "su tienda"}));
        }
    },[datos.titulo,categoria]);
    return (
        <>
        <div className='productos'>
            {datos.data.length === 0 ? (
                <h1>Cargando...</h1> ) : (
                    datos.data.map((dato) =>{
                return categoria === `todas` || categoria===dato.category ?(
                    <Producto dato={dato} key={dato.id} />
                    ):(
                        null
                        )})
                    )}
        </div>
        </>
    );
};

export default Inicio;