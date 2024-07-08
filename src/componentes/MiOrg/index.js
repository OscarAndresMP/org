import './Miorg.css'

const MiOrg = (props) => {



    return <section className='orgSection'>
        <h3 className='title'>Mi Organizacion</h3>
        <img src='/img/add.png' alt='add' onClick={props.cambiar} />
    </section>
}


export default MiOrg;