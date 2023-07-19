/* Parrafo es un componente que solo renderiza el parrafo recibido por prop, lo hice así porque en el componente 
productoSeleccionado al apretar el signo mas, o menos, solo cambiaba un elemento, el parrafo, entonces lo hice como 
un nuevo componente, después lo use más veces en otros lugares, ya que lo tenía */

function Parrafo({texto }) {
    return (
        <p>{texto}</p>
    );
};

export  default Parrafo;