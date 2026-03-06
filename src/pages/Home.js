import React from 'react'
import HomeBanner from '../components/HomeBanner'
import { Helmet } from "react-helmet";
import HomeAbout from '../components/HomeAbout'
import WhyChoose from '../components/WhyChoose'
import HomeProduct from '../components/HomeProducts'
import Achievements from '../components/Achievements'
import Process from '../components/Process'
// import Testimonials from '../components/Testimonials'
import OurCustomers from '../components/OurCustomers'
import DotedLine from '../components/DotedLine'
import HomeLocation from '../components/HomeLocation'

const Home = () => {
  return (
      <>
       <Helmet>
        <title>PP Bags Manufacturer in Bareilly | Santosh Polyfab Pvt Ltd</title>

        <meta
          name="description"
          content="Santosh Polyfab Pvt Ltd is a trusted manufacturer of PP woven fabric and polypropylene bags in Bareilly Uttar Pradesh."
        />

        <meta
          name="keywords"
          content="PP bags manufacturer Bareilly, polypropylene bags India, woven fabric manufacturer UP"
        />

        <link rel="canonical" href="https://www.santoshpolyfab.com/" />
      </Helmet>
    <div>
        <HomeBanner/>
        <WhyChoose/>
         <DotedLine/>
        <HomeAbout/>
        <DotedLine/>
          <Achievements/>
        <HomeProduct/>
          <Process/>
          <OurCustomers/>
          <HomeLocation/>
          {/* <Testimonials/> */}
      </div>
    </>
  );
};

export default Home