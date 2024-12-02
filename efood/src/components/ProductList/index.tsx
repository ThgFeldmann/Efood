import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Product from '../Product'
import { Pedido, Restaurant } from '../../App'
import {
  Button,
  Description,
  ListContainer,
  ListaProdutos,
  Modal,
  ModalContainer,
  Title
} from './styles'
import fechar from '../../assets/images/fechar.png'
import { Overlay } from '../../styles'
import { add, openCart } from '../../store/reducers/cart'

type Props = {
  restaurante: Restaurant
  pedido: Pedido
}

const ProductList = ({ restaurante, pedido }: Props) => {
  const [modal, setModal] = useState(false)
  const [foodId, setFoodId] = useState(0)
  const [foodFoto, setFoodFoto] = useState('')
  const [foodNome, setFoodNome] = useState('')
  const [foodDescricao, setFoodDescricao] = useState('')
  const [foodPorcao, setFoodPorcao] = useState('')
  const [foodPreco, setFoodPreco] = useState(0)
  const dispatch = useDispatch()

  // função que adiciona items ao carrinho
  const addToCart = () => {
    pedido.id = foodId
    pedido.nome = foodNome
    pedido.foto = foodFoto
    pedido.preco = foodPreco
    dispatch(add(pedido))
    setModal(false)
    dispatch(openCart())
  }

  // função que formata o preço do produto para Real
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  // função que formata a porção do produto para mais de uma pessoa
  const formataPorcao = (modalPorcao: string) => {
    if (modalPorcao.length > 8) {
      return 'de ' + modalPorcao
    }
    return modalPorcao
  }

  // caso não retorne uma prop restaurante, indica que está carregando
  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ListContainer>
        <ListaProdutos>
          {restaurante.cardapio.map((produto) => (
            <li
              key={produto.id}
              onClick={() => {
                setModal(true)
                setFoodNome(produto.nome)
                setFoodDescricao(produto.descricao)
                setFoodPreco(produto.preco)
                setFoodPorcao(produto.porcao)
                setFoodFoto(produto.foto)
                setFoodId(produto.id)
              }}
            >
              <Product
                foto={produto.foto}
                preco={produto.preco}
                id={produto.id}
                nome={produto.nome}
                descricao={produto.descricao}
                porcao={produto.porcao}
              />
            </li>
          ))}
        </ListaProdutos>
      </ListContainer>
      <Modal className={modal ? 'visible' : ''}>
        <ModalContainer>
          <img // botao fechar modal
            className="fechar"
            src={fechar}
            alt="Fechar"
            onClick={() => setModal(false)}
          />
          <img className="prato" src={foodFoto} alt={foodNome} />
          <div className="container">
            <Title>{foodNome}</Title>
            <Description>
              {foodDescricao}
              <br />
              <br />
              <span>Serve: {formataPorcao(foodPorcao)}</span>
            </Description>
            <Button onClick={() => addToCart()}>
              Adicionar ao carrinho - {formataPreco(foodPreco)}
            </Button>
          </div>
        </ModalContainer>
        <Overlay onClick={() => setModal(false)} />
      </Modal>
    </>
  )
}

export default ProductList
