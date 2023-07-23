/* Registro es un formulario para ingresar datos, que los guarda en el estado datosRegistro, y después en el 
contexto como un elemento mas del arreglo usuario. Una vez que se agrego un usuario nuevo lo usa como el 
usuario logueado, lo guarda en usuarioActivo y se dirige a la ruta del inicio*/

import { useState, useContext, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import Formulario from "../formulario/Formulario";
import './registro.css'
import { useNavigate } from "react-router-dom";
import Boton from "../botones/Boton";
import Parrafo from "../parrafo/parrafo";
function Registro() {
    const {datos, setDatos} = useContext(contexto);
    const [ alerta, setAlerta ] = useState("");
    useEffect(()=>{
        setDatos((prev)=>({...prev, titulo:"Registro de usuario"}));
    },[datos.titulo]);
    const [datosRegistro, setDatosRegistro] = useState({
        usuario: "",
        nombre:"",
        apellido: "",
        clave: "",
        nacimiento: "",
        email: "",
        telefono: "",
        direccion: ""
    });
    
    const navigate = useNavigate();

    const manejadorDelImput= (e) =>{
        setDatosRegistro({
            ...datosRegistro,
            [e.target.name] : e.target.value
        });      
    }

    const enviarDatos =(e)=> {
        e.preventDefault();
        let nuevoElemento = [];
        if (datos.usuario.length !==0){
            nuevoElemento=datos.usuario.slice();
        }
        nuevoElemento.push(datosRegistro); 
        if (datos.usuario.findIndex((elemento) => elemento.usuario === datosRegistro.usuario)===-1) {
            setDatos((prev)=>({...prev, usuario:nuevoElemento, usuarioActivo:datosRegistro}));
            navigate("/");
        } else {
            setAlerta("* El usuario ya fue registrado")
        }     
    }
    return (
        <>
        <div className="div-Formulario">
            <form className="formulario" onSubmit={enviarDatos} action="">
                <h2>REGISTRO</h2>
                {alerta!== "" ? (
                    <Parrafo texto={alerta} />
                ):(
                    null
                )}
                <Formulario id={"usuario"} texto={"Nombre de usuario"} tipo={"text"} onChan={manejadorDelImput}/>
                <Formulario id={"clave"} texto={"Contraseña"} tipo={"password"} onChan={manejadorDelImput} />
                <Formulario id={"nombre"} texto={"Nombre"} tipo={"text"} onChan={manejadorDelImput}/>
                <Formulario id={"apellido"} texto={"Apellido"} tipo={"text"} onChan={manejadorDelImput}/>
                <Formulario id={"nacimiento"} texto={"Fecha de nacimiento"} tipo={"date"} onChan={manejadorDelImput} />
                <Formulario id={"email"} texto={"Email"} tipo={"email"} onChan={manejadorDelImput} />
                <Formulario id={"telefono"} texto={"Telefono"} tipo={"number"} onChan={manejadorDelImput} />
                <Formulario id={"direccion"} texto={"Dirección"} tipo={"text"} onChan={manejadorDelImput} />
                <Boton btn={{id:`registro`, clase:`comun`, texto : `registrar`}} btnClick={enviarDatos} />
            </form>
        </div>
        </>
    );
};

export default Registro;