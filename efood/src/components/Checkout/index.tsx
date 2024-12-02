import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'

import {
  closeAndFinish,
  toPayment,
  toConfirmation,
  backToCart,
  closeAll,
  openCheckout
} from '../../store/reducers/cart'

import { Overlay, SideBar } from '../../styles'
import * as S from './styles'

const Checkout = () => {
  const { isDeliveryOpen, isPaymentOpen, isConfirmationOpen } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  // função que encerra a compra
  const conclude = () => {
    dispatch(closeAndFinish())
  }

  // função que fecha a sideBar sem finalizar a compra
  const close = () => {
    dispatch(closeAll())
  }

  // função que retorna ao cart
  const goBackToCart = () => {
    dispatch(backToCart())
  }

  // função que segue para a entrega do produto
  const startCheckout = () => {
    dispatch(openCheckout())
  }

  // função que segue para o pagamento dos produtos
  const goToPayment = () => {
    dispatch(toPayment())
  }

  // função que segue para a tela de confirmação da compra
  const goToConfirm = () => {
    dispatch(toConfirmation())
  }

  return (
    <>
      {/* componente da entrega */}
      <S.Container className={isDeliveryOpen ? 'is-open' : ''}>
        <Overlay onClick={close} />
        <SideBar>
          <h3>Entrega</h3>
          <S.FormContainer>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input id="receiver" name="receiver" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input id="address" name="address" type="text" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input id="city" name="city" type="text" />
            </S.InputGroup>
            <div className="side-by-side">
              <S.InputGroup className="margin-right">
                <label htmlFor="cep">CEP</label>
                <input id="cep" name="cep" type="number" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input id="number" name="number" type="number" />
              </S.InputGroup>
            </div>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input type="number" />
            </S.InputGroup>
          </S.FormContainer>
          <S.ButtonContainer>
            <button onClick={goToPayment}>Continuar com o pagamento</button>
            <button onClick={goBackToCart}>Voltar para o carrinho</button>
          </S.ButtonContainer>
        </SideBar>
      </S.Container>
      {/* componente do pagamento */}
      <S.Container className={isPaymentOpen ? 'is-open' : ''}>
        <Overlay onClick={close} />
        <SideBar>
          <h3>Pagamento - Valor a pagar R$ 000,00</h3>
          <S.FormContainer>
            <S.InputGroup>
              <label htmlFor="name">Nome no cartão</label>
              <input id="name" name="name" type="text" />
            </S.InputGroup>
            <div className="side-by-side">
              <S.InputGroup className="more-width">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input id="cardNumber" name="cardNumber" type="number" />
              </S.InputGroup>
              <S.InputGroup className="less-width">
                <label htmlFor="cardCode">CVV</label>
                <input id="cardCode" name="cardCode" type="number" />
              </S.InputGroup>
            </div>
            <div className="side-by-side">
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input id="expiresMonth" name="expiresMonth" type="text" />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input id="expiresYear" name="expiresYear" type="text" />
              </S.InputGroup>
            </div>
          </S.FormContainer>
          <S.ButtonContainer>
            <button onClick={goToConfirm}>Finalizar pagamento</button>
            <button onClick={startCheckout}>
              Voltar para a edição de endereço
            </button>
          </S.ButtonContainer>
        </SideBar>
      </S.Container>
      {/* componente da confirmação */}
      <S.Container className={isConfirmationOpen ? 'is-open' : ''}>
        <Overlay onClick={close} />
        <SideBar>
          <h3>Pedido realizado - (Order_ID)</h3>
          <div>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.{' '}
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <br />
          </div>
          <S.ButtonContainer>
            <button onClick={conclude}>Concluir</button>
          </S.ButtonContainer>
        </SideBar>
      </S.Container>
    </>
  )
}

export default Checkout
