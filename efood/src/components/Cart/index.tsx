import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import {
  Button,
  CartContainer,
  Item,
  Lixeira,
  SideBar,
  TotalPrice
} from './styles'
import { Overlay } from '../../styles'
import { close, remove } from '../../store/reducers/cart'
import lixo from '../../assets/images/lixo.png'

const Cart = () => {
  const { isOpen, pedido } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
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

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
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
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
