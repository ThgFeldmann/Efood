import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Body, EstiloGlobal } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

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

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <Body className="App">
      <EstiloGlobal />
      <RouterProvider router={rotas} />
    </Body>
  )
}

export default App
