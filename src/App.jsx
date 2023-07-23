/* Aqui estan todas las rutas de la web, desde las categorías,  los productos, el inicio, el carrito, compras, registro
perfil. Y a su vez se crea la pantalla inicial de la pg, con el header compuesto por el titulo y el navegador, y el
cuerpo, compuesto por el inicio*/

import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Inicio from './componentes/inicio/Inicio'
import Categorias from './componentes/categorias/categorias'
import Carrito from './componentes/carrito/Carrito'
import Titulo from './componentes/titulo/Titulo'
import { useContext } from 'react'
import { contexto } from './componentes/contexto/Contexto.jsx'
import ProductoSeleccionado from './componentes/productoSeleccionado/ProductoSeleccionado'
import Comprar from './componentes/compra/compra'
import Registro from './componentes/registro/registro'
import Perfil from './componentes/perfil/perfil'
import Usuario from './componentes/usuario/usuario'



function App() {
const {datos } = useContext(contexto);
  return (

    <>

    <BrowserRouter>
    <header>

    <Titulo />
    <nav>
      <Link to='/'>INICIO</Link>
      <Link to='/categorias'>CATEGORÍAS</Link>
      <Link to='/carrito' className='linck-carrito'>CARRITO{datos.carrito?.length!== 0 ? (
        <p className='aviso-Carrito'>{datos.carrito?.length}</p>) : (
          null
        )}</Link>
        <Link to='/perfil'>{datos.usuarioActivo.usuario.toUpperCase()}</Link>
    </nav>
    </header>
    <Routes>
      {datos.categorias.map((categoria)=> (
        <Route path={`/categorias/${categoria}`} element={<Inicio categoria={categoria}/>} key={categoria}/>
      ))}
      {datos.data.map((dato)=>{
        return (
        <Route path={`/producto/${dato.id}`} element={<ProductoSeleccionado dato={dato}/>} key={dato.id}/>
        )
        })}
      {datos.usuario.map((dato, index)=>{
        return (
        <Route path={`/perfil/${dato.usuario}`} element={<Perfil usuario={dato}/>} key={index}/>
        )
        })}
      <Route path='/compra' element={<Comprar />} />
      <Route path='/' element={<Inicio categoria='todas'/>} />
      <Route path='/categorias' element={<Categorias/>} />
      <Route path='/carrito' element={<Carrito/>} />
      <Route path='/perfil' element={<Perfil usuario={datos.usuarioActivo}/>} />
      <Route path='/registro' element={<Registro/>} />
      <Route path='/usuario' element={<Usuario/>} />
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
