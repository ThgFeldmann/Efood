import logo from '../../assets/images/logo.png'
import { Container, Title } from './styles'
import bannerImg from '../../assets/images/Vector.png'

const Hero = () => (
  <Container style={{ backgroundImage: `url(${bannerImg})` }}>
    <img src={logo} alt="Efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </Container>
)

export default Hero
