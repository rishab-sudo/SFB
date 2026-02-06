import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
import WhyChoose from '../components/WhyChoose'
import HomeProduct from '../components/HomeProducts'
import Achievements from '../components/Achievements'
import Process from '../components/Process'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <HomeBanner/>
        <WhyChoose/>
        <HomeAbout/>
          <Achievements/>
        <HomeProduct/>
          <Process/>
          <Testimonials/>
    </div>
  )
}

export default Home