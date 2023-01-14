
import ActionButton from '@/shared/ActionButton'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {}

const Shop = (props: Props) => {
  return (
    <section className=' mx-auto h-20 w-full py-20'>
        <div className='grid justify-items-center '>
            <div>
            <p>Joint Our team of expert build your portfolio with Modderite</p>
            </div>
            <div className='m-2'>
            <AnchorLink
                className="rounded-md bg-secondary-500 text-white px-10 py-2 hover:bg-primary-500 hover:text-white">
                Become an Expert 
            </AnchorLink>
            </div>
        </div>
    </section>
  )
}

export default Shop