import './Equipo.css';
import Colaborador from '../colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const {titulo, colorPrimario, colorSecundario, id} = props.datos;
    const {colaboradores, eliminarColaborador, actColor, like} = props;

    return <> 
        {
            colaboradores.length > 0 &&
            <section className='equipos' style={{backgroundColor: hexToRgba(colorPrimario, 0.7)}}>

                <input 
                    type="color" 
                    className='color'
                    value={colorPrimario}
                    onChange={(evento) => actColor(evento.target.value, id)}
                />

                    <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    data={colaborador} 
                    key={index}
                    colorPrimario = {colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />
                    )
                    }
                
                </div>
            </section>
        }
        </>
}
export default Equipo;

