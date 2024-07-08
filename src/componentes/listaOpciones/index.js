import './ListaOpciones.css'

const ListaOpciones = (props) => {
    

    const cambio = (e) => props.actualizarEquipo(e.target.value);

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={cambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            {props.equipo.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>

    </div>
}


export default ListaOpciones;