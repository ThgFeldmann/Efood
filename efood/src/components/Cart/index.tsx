import { useDispatch, useSelector } from 'react-redux'

import { formataPreco } from '../../Utils'

import { RootReducer } from '../../store/store'
import { closeCart, openCheckout, remove } from '../../store/reducers/cart'

import lixo from '../../assets/images/lixo.png'
import { Button, CartContainer, Item, Lixeira, TotalPrice } from './styles'
import { SideBar } from '../../styles/index'
import { Overlay } from '../../styles'

type Props = {
  totalPrice: string
}

const Cart = ({ totalPrice }: Props) => {
  const { isCartOpen, pedido } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const cartCloser = () => {
    dispatch(closeCart())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const toCheckout = () => {
    if (pedido.length > 0) {
      dispatch(openCheckout())
    } else {
      alert('Não há items no carrinho')
    }
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
          <span>{totalPrice}</span>
        </TotalPrice>
        <Button onClick={toCheckout}>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
