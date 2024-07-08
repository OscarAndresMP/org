import './Formulario.css';
import CampoTexto from '../campoTexto';
import ListaOpciones from '../listaOpciones';
import Button from '../button';
import { useState } from 'react';

const Formulario = (props) => {

    const [nombre, actNombre] = useState("");
    const [puesto, actPuesto] = useState("");
    const [foto, actFoto] = useState("");
    const [equipo, actEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props


    const Evento = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar);
    } 

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className='formulario'>
        <form onSubmit={Evento}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                Titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre}
                actulizarValor={actNombre}    
                />
            <CampoTexto 
                Titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                valor={puesto}
                actulizarValor={actPuesto}
                />
            <CampoTexto 
                Titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto}
                actulizarValor={actFoto}
                />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actEquipo}
                equipo={props.equipos}
            />
            <Button titulo="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <CampoTexto
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actulizarValor={actualizarTitulo}
            />
            <CampoTexto
                titulo="Color"
                placeholder="Ingresar el color en Hex"
                required
                valor={color}
                actulizarValor={actualizarColor}
                type="color"
            />
            <Button titulo="Registrar equipo"/>
        </form>
    </section>
}

export default Formulario;