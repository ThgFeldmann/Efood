import {
  Card,
  Descricao,
  TagContainer,
  TitleContainer,
  Titulo,
  Lista,
  CardButton,
  TagDestaque,
  TagCategoria
} from './styles'
import sushi from '../../assets/images/sushi.png'
import trattoria from '../../assets/images/trattoria.png'
import estrela from '../../assets/images/estrela.png'

const Listagem = () => (
  <Lista>
    <Card>
      <TagContainer>
        <TagDestaque>Destaque da semana</TagDestaque>
        <TagCategoria>Japonesa</TagCategoria>
      </TagContainer>
      <img src={sushi} alt="Hioki Sushi" />
      <TitleContainer>
        <Titulo>Hioki Sushi</Titulo>
        <Titulo>
          4.9
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <CardButton>
        <a href="#">Saiba mais</a>
      </CardButton>
    </Card>
    <Card>
      <TagContainer>
        <TagCategoria>Italiano</TagCategoria>
      </TagContainer>
      <img src={trattoria} alt="La Dolce Vita Trattoria" />
      <TitleContainer>
        <Titulo>La Dolce Vita Trattoria</Titulo>
        <Titulo>
          4.6
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>
        A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
        Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo
        no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor
        inesquecível. Peça já!
      </Descricao>
      <CardButton>
        <a href="#">Saiba mais</a>
      </CardButton>
    </Card>
    <Card>
      <TagContainer>
        <TagDestaque>Destaque da semana</TagDestaque>
        <TagCategoria>Japonesa</TagCategoria>
      </TagContainer>
      <img src={sushi} alt="Hioki Sushi" />
      <TitleContainer>
        <Titulo>Hioki Sushi</Titulo>
        <Titulo>
          4.9
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <CardButton>
        <a href="#">Saiba mais</a>
      </CardButton>
    </Card>
    <Card>
      <TagContainer>
        <TagDestaque>Destaque da semana</TagDestaque>
        <TagCategoria>Japonesa</TagCategoria>
      </TagContainer>
      <img src={sushi} alt="Hioki Sushi" />
      <TitleContainer>
        <Titulo>Hioki Sushi</Titulo>
        <Titulo>
          4.9
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <CardButton>
        <a href="#">Saiba mais</a>
      </CardButton>
    </Card>
    <Card>
      <TagContainer>
        <TagDestaque>Destaque da semana</TagDestaque>
        <TagCategoria>Japonesa</TagCategoria>
      </TagContainer>
      <img src={sushi} alt="Hioki Sushi" />
      <TitleContainer>
        <Titulo>Hioki Sushi</Titulo>
        <Titulo>
          4.9
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <CardButton>
        <a href="#">Saiba mais</a>
      </CardButton>
    </Card>
    <Card>
      <TagContainer>
        <TagDestaque>Destaque da semana</TagDestaque>
        <TagCategoria>Japonesa</TagCategoria>
      </TagContainer>
      <img src={sushi} alt="Hioki Sushi" />
      <TitleContainer>
        <Titulo>Hioki Sushi</Titulo>
        <Titulo>
          4.9
          <img src={estrela} alt="Estrela" />
        </Titulo>
      </TitleContainer>
      <Descricao>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Descricao>
      <CardButton>
        <a href="#">Saiba mais</a>
      </CardButton>
    </Card>
  </Lista>
)

export default Listagem
