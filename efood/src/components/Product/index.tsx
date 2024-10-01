import { Card, NomeProduto, Descricao, Botao } from './styles'

type Props = {
  name: string
  description: string
  image: string
}

const Product = ({ name, description, image }: Props) => (
  <Card>
    <img src={image} alt={name} />
    <NomeProduto>{name}</NomeProduto>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default Product
