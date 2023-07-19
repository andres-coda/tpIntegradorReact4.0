/* Titulo solo muestra el titulo de la pentalla arriba del navegador, y lo obtiene del contexto*/

import { useContext } from "react";
import { contexto } from "../contexto/Contexto";
function Titulo(){
    const { datos } =useContext(contexto);
    return(
        <h1>{ datos.titulo.toUpperCase()}</h1>
    );
};

export default Titulo;