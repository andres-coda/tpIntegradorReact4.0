/* Este componente muestra el mensaje de agradecimiento y tiene un Linck para volver al inicio.*/

import './compra.css'
import { Link,  } from "react-router-dom";
import Parrafo from "../parrafo/parrafo";

function Comprar(){
    return (
        <>
            <div className="compra">
                <Parrafo texto={`Muchas gracias`} />
                <Parrafo texto={`Su compra se realizo con exito, puede pasar a retirar los productos cuando guste`} />
                <Parrafo texto={`Su tienda, siempre atenta`} />
                <Link to={"/"} >VOLVER AL INICIO</Link>
            </div>
        </>
    );
};

export default Comprar;