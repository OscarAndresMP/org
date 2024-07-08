import './App.css';
import { useState } from 'react';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';
import {v4 as uuid} from "uuid";
function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actColaborador] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: false
  },
  
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora y desarrolladora",
    fav: false
  
  },
  {
    id: uuid(),
    equipo: "Movil",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora",
    fav: false
  
  }
]);
  const [equipos, actEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario: "#ff9a29",
      colorSecundario: "#ffeedf"
    }
]);

  const camniarMostrar = () => actualizarMostrar(!mostrarFormulario);

  const registrarColaborador = (colaborador) => {

      actColaborador([...colaboradores, colaborador]);
    
  }

  //eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actColaborador(nuevosColaboradores)
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    
    actEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //actualizar color
  const actColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actEquipos(equiposActualizados);
  }

  //actualizar like
  const like = (id) => {
    const colaboradoresAct = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    })
    actColaborador(colaboradoresAct);

  }

  return (
    <div className="App">
      <Header />
      {
        mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }
      
      
      <MiOrg cambiar={camniarMostrar}/>
      
      { equipos.map( (equipo) =>  <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores ={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador= {eliminarColaborador}
        actColor={actColor}
        like={like}
        />
        )
      }
      <Footer/>

    </div>
  );
}

export default App;
