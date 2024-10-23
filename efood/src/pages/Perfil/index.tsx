import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'

const Perfil = () => {
  const location = useLocation()
  const cardapio = location.state.cardapio
  const restauranteId = location.state.id
  const restauranteTitulo = location.state.titulo
  const restauranteTipo = location.state.tipo
  const restauranteCapa = location.state.capa

  useEffect(() => {
    // garante que o scroll começa no topo da página
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <Hero
        id={restauranteId}
        titulo={restauranteTitulo}
        tipo={restauranteTipo}
        capa={restauranteCapa}
      />
      <ProductList produtos={cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
