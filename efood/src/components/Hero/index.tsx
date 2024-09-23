import { Categoria, HeroContainer, Restaurante } from './styles'
import hero from '../../assets/images/hero.png'

const Hero = () => (
  <HeroContainer>
    <img src={hero} alt="La Dolce Vita Trattoria" />
    <div className="container">
      <Categoria>Italiana</Categoria>
      <Restaurante>La Dolce Vita Trattoria</Restaurante>
    </div>
  </HeroContainer>
)

export default Hero
