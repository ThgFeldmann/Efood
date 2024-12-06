import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store/store'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  toPayment,
  backToCart,
  closeAll,
  openCheckout,
  conclude,
  closeAfterConcluded
} from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { Overlay, SideBar } from '../../styles'
import * as S from './styles'

type Props = {
  totalPrice: string
}

const Checkout = ({ totalPrice }: Props) => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { isDeliveryOpen, isPaymentOpen, isConfirmationOpen } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: 12,
      complement: '',
      cardDisplayName: '',
      cardNumber: 1111222233334444,
      cardCode: '',
      expiresMonth: 1,
      expiresYear: 1234
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(4, 'O nome precisa ter pelo menos 4 caracteres')
        .required('O campo é obrigatório'),
      zipCode: Yup.string()
        .min(9, 'O CEP inserido não é válido')
        .required('O campo é obrigatório'),
      number: Yup.string()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        1,
        'O campo precisa ter pelo menos 1 caracteres'
      ),

      cardDisplayName: Yup.string().when((values, schema) =>
        isPaymentOpen ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPaymentOpen ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        isPaymentOpen ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        isPaymentOpen ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        isPaymentOpen ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            city: values.city,
            description: values.address,
            number: Number(values.number),
            zipCode: values.zipCode,
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            cardNumber: Number(values.cardNumber),
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  // função que fecha a sideBar sem finalizar a compra
  const close = () => {
    if (isSuccess) {
      dispatch(closeAfterConcluded())
    } else {
      dispatch(closeAll())
    }
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
  const concludeOrder = () => {
    if (isSuccess) {
      dispatch(conclude())
    } else {
      alert('Não foi possível finalizar a compra!')
    }
  }

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <form onSubmit={form.handleSubmit}>
      {/* componente da entrega */}
      <S.Container className={isDeliveryOpen ? 'is-open' : ''}>
        <Overlay onClick={close} />
        <SideBar>
          <h3>Entrega</h3>
          <S.FormContainer>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                name="receiver"
                type="text"
                required
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('receiver') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('address') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                name="city"
                type="text"
                required
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <div className="side-by-side">
              <S.InputGroup className="margin-right">
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="number"
                  required
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  name="number"
                  type="number"
                  required
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </S.InputGroup>
            </div>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                name="complement"
                type="text"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('complement') ? 'error' : ''}
              />
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
          <h3>Pagamento - Valor a pagar {totalPrice}</h3>
          <S.FormContainer>
            <S.InputGroup>
              <label htmlFor="cardDisplayName">Nome no cartão</label>
              <input
                id="cardDisplayName"
                name="cardDisplayName"
                type="cardDisplayName"
                required
                value={form.values.cardDisplayName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardDisplayName') ? 'error' : ''}
              />
            </S.InputGroup>
            <div className="side-by-side">
              <S.InputGroup className="more-width">
                <label htmlFor="cardNumber">Número do cartão</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="number"
                  required
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup className="less-width">
                <label htmlFor="cardCode">CVV</label>
                <input
                  id="cardCode"
                  name="cardCode"
                  type="number"
                  required
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                />
              </S.InputGroup>
            </div>
            <div className="side-by-side">
              <S.InputGroup>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  name="expiresMonth"
                  type="number"
                  required
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                />
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  name="expiresYear"
                  type="number"
                  required
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                />
              </S.InputGroup>
            </div>
          </S.FormContainer>
          <S.ButtonContainer>
            <button onClick={concludeOrder}>Finalizar pagamento</button>
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
          <h3>Pedido realizado - {data?.orderId}</h3>
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
            <button onClick={close} type="submit">
              Concluir
            </button>
          </S.ButtonContainer>
        </SideBar>
      </S.Container>
    </form>
  )
}

export default Checkout

{
  /*
    masks
    cep: "99999-999"
    cardNumber: "9999 9999 9999 9999"
    cardCode: "999"
    expiresMonth: "99"
    expiresYear: "9999"
  */
}
