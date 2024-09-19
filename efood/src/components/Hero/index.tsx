import { Categoria, Imagem, Restaurante } from './styles'

const Hero = () => (
  <Imagem>
    <div className="container">
      <Categoria>Italiana</Categoria>
      <Restaurante>La Dolce Vita Trattoria</Restaurante>
    </div>
  </Imagem>
)

export default Hero
