/* Este componente se encarga de crear las tarjetas con el nombre, la imagen, y el precio de cada producto,  
el producto pasa como prop. Muestra la imagen, y le pone un alt con el titulo del producto. 
Y para el precio lo pasa a numero y le aplica la función toFixed para dejarle como maximo dos decimales.
Luego tienen un linck que dice agregar al carrito, este linck va a la ruta del producto seleccionado
las rutas están creadas a partir del id del producto*/

import { Link } from 'react-router-dom';
import './producto.css'
import Parrafo from '../parrafo/parrafo';
function Producto ({dato}){
    return (
        <>
            <div className="producto">
                <h3>Categoría: { dato.category }</h3>
                <h2>{ dato.title }</h2>
                <img src={ dato.image } alt={ dato.title } />
                <Parrafo texto={`$ ${Number(dato.price).toFixed(2)}`} />
                <Link to={`/producto/${dato.id}`}>Añadir al carrito</Link>
            </div>
        </>
    );
};

export default Producto;