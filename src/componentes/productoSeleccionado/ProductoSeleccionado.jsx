/* ProductoDetalles se encarga de mostrar los detalles de cada producto. Al producto lo paso por prop desde la ruta,
muestra el titulo, la categoría, una imagen, los detalles, la valoracion y el precio, además muestra cuatro botones
y dos <p>, uno es la cantidad a agregar en el carrito, y el otro el precio total. (multiplica la cantidad por el 
    precio individual de cada prodcuto). Un boton se encarga de cerrar la vista de detalles, y vuelve a la 
    pantalla anterior, y no guarda ningun dato. el de suma crea un nuevo objeto con los datos pasados por prop,
    si es que no existe en el arreglo carritos, si esta en carrito toma los datos de ese objeto y le suma uno, sino
    le agrega la caracteristica cantidad, luego la suma en uno. El boton restar, simplemente resta en 1 la 
    cantidad del objeto.cantidad. Si es 0, lo deja en 0. El boton aceptar compara el id del producto seleccionado
    con el carrito, y actualiza ese objeto del array, si no existe le pasa el nuevo objeto creado anteriormente al 
    final por el metodo push. Para volver atras use windows.histori.back. 
     */


import './productoSeleccionado.css'
import Boton from "../botones/Boton";
import { useContext, useState, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import Parrafo from '../parrafo/parrafo';
function ProductoSeleccionado ({dato}){
    const { datos, setDatos } = useContext(contexto);
    let indice = datos.carrito?.findIndex(elemento => dato.id === elemento.id);
    const [ cantidad, setCantidad ] = useState(0);

    useEffect(() => {
        if (indice !== -1) {
          setCantidad(datos.carrito[indice].cantidad);
        } else {
          setCantidad(0);
        }
      }, [datos.carrito, indice]);

    const btnClick= (e) =>{
        const btn=e.target.id;
        switch (btn) {
            case `menos`:
                setCantidad((prev)=>(prev>0 ? prev-=1 : 0 ));
            break;
            case `suma`:
                setCantidad((prev)=>(prev+=1));
            break
            case `aceptar`:
                const nuevoCarrito = datos.carrito.slice();
                if (indice=== -1) {
                    let nuevoElemento = {...dato, cantidad:cantidad};
                    nuevoCarrito.push(nuevoElemento);
                } else {
                    nuevoCarrito[indice].cantidad=cantidad;
                }
                setDatos((prev)=>({...prev,carrito:nuevoCarrito}));
                window.history.back();
            break
            case `cerrar`:
                window.history.back();
            break
            default:
                console.log(`boton equivocado`);
            break;
        }
      }
    return(
        <div className="transparente">
            <div className="producto-Seleccionado">
                <h2>{ dato.title }</h2>
                <h3>Categoría: { dato.category }</h3>
                <div className="img-Descripcion">
                    <img src={dato.image} alt={dato.title} />
                    <p className="descripcion">{ dato.description }</p>
                </div>
                <div className="valoracion-Precio">
                    <div className="valoracion">
                        <Parrafo texto={`Valoración: ${ dato.rating.rate }`} />
                        <Parrafo texto={`Cantidad de votos: ${ dato.rating.count }`} />
                    </div>
                    <Parrafo texto={`$ ${dato.price}`} />
                </div>
                <div className="botones">
                    <Boton btn={{id:`menos`, clase:`comun`, texto : `-`}} btnClick={btnClick} />
                    <Parrafo texto={cantidad} key={cantidad}/>
                    <Boton btn={{id:`suma`, clase:`comun`, texto : `+`}} btnClick={btnClick} />
                </div>
                <div className="total">
                    <Parrafo texto={`$ ${(cantidad*dato.price).toFixed(2)}`}/>
                    <Boton btn={{id:`aceptar`, clase:`comun`, texto : `aceptar`}} btnClick={btnClick} />
                </div>
                <Boton btn={{id:`cerrar`, clase:`cerrar`, texto : `x`}} btnClick={btnClick} />
            </div>
        </div>
    );
};

export default ProductoSeleccionado;