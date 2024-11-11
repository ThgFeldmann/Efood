import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Body, EstiloGlobal } from './styles'

import Rotas from './routes'
import { store } from './store/store'

export type Pedido = {
  id: number
  nome: string
  foto: string
  preco: number
}

export type Restaurant = {
  // prop com informações gerais
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Body className="App">
          <EstiloGlobal />
          <Rotas />
        </Body>
      </BrowserRouter>
    </Provider>
  )
}

export default App
