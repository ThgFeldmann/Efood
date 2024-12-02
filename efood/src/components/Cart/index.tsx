import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { Button, CartContainer, Item, Lixeira, TotalPrice } from './styles'
import { SideBar } from '../../styles/index'
import { Overlay } from '../../styles'
import { closeCart, openCheckout, remove } from '../../store/reducers/cart'
import lixo from '../../assets/images/lixo.png'

const Cart = () => {
  const { isCartOpen, pedido } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const cartCloser = () => {
    dispatch(closeCart())
  }

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return pedido.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const toCheckout = () => {
    dispatch(openCheckout())
  }

  return (
    <CartContainer className={isCartOpen ? 'is-open' : ''}>
      <Overlay onClick={cartCloser} />
      <SideBar>
        <ul>
          {pedido.map((pedido) => (
            <Item key={pedido.id}>
              <img src={pedido.foto} alt={pedido.nome} />
              <div>
                <h3>{pedido.nome}</h3>
                <p>{formataPreco(pedido.preco)}</p>
              </div>
              <Lixeira
                onClick={() => removeItem(pedido.id)}
                src={lixo}
                alt="Remover pedido"
              />
            </Item>
          ))}
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </TotalPrice>
        <Button onClick={toCheckout}>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
