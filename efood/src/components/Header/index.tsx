import { HeaderContainer, Link, CartButton } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <Link href="/">Restaurantes</Link>
        <img src={logo} alt="Logo da Efood" />
        <CartButton>0 produto(s) no seu carrinho</CartButton>
      </div>
    </HeaderContainer>
  )
}

export default Header
