import { Lista } from './styles'
import Restaurante from '../Restaurante'
import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'

const Listagem = () => (
  <Lista>
    <Restaurante
      name={'Hioki Sushi'}
      score={4.9}
      description={
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
      }
      info={'Japonesa'}
      image={sushi}
      highlited={true}
    />
    <Restaurante
      name={'La Dolce Vita Trattoria'}
      score={4.6}
      description={
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
      }
      info={'Italiana'}
      image={trattoria}
      highlited={false}
    />
    <Restaurante
      name={'Hioki Sushi'}
      score={4.9}
      description={
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
      }
      info={'Japonesa'}
      image={sushi}
      highlited={true}
    />
    <Restaurante
      name={'La Dolce Vita Trattoria'}
      score={4.6}
      description={
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
      }
      info={'Italiana'}
      image={trattoria}
      highlited={false}
    />
    <Restaurante
      name={'Hioki Sushi'}
      score={4.9}
      description={
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
      }
      info={'Japonesa'}
      image={sushi}
      highlited={true}
    />
    <Restaurante
      name={'La Dolce Vita Trattoria'}
      score={4.6}
      description={
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
      }
      info={'Italiana'}
      image={trattoria}
      highlited={false}
    />
  </Lista>
)

export default Listagem
