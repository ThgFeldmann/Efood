import Product from '../Product'
import { ListContainer, ListaProdutos } from './styles'

const ProductList = () => (
  <ListContainer>
    <ListaProdutos>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ListaProdutos>
  </ListContainer>
)

export default ProductList
