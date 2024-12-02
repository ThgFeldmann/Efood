import { useDispatch, useSelector } from 'react-redux'
import { HeaderContainer, Link, CartButton } from './styles'
import logo from '../../assets/images/logo.png'
import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store/store'

const Header = () => {
  const dispatch = useDispatch()
  const { pedido } = useSelector((state: RootReducer) => state.cart)

  const CartOpener = () => {
    dispatch(openCart())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <Link href="/">Restaurantes</Link>
        <img src={logo} alt="Logo da Efood" />
        <CartButton onClick={CartOpener}>
          {pedido.length} produto(s) no seu carrinho
        </CartButton>
      </div>
    </HeaderContainer>
  )
}

export default Header
