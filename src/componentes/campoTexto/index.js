import './CampoTexto.css';
//import { useState } from 'react';

const CampoTexto = (props) => {
    const {type = "text"} = props;

    //const [valor, actualizarValor] = useState("");

    const manjerCambio = (e) => props.actulizarValor(e.target.value);

    return <div className={`campo campo-${type}`}>
        <label>{props.Titulo}</label>
        <input 
            type={type} 
            placeholder={props.placeholder} 
            value={props.valor}  
            required={props.required} 
            onChange={manjerCambio}/>
    </div>
}

export default CampoTexto;