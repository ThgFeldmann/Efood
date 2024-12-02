import { useLocation } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'

const Perfil = () => {
  const location = useLocation()
  const id = location.state.id

  const { data: restaurante } = useGetRestaurantQuery(id)

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Hero
        titulo={restaurante.titulo}
        tipo={restaurante.tipo}
        capa={restaurante.capa}
      />
      <ProductList
        restaurante={restaurante}
        pedido={{
          id: 0,
          nome: '',
          foto: '',
          preco: 0
        }}
      />
      <Footer />
      <Cart />
      <Checkout />
    </>
  )
}

export default Perfil
