/* Es un componente que genera los label e input de un formulario, pide id, tipo, texto y onChan por prop, y los 
distribuye de esta forma, el id para el htmlFor del label, el id y el name del input, el tipo para el type del input,
el texto para el texto del label, y el placeholder del input, y el onChan funciona como callback cada vez que se 
ingresa algo, se modifica la caracteristica correspondiente en el formulario.*/

function Formulario({id, tipo, texto, onChan}){
    return (
        <>
            <label htmlFor={id}>{texto.toUpperCase()}</label>
            <input id={id} type={tipo}placeholder={texto} name={id} onChange={onChan} required></input>
        </>
    );
};

export default Formulario;