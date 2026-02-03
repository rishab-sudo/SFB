import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeAbout from '../components/HomeAbout'
import WhyChoose from '../components/WhyChoose'

const Home = () => {
  return (
    <div>
        <HomeBanner/>
        <HomeAbout/>
        <WhyChoose/>
    </div>
  )
}

export default Home