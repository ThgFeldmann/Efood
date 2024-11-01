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
import { Overlay } from '../../styles'

type Props = {
  produtos: Cardapio[]
}

const ProductList = ({ produtos }: Props) => {
  const [modal, setModal] = useState(false)
  const [modalNome, setModalNome] = useState('')
  const [modalDescricao, setModalDescricao] = useState('')
  const [modalPreco, setModalPreco] = useState(0)
  const [modalPorcao, setModalPorcao] = useState('')
  const [modalUrl, setModalUrl] = useState('')

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const formataPorcao = (modalPorcao: string) => {
    if (modalPorcao.length > 8) {
      return 'de ' + modalPorcao
    }
    return modalPorcao
  }

  return (
    <>
      <ListContainer>
        <ListaProdutos>
          {produtos.map((produto) => (
            <div
              key={produto.id}
              onClick={() => {
                setModal(true)
                setModalNome(produto.nome)
                setModalDescricao(produto.descricao)
                setModalPreco(produto.preco)
                setModalPorcao(produto.porcao)
                setModalUrl(produto.foto)
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
            </div>
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
          <img className="prato" src={modalUrl} alt={modalNome} />
          <div className="container">
            <Title>{modalNome}</Title>
            <Description>
              {modalDescricao} <br />
              <br />
              <span>Serve: {formataPorcao(modalPorcao)}</span>
            </Description>
            <Button>Adicionar ao carrinho - {formataPreco(modalPreco)}</Button>
          </div>
        </ModalContainer>
        <Overlay onClick={() => setModal(false)} />
      </Modal>
    </>
  )
}

export default ProductList
