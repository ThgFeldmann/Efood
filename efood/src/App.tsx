import { BrowserRouter } from 'react-router-dom'
import { Body, EstiloGlobal } from './styles'

import Rotas from './routes'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

function App() {
  return (
    <BrowserRouter>
      <Body className="App">
        <EstiloGlobal />
        <Rotas />
      </Body>
    </BrowserRouter>
  )
}

export default App
