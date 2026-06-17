import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoStrip from './components/InfoStrip'
import Productos from './components/Productos'
import Nosotros from './components/Nosotros'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-base min-h-screen">
      <Navbar />
      <Hero />
      <InfoStrip />
      <Productos />
      <Nosotros />
      <Testimonios />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
