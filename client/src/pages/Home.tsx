import Banner from '@/components/Banner'
import Background from '@/scenes/background'
import Category from '@/scenes/category'
import ContactUs from '@/scenes/contactUs'
import Galery from '@/scenes/gallery'
import Shop from '@/scenes/Shop'
import Slider from '@/scenes/Slider'
import Testimonial from '@/scenes/testimonial'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Slider />
      <Shop />
      <Galery />
      <Category />
      <Testimonial />
      <Banner />
     
    </div>
  )
}

export default Home