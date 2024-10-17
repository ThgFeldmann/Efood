import { Card, NomeProduto, Descricao, Botao } from './styles'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

const Product = ({ foto, nome, descricao }: Props) => {
  // const getDescricao = (descricao: string) => {
  //   if (descricao.length > 100) {
  //     return descricao.slice(0, 70) + '...'
  //   }
  //   return descricao
  // }

  return (
    <Card>
      <img src={foto} alt={nome} />
      <NomeProduto>{nome}</NomeProduto>
      <Descricao>{descricao}</Descricao>
      <Botao>Adicionar ao carrinho</Botao>
    </Card>
  )
}

export default Product

// {getDescricao(descricao)} no lugar de 'descricao'
