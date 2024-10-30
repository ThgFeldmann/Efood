import { HeaderContainer, Link, TextCart } from './styles'
import logo from '../../assets/images/logo.png'
import { useState } from 'react'

const Header = () => {
  const [cart, setCart] = useState(false)

  return (
    <HeaderContainer>
      <div className="container">
        <Link href="/">Restaurantes</Link>
        <img src={logo} alt="Logo da Efood" />
        <TextCart onClick={() => setCart(true)}>0 produto(s) no seu carrinho</TextCart>
      </div>
    </HeaderContainer>
  )
}

export default Header
