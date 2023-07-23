/* El carrito se encarga de mostrar los productos que se agregan a el. Y de efectuar la compra, cuando se realiza
la compra si no se registro previamente va a la ruta del resistro para que ingrese los datos y ya después se pueda
efectuar la compra, si ya esta registrado muestra un mensaje de agradecimiento. Esta conformado de una tabla, 
con sus titulo en tr td diferenciado por la clase. No pude hacerlo con thead tr th porque no me captaba las columnas. 
y un cuerpo que se llena mapeando el arreglo que guarda los elementos que se agregan al carro. 
Este arreglo es parte del Objeto datos, que es pasado por contexto. Tiene una variable total
que se encarga de sumar cada producto multiplicado por la cantidad que se agrego al carrito. Y una funciones de 
evento click que maneja el boton comprar, que borra el contenido de carrito, y a travez de navigate va a la ruta 
de /compra si el usuario se logueado abre el componente compra y muestra el mensaje de agradecimiento,  
si no se ha logueado va al componente de usuario, en los td de la lista tiene en forma de titulos del producto unos
Linck. Cada uno lleva a la ruta del producto seleccionado, las rutas fueron generadas en el app, y hay una ruta 
para cada producto a travez del id. Cada vez que se hace click en cualquier producto, se redirige a los detalles
al componente productoSeleccionado. Si el carrito está vacío muestra un mensaje que dice que el carrito esta vacío. */


import './carrito.css'
import { useContext, useEffect } from "react";
import { contexto } from "../contexto/Contexto";
import Boton from "../botones/Boton";
import { Link, useNavigate } from 'react-router-dom';
function Carrito(){
    const { datos, setDatos } = useContext(contexto);
    let total=0;
    useEffect(()=>{
        setDatos((prev)=>({...prev,titulo:"carrito"}));
    },[datos.titulo]);

    const navigate = useNavigate();


    const btnClick = (e) => {
        if (datos.usuarioActivo.usuario!=="perfil"){
            setDatos((prev)=>({...prev,carrito:[]}));
            navigate("/compra");
        } else {
            navigate("/usuario");
        }
    }



    return(
        <>
        <div className="carrito">
            {datos.carrito.length === 0 ? ( 
                <h1>No tiene ningún producto en el carrito</h1>
            ) : (
            <>
            <h1>CARRITO DE COMPRAS</h1>
            <table>
                <tbody>

                    <tr className='tituloTabla'>
                        <td>Cantidad</td>
                        <td>Producto</td>
                        <td>$ Unidad</td>
                        <td>$ Total</td>
                    </tr>

                    {datos.carrito?.map(dato=>{
                        total+=dato.price*dato.cantidad;
                        return (<tr key={dato.id} className='reinglon'>
                            <td>{dato.cantidad}</td>
                            <td><Link to={`/producto/${dato.id}`}>{dato.title}</Link></td>
                            <td>{dato.price.toFixed(2)}</td>
                            <td>{(dato.price*dato.cantidad).toFixed(2)}</td>
                        </tr> );
                    })}
                    <tr className='total'>
                        <td>TOTAL</td>
                        <td colSpan={3}>{total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <Boton  btn={{id:`comprar`, clase:`comun`, texto : `comprar`}} btnClick={btnClick} />
            </>
            )}
        </div>
        </>
    );
};

export default Carrito;