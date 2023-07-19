/* El componente perfil renderiza el ultimo registro cargado al arreglo de usuarios, lo renderiza en una
pequeña tarjeta, simple, muestra algunos datos, el boton de cerrar sesion borra el registro del usuario, y lo 
vuelve un arreglo vacío*/

import './perfil.css'
import { useContext, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import Boton from "../botones/Boton";
import { useNavigate } from "react-router-dom";
import Registro from '../registro/registro';
function Perfil(){
    const { datos, setDatos } = useContext(contexto);
    useEffect(()=>{
        setDatos((prev)=>({...prev, titulo:"Mi perfil"}));
    },[datos.titulo]);
    const formatearFecha = (fecha) => {
        const [anio, mes, dia] = fecha.split("-");
        return `${dia}-${mes}-${anio}`;
    };
    const navigate = useNavigate();
    const btnClick =(e) => {
        setDatos((prev)=>({...prev, usuario:[]}));
        navigate("/registro");
    }

    return(
        <>
            {datos.usuario.length!==0 ? (
                <div className="perfil">
                    <h2>{datos.usuario[datos.usuario.length-1]?.nombre} {datos.usuario[datos.usuario.length-1]?.apellido}</h2>
                    <h3>Fecha de nacimiento: {formatearFecha(datos.usuario[datos.usuario.length-1]?.nacimiento)}</h3>
                    <h3>Dirección: {datos.usuario[datos.usuario.length-1]?.direccion}</h3>
                    <h3>Email: {datos.usuario[datos.usuario.length-1]?.email}</h3>
                    <h3>Telefono: {datos.usuario[datos.usuario.length-1]?.telefono}</h3>
                    <Boton btn={{id: "cerrarSesion", clase:"comun", texto:"Cerrar Sesión"}} btnClick={btnClick}/>
                </div>
            ) : (
                <Registro/>
            )}
           
        </>
    );
};

export default Perfil;