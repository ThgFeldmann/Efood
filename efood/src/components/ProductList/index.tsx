import Product from '../Product'
import { ListContainer, ListaProdutos } from './styles'
import pizza from '../../assets/images/pizza.png'

const ProductList = () => (
  <ListContainer>
    <ListaProdutos>
      <Product
        name={'Pizza Marguerita'}
        description={
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
        }
        image={pizza}
      />
      <Product
        name={'Pizza Marguerita'}
        description={
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
        }
        image={pizza}
      />
      <Product
        name={'Pizza Marguerita'}
        description={
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
        }
        image={pizza}
      />
      <Product
        name={'Pizza Marguerita'}
        description={
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
        }
        image={pizza}
      />
      <Product
        name={'Pizza Marguerita'}
        description={
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
        }
        image={pizza}
      />
      <Product
        name={'Pizza Marguerita'}
        description={
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
        }
        image={pizza}
      />
    </ListaProdutos>
  </ListContainer>
)

export default ProductList
