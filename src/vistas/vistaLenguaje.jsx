import './vistaLenguaje.css'

function VistaLenguaje({leng}){
    return(
        <div className="vista">
            <h1>{leng.nombre}</h1>
            <h2>{leng.comentario}</h2>
            <img src={leng.imagen} alt={leng.imagen + ' imagen'}/>
        </div>
    )
}

export default VistaLenguaje;