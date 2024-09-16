import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Body, EstiloGlobal } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
