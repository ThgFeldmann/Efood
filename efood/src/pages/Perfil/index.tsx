import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import { Restaurant } from '../../App'

const Perfil = () => {
  const [restaurante, setRestaurante] = useState<Restaurant>()
  const location = useLocation()

  const id = location.state.id

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))

    // garante que o scroll começa no topo da página
    window.scrollTo(0, 0)
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <div key={restaurante.id}>
        <Hero
          titulo={restaurante?.titulo}
          tipo={restaurante?.tipo}
          capa={restaurante?.capa}
        />
        <ProductList produtos={restaurante?.cardapio} />
      </div>
      <Footer />
    </>
  )
}

export default Perfil
