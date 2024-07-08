import './Colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Colaborador = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.data;
    const {colorPrimario,like} = props;
    return <div className='colaborador'>
        <AiFillCloseCircle onClick={() => props.eliminarColaborador(id)} className='eliminar'  />
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{puesto}</h4>
            <h5>{nombre}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador;
