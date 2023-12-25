import React from 'react'
import Headers from './compontents/Headers'
import Tables from './compontents/Tables'
import Filters from './compontents/Filters'
import Cards from './compontents/Cards'


const Home = () => {
  return (
    <div>
     <Headers/>
     <Tables/>
      <Filters/> 
     <Cards/>
    </div>
  )
}

export default Home