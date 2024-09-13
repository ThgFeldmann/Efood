import { FooterContainer, RedesContainer } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Logo da Efood" />
    <RedesContainer>
      <img src={instagram} alt="Logo do Instagram" />
      <img src={facebook} alt="Logo do Facebook" />
      <img src={twitter} alt="Logo do Twitter" />
    </RedesContainer>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
