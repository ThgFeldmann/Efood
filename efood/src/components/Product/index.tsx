import { Card, NomeProduto, Descricao, Botao } from './styles'
import pizza from '../../assets/images/pizza.png'

const Product = () => (
  <Card>
    <img src={pizza} alt="Pizza Marguerita" />
    <NomeProduto>Pizza Marguerita</NomeProduto>
    <Descricao>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default Product
