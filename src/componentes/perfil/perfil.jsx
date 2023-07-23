/* El componente perfil renderiza el usuarioActivo, pero es pasado por prop a travez de la ruta indicada, 
en una pequeña tarjeta, simple, muestra algunos datos, el boton de cerrar sesion recetea el usuarioActivo*/

import './perfil.css'
import { useContext, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import Boton from "../botones/Boton";
import { useNavigate } from "react-router-dom";
import Usuario from '../usuario/usuario';
function Perfil({usuario}){
    const { datos, setDatos } = useContext(contexto);
    useEffect(()=>{
        setDatos((prev)=>({...prev, titulo:`${usuario.usuario}`}));
    },[datos.titulo]);
    const formatearFecha = (fecha) => {
        const [anio, mes, dia] = fecha.split("-");
        return `${dia}-${mes}-${anio}`;
    };
    const navigate = useNavigate();
    const btnClick =(e) => {
        setDatos((prev)=>({...prev, usuarioActivo:{usuario:"perfil"}}));
        navigate("/usuario");
    }

    return(
        <>
            {usuario.usuario!=="perfil" ? (
                <div className="perfil">
                    <h2>{usuario.nombre} {usuario.apellido}</h2>
                    <h3>Fecha de nacimiento: {formatearFecha(usuario.nacimiento)}</h3>
                    <h3>Dirección: {usuario.direccion}</h3>
                    <h3>Email: {usuario.email}</h3>
                    <h3>Telefono: {usuario.telefono}</h3>
                    <Boton btn={{id: "cerrarSesion", clase:"comun", texto:"Cerrar Sesión"}} btnClick={btnClick}/>
                </div>
            ) : (
                <Usuario/>
            )}
           
        </>
    );
};

export default Perfil;