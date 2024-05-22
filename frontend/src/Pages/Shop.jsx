import React from 'react'
import Hero from '../Componets/Hero/Hero.jsx'
import NewCollections from '../Componets/NewCollections/NewCollections.jsx'
import NewsLetter from '../Componets/NewsLetter/NewsLetter.jsx'
import Offers from '../Componets/Offers/Offers.jsx'
import Popular from '../Componets/Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop