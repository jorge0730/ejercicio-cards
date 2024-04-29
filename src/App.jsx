import './App.css';
import Card from './componenetes/card';
import Lenguajes from './datos/Lenguajes';

function App() {
  const lenguajesList = Lenguajes.map((lang) => {
    return <Card titulo={lang.nombre} descripcion={lang.comentario}/>
  })
  return (
    <div className='App'>
      <h1>FRONT CON REACT USANDO VITE</h1>
      <div className='contenedor'>
        {lenguajesList}
        <Card titulo='Titulo 1' descripcion='descripción de la tarjeta 1'/>
        <Card titulo='TITULO 2' descripcion='descripción de la tarjeta 2'/>
        <Card titulo='TITULO 3' descripcion='descripción de la tarjeta 3'/>
        <Card titulo='TITULO 4' descripcion='descripción de la tarjeta 4'/>
        <Card/>
      </div>
    </div>
  )
}

export default App
