import { Restaurant } from '../../App'
import { Categoria, HeroContainer, Restaurante } from './styles'

type Props = {
  restaurante: Restaurant[]
}

const Hero = ({ restaurante }: Props) => (
  <>
    <div>
      {restaurante.map((restaurante) => (
        <HeroContainer key={restaurante.id}>
          <img src={restaurante.capa} alt={restaurante.titulo} />
          <div className="container">
            <Categoria>{restaurante.tipo}</Categoria>
            <Restaurante>{restaurante.titulo}</Restaurante>
          </div>
        </HeroContainer>
      ))}
    </div>
  </>
)

export default Hero

{
  /* <HeroContainer>
        <img src={restaurante.} alt={titulo} />
        <div className="container">
          <Categoria>{tipo}</Categoria>
          <Restaurante>{titulo}</Restaurante>
        </div>
      </HeroContainer> */
}
