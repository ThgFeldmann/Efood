import { Disclaimer, FooterContainer, RedesContainer } from './styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <img className="logo" src={logo} alt="Logo da Efood" />
    <RedesContainer>
      <img src={instagram} alt="Logo do Instagram" />
      <img src={facebook} alt="Logo do Facebook" />
      <img src={twitter} alt="Logo do Twitter" />
    </RedesContainer>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterContainer>
)

export default Footer
