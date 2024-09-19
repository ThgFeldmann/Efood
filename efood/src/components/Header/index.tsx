import { HeaderContainer, Link, TextCart } from './styles'
import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <Link href="/">Restaurantes</Link>
      <img src={logo} alt="Logo da Efood" />
      <TextCart>0 produto(s) no seu carrinho</TextCart>
    </div>
  </HeaderContainer>
)

export default Header
