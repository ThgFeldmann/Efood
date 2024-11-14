import logo from '../../assets/images/logo.png'
import { Container, Title } from './styles'
import bannerImg from '../../assets/images/Vector.png'

const Banner = () => (
  <Container style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <img src={logo} alt="Efood" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </Container>
)

export default Banner
