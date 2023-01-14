import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {}

const Background = (props: Props) => {
  return (
    <section className='bg-white container py-20 mx-auto w-full rounded-lg '>
        <div className="flex flex-col md:flex-row mx-auto p-6 space-x-6 p-y-12">
            <div className="flex flex-col space-y-5 space-x-6 md:w-1/2">
                <h1 className="font-bold text-3xl text-center md:text-left m-5">
                    Let handle your farm, you'll handle your money.
                </h1>
                <p className='text-primary-300 text-center md:text-left'>With the right expertise, rearing of catfish locally <strong>be standarised.</strong>
                    We have the market, with hundred of potential client
                </p>
                <AnchorLink href='/contact' className='w-fit text-white rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'>
                    Get started
                </AnchorLink>
            </div>
            <div className="flex flex-col mt-10 space-y-2 space-x-8 md:w-1/2">
                <div className='flex flex-col space-x-0 space-y-6'>
                    <div className='flex flex-row mx-auto hover:bg-primary-300 hover:text-white rounded-lg'>
                        <div className='mx-5 my-auto'> 
                        <div className='w-12 h-10 rounded-full justify-center items-center bg-primary-100'>
                            
                            </div>
                            </div> 
                            <div className='w-7/8 flex flex-col space-y-1'>
                                    <h1 className='font-bold '>Rewards</h1>
                                    <p className=' text-primary-100 hover:text-white'>The best farming system offer some tantalizing combinations of 
                                        romotions and prizes
                                    </p>
                            </div>
                        </div>
                        <div className='flex flex-row mx-auto hover:bg-primary-300 hover:text-white rounded-lg'>
                        <div className='mx-5 my-auto'> 
                        <div className='w-12 h-10 rounded-full justify-center items-center bg-primary-100'>
                            
                            </div>
                            </div> 
                            <div className='w-7/8 flex flex-col space-y-1'>
                                    <h1 className='font-bold '>Rewards</h1>
                                    <p className=' text-primary-100 hover:text-white'>The best farming system offer some tantalizing combinations of 
                                        romotions and prizes
                                    </p>
                            </div>
                        </div>
                   
                        <div className='flex flex-row mx-auto hover:bg-primary-300 hover:text-white rounded-lg'>
                        <div className='mx-5 my-auto'> 
                        <div className='w-12 h-10 rounded-full justify-center items-center bg-primary-100'>
                            
                            </div>
                            </div> 
                            <div className='w-7/8 flex flex-col space-y-1'>
                                    <h1 className='font-bold '>Rewards</h1>
                                    <p className=' text-primary-100 hover:text-white'>The best farming system offer some tantalizing combinations of 
                                        romotions and prizes
                                    </p>
                            </div>
                        </div>
                </div>
            </div>
            </div>
       

    </section>
  )
}

export default Background;