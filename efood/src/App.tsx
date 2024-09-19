import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Body, EstiloGlobal } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

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
