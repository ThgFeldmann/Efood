import { useState } from 'react'
import Product from '../Product'
import { Cardapio } from '../../App'
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

type Props = {
  produtos: Cardapio[]
}

const ProductList = ({ produtos }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)

  return (
    <>
      <ListContainer>
        <ListaProdutos>
          {produtos.map((produto) => (
            // erro aqui | n consigo renderiza as props do cardapio
            <Product
              key={produto.nome}
              foto={produto.foto}
              preco={produto.preco}
              id={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              porcao={produto.porcao}
            />
          ))}
        </ListaProdutos>
      </ListContainer>
      <Modal className={modalAberta ? 'visible' : ''}>
        {produtos.map((produto) => (
          <ModalContainer key={produto.id}>
            <img
              className="fechar"
              src={fechar}
              alt="Fechar"
              onClick={() => setModalAberta(false)}
            />
            <img className="prato" src={produto.foto} alt={produto.nome} />
            <div className="container">
              <Title>Pizza Marguerita</Title>
              <Description>
                {produto.descricao} <br />
                <br />
                <span>Serve: de {produto.porcao}</span>
              </Description>
              <Button>Adicionar ao carrinho - {produto.preco}</Button>
            </div>
          </ModalContainer>
        ))}
        <div onClick={() => setModalAberta(false)} className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductList

// feature futura

// const formataPreco = (preco: number) => {
//   return new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   }).format(preco)
// }
