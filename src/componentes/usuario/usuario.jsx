/* Esta componente funciona como login, da la posibilidad
 tiene un formulario que toma usuario y clave, y dos botones
 uno compara los datos ingresados con los que estan en el contexto
 que corresponden a la lista de usuarios previamente registrados y si 
 coinciden modifica usuarioActivo del contexto en el usuario que 
 coincide, sino muestra un mensaje que dice que la clave o el usuario
 no fueron registrados previamente. El otro boton nos dirige a travez
 de  navigate al componente Registro.*/
import Boton from "../botones/Boton";
import Formulario from "../formulario/Formulario";
import { useContext, useState, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";
import './usuario.css'
import Parrafo from "../parrafo/parrafo";

function Usuario(){

    
    const { datos, setDatos }=useContext(contexto);
    const [datosRegistro, setDatosRegistro] = useState({usuario:"", clave:""});
    const [ alerta, setAlerta ] = useState("");
    useEffect(()=>{
        setDatos((prev)=>({...prev, titulo:`iniciar sesión`}));
    },[datos.titulo]);
    const navigate = useNavigate();
    const manejadorDelImput= (e) =>{
        setDatosRegistro({
            ...datosRegistro,
            [e.target.name] : e.target.value
        });      
    }

    const enviarDatos =(e)=> {
        e.preventDefault();      
        const indice = datos.usuario.findIndex((elemento) => elemento.usuario === datosRegistro.usuario);
        if (indice!==-1){
            if (datos.usuario[indice].clave===datosRegistro.clave){
                setDatos((prev)=>({...prev, usuarioActivo:datos.usuario[indice]}));
                navigate(`/perfil/${datos.usuario[indice].usuario}`);   
            } else {
                setAlerta("* Contraseña equivocada");
            }
        } else {
            setAlerta("* El usuario no existe")
        }
    }

    const btnRegistro = (e) => {
        navigate("/registro");
    }

    return (
        <>
            <div className="formulario">
                {alerta!==""? (
                    <Parrafo texto={alerta} /> 
                ): (
                    null
                )}
            <form  onSubmit={enviarDatos} action="">
                <h2>BIENVENIDO A SU TIENDA</h2>
                <Formulario id={"usuario"} tipo={"text"} texto={"Ingrese nombre de usuario"} onChan={manejadorDelImput} />
                <Formulario id={"clave"} tipo={"password"} texto={"Ingrese la contraseña"} onChan={manejadorDelImput} />
                <div className="btnFormulario">
                    <Boton btn={{id:`sesion`, clase:`comun`, texto : `iniciar sesión`}} btnClick={enviarDatos} />
                    <Boton btn={{id:`registro`, clase:`comun`, texto : `registrarse`}} btnClick={btnRegistro} />
                </div>
            </form>
            </div>
        </>
    );
};

export default Usuario;