/* Categorias es un componente que muestra las categorías de productos que hay en la api. Estas las obtienen 
mapeando el arrglo de categorías que se arma en el contexto, y las renderiza en Linck, este linck va a la ruta
de la categoría seleccionada que no es otra que el componente inicio, pero filtrado por la categoría de seleccionada */

import './categorias.css'
import { useContext, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import { Link } from "react-router-dom";
function Categorias (){
    const { datos, setDatos } = useContext(contexto);
    useEffect(()=>{
        setDatos((prev)=>({...prev,titulo:"categorias"}));
    },[datos.titulo]);
    return (
        <>
        <div className='categorias'>
            {
                datos.categorias?.map(dato=> (
                    <Link to={`/categorias/${dato}`} key={dato}>
                        {dato.toUpperCase()}
                    </Link>
                ))
            }
        </div>
        </>
    );
};

export default Categorias;