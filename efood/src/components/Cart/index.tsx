import {
  Button,
  CartContainer,
  Item,
  Lixeira,
  SideBar,
  TotalPrice
} from './styles'
import { Overlay } from '../../styles'

import pizza from '../../assets/images/pizza_modal.png'
import lixo from '../../assets/images/lixo.png'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <SideBar>
        <ul>
          <Item>
            <img src={pizza} alt="Pizza Marguerita" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <Lixeira src={lixo} alt="Lixeira" />
          </Item>
          <Item>
            <img src={pizza} alt="Pizza Marguerita" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
              <Lixeira src={lixo} alt="Lixeira" />
            </div>
          </Item>
          <Item>
            <img src={pizza} alt="Pizza Marguerita" />
            <div>
              <h3>Pizza Marguerita</h3>
              <p>R$ 60,90</p>
            </div>
            <Lixeira src={lixo} alt="Lixeira" />
          </Item>
        </ul>
        <TotalPrice>
          <p>Valor total</p>
          <span>R$ XXX,XX</span>
        </TotalPrice>
        <Button>Continuar com a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
