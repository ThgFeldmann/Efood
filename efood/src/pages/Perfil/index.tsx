import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductList from '../../components/ProductList'
import { Cardapio } from '../../App'

const Perfil = () => {
  const [perfil, setPerfil] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPerfil(res))
  }, [])

  return (
    <>
      <Header />
      {/* placeholder | problema futuro */}
      <Hero restaurante={[]} />
      <ProductList produtos={perfil} />
      <Footer />
    </>
  )
}

export default Perfil
