import Formulario from "../formulario/Formulario";
import { useContext, useState, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import { useNavigate } from "react-router-dom";
import Boton from "../botones/Boton";
import Parrafo from "../parrafo/parrafo";
import './busqueda.css'

function Busqueda() {
    const { datos, setDatos } = useContext(contexto);
    const [ busqueda, setBusqueda ] = useState("");
    const [ alerta, setAlerta ] = useState("");
    const [ sugerencias, setSugerencias ] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        setDatos((prev)=>({...prev, titulo:`busqueda`}));
    },[datos.titulo]);

    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(busqueda);
        const resultado = datos.data.find((dato) => dato.title === busqueda);
        if (resultado) {
        navigate(`/producto/${resultado.id}`);
        } else {
        setAlerta("* La búsqueda no encontró resultados");
        }
    }

    const manejoDelInput = (e) => {
        setBusqueda(e.target.value);
        const sugerenciasFiltradas = datos.data.filter((dato) =>
        dato.title.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSugerencias(sugerenciasFiltradas);
        };

    const handleSugerenciaClick = (sugerencia) => {
        setBusqueda(sugerencia.title);
        setSugerencias([]);
        navigate(`/producto/${sugerencia.id}`);
    };
    return (
        <div className="div-Formulario">
            <form className="formulario" onSubmit={enviarDatos} action="">
                <h2>BUSQUEDA</h2>
                {alerta!== "" ? (
                    <Parrafo texto={alerta} />
                ):(
                    null
                )}
                <input id="busqueda" placeholder={"Nombre de elemento a buscar"} type="search" name="busqueda" onChange={manejoDelInput}/>
                {sugerencias.length > 0 && (
                    <ul>
                        {sugerencias.map((sugerencia) => (
                        <li key={sugerencia.id} onClick={() => handleSugerenciaClick(sugerencia)}>
                            {sugerencia.title}
                        </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    );
};

export default Busqueda;