/* Este componente se encarga de crear los botones. se le pasa como prop un objeto btn, que contiene la id,
   la clase y el texto, y una función llamada btnClick, que es el callback y le da la funcionalidad. */


import './botones.css'
function Boton ({btn, btnClick}) {
    return (
        <button id={btn.id} className={btn.clase} onClick={btnClick}>{btn.texto.toUpperCase()}</button>
    );
};

export default Boton;