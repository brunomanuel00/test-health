import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Carusel from './components/Carousel'
import Cards from './components/Cards'
import drs from "./assets/Doctors.png"
import Footer from './components/Foteer'

function App() {

  return (
    <div className='container-fluid'>

      <header>
        <NavBar />
      </header>
      <main className=' d-flex container-fluid mt-lg-5 flex-column'>

        <Carusel />
        <div className='justify-content-center d-inline-flex pt-lg-4 mt-lg-5'>
          <h1 className='d-inline-flex pt-lg-5 pt-sm-1 title-h1 mt-lg-4 mt-sm-1 text-center text-wrap badge' >Tu bienestar es nuestra prioridad</h1>
        </div>
        <div className='justify-content-center d-inline-flex pt-lg-4 mt-lg-5 cnt-btn'>
          <button className='btn btn-primary d-inline-flex px-lg-5 py-lg-2 btn-contact'>Contáctanos</button>
        </div>
        <div className='cardpad'>
          <Cards />
        </div>
        <div className='container text-center mt-lg-5 '>
          <div className='row justify-content-center'>
            <div className='col-12'>
              <h3 className='title-h3'>Explora todos nuestros servicios</h3>
            </div>
            <div className='col-12 mt-2'>
              <button className='btn btn-primary d-inline-flex px-lg-5 py-lg-2 btn-contact'>Ver más</button>
            </div>
          </div>
        </div>
        <div className='container text-center mt-lg-5 pt-3'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-6'>
              <img src={drs} alt="Doctores" style={{ width: '70%', height: '100%' }} />
            </div>
            <div className='col-12 col-lg-6 mt-2'>
              <div className='row justify-content-center text-center'>
                <div className='col-12'>
                  <h4 className='title-h4'>Servicios DOT</h4>
                </div>
                <div className='col-12 '>
                  <p className='paraf'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
                </div>
              </div>
            </div>
            <div className='col-12 mt-2'>
              <button className='btn btn-primary d-inline-flex px-lg-5 py-lg-2 btn-contact'>Ver más</button>
            </div>
          </div>
        </div>
      </main>
      {/* No alcance a estilizar el footer ni tampoco puse la accion del boton cuando esta en responsive, no me dio tiempo */}
      <footer className='footer row mt-4'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
