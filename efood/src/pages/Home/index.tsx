import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Listagem from '../../components/RestaurantList'
import { useState, useEffect } from 'react'
import { Restaurant } from '../../App'

const Home = () => {
  const [home, setHome] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setHome(res))
  }, [])

  return (
    <>
      <Banner />
      <Listagem restaurante={home} />
      <Footer />
    </>
  )
}

export default Home
