import Boton from "../botones/Boton";
import Formulario from "../formulario/Formulario";

function Usuario(){
    const manejadorDelImput= (e) =>{
        setDatosRegistro({
            ...datosRegistro,
            [e.target.name] : e.target.value
        });      
    }

    const enviarDatos =(e)=> {
        e.preventDefault();
        setDatos((prev)=>({...prev, usuario:datosRegistro}));
        navigate("/perfil");
    }

    return (
        <>
            <div className="usuario">
            <form className="formulario" onSubmit={enviarDatos} action="">
                <h2>BIENVENIDO A SU TIENDA</h2>
                <Formulario id={"usuario"} tipo={"text"} texto={"Ingrese nombre de usuario"} onChan={manejadorDelImput} />
                <Formulario id={"clave"} tipo={"password"} texto={"Ingrese la contraseña"} onChan={manejadorDelImput} />
                <Boton btn={{id:`sesion`, clase:`comun`, texto : `iniciar sesión`}} btnClick={enviarDatos} />
            </form>
            </div>
        </>
    );
};

export default Usuario;