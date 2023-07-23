/* El contexto se encarga de manejar la mayoría de los datos de la app. Estan todos en el objeto datos. Obtiene
los datos de la api a travez del fetch. Con un useEffect para que no se repita cada vez que se renderiza. El useState
del objeto, lo inicializa poniendo los datos (data) que necesita de la api en un arreglo vacio, 
igual que las categorias, el titulo se encarga de los mensajes que salen en la cabecera de la pantalla, 
se modifica en el componente categoria, carrito, perfil, registro, y a travez del
navegador, carrito es un arreglo vacío que se va a ir llenando a medida que se agreguen productos al carro, 
también tiene usuario, y usuarioActivo para hacer un registro, que guarda los datos registrados en el arreglo usuarios 
y el usuarioActivo es el que esta logueado en el momento, cuando cierra sesión este usario pasa a ser, usuario.usuario: "perfil"
y esta disponible para que otro usuario pueda loguearse */


import { createContext, useEffect, useState } from "react";
export const contexto = createContext({});
export const ProvedorContexto = ({children}) => {
    const [ datos, setDatos ] = useState ({data:[], carrito:[], categorias:[], titulo:"La tienda", usuario:[], usuarioActivo: {usuario:"perfil"}});
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .catch(error =>{
            console.error(`Error en el fetch: `, error);
            throw error;
        })
        .then(res=> res.json())
        .then(data =>{
            let arrayCategorias = data.reduce((unicaCategoria, item)=>{
                if (!unicaCategoria.includes(item.category)) {
                    unicaCategoria.push(item.category);
                }
                return unicaCategoria;
            },[]);
            arrayCategorias.push("todas");
            setDatos((prev)=>({...prev, data, categorias:arrayCategorias}));
        })
        .catch(error => {
            console.error(`Error al obtener los datos: `, error);
        });
    },[]);

    return (
        <contexto.Provider value={{datos, setDatos } } >
            { children }
        </contexto.Provider>
    )
}
