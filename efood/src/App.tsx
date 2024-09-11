import Hero from './components/Home/Hero'
import Listagem from './components/Home/Listagem'
import { Body, EstiloGlobal } from './styles'

function App() {
  return (
    <Body className="App">
      <EstiloGlobal />
      <Hero />
      <Listagem />
    </Body>
  )
}

export default App
