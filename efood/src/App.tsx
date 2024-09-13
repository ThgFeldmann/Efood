import Footer from './components/Footer'
import Hero from './components/Hero'
import Listagem from './components/Listagem'
import { Body, EstiloGlobal } from './styles'

function App() {
  return (
    <Body className="App">
      <EstiloGlobal />
      <Hero />
      <Listagem />
      <Footer />
    </Body>
  )
}

export default App
