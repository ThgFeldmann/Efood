import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import Cart from '../../components/Cart'
import Checkout from '../../components/Checkout'
import { RootReducer } from '../../store/store'
import { formataPreco } from '../../Utils'

const Perfil = () => {
  const { pedido } = useSelector((state: RootReducer) => state.cart)
  const location = useLocation()
  const id = location.state.id

  const { data: restaurante } = useGetRestaurantQuery(id)

  const getTotalPrice = () => {
    return pedido.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const totalCost = formataPreco(getTotalPrice())

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
      <Cart totalPrice={totalCost} />
      <Checkout totalPrice={totalCost} />
    </>
  )
}

export default Perfil
