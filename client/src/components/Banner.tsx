import ActionButton from '@/shared/ActionButton'
import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    
}

const Banner = (props: Props) => {
    
  return (
    <section className='w-full bg-primary-300 py-16'>
        <div className='mx-auto container flex flex-col md:flex-row w-5/6'>
            <div className='mx-auto md:w-2/3'>
            <h1 className='ml-20 font-bold text-cnter text-white font-montserrat text-2xl'>Simlipfy How your team works better with Moderite!</h1>
            </div>
            <div  className='md:w-1/3 mx-auto justify-center items-center'> 
            <AnchorLink
                 className="rounded-md  bg-secondary-500 px-10 py-2 text-white hover:bg-primary-500 hover:text-white">
                    Get Started
            </AnchorLink>
            </div>
               
        </div>
    </section>
  )
}

export default Banner