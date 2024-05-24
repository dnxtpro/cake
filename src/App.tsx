
import NavBar from './components/navbar'
import Principal from './components/principal'
import desser from './assets/dessert-13.svg'
import './App.css'
import { Entrega } from './components/entrega'


function App() {
  return (
    <>
    <div className='fuenteperso container-2xl w-full h-full mx-0  bg-fondo-100'>
      
    <NavBar/>
    <Principal/>
    <Entrega/>
    </div>
    </>
  )
}

export default App
