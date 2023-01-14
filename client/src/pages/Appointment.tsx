import React from 'react';
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { useParams } from 'react-router-dom';
import Nursery from "@/assets/nursery1.jpg";

type Props = {}

const Appointment = (props: Props) => {
    const {id} = useParams()
    const boy = id;
    
    if ( boy === ":Nursery") {
            return (
            <section className="w-full bg-gray-20 py-40">
        {/* <motion.div>
        <div>
            
        </div>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText> Love Nursery </HText>
            <p className="py-5">
              Our classes provide you with the right environment, to start up, 
              improve your business. With our pictorial collection of live
               materials learning becomes easy.
            </p>
          </div>
        </motion.div>
            
        
        </motion.div> */}

        <div className='container flex flex-row-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-o md:flex-row'>

            <div className=' mx-auto flex flex-col mb-32 space-y-12 md:w-1/2'>
                <div className="max-w-md  text-4xl font-bold text-center md:text-5xl md:text-left">
                        Catfish Nursery system depends on the type of Species
                </div>
                <p className="max-w-sm text-center text-bg-white md:text-left">
                        Manging fish farming becomes easy, with the right tools and equipment to plan
                        day to day tasks
                </p>
                 <div className="flex justify-center md:justify-start">
                    <a className='p-3 px-6 pt-2 text-white bg-primary-500 rounded-full baseline hover:bg-blend-saturation'>
                            Get Started
                    </a>
                </div>
               
            </div>
          
                <div className='md:w-1/2'>
                    <img src={Nursery}/>
                </div>
               
            </div>

            {/* featured Item */}
            <section id="features">
   
      <div
        className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
        <div className="flex flex-col space-y-12 md:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

     
        <div className="flex flex-col space-y-8 md:w-1/2">
    
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
          
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p className="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

       
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
          
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p className="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

     
          <div
            className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
  
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div
                  className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p className="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

            {/* <div className='flex flow-row w-5/6 px-3 mx-auto'>
                <div className='w-1/2 p-5'>
                    <h1 className='font-bold text-4xl text-black font-montserrat mb-5'>
                        What's difference about Nursing Clarias?</h1>
                    <p className='text-left pt-6 text-sm text-gray-10 '>Clarias is breedof catfish, used mostly sub sarah desert
                        which high adaptability to disease such as castro disease
                    </p>
                </div>
                <div className='w-1/2 p-5'>
                    <div className='flex flex-row my-10'>
                        <div className='mr-5 w-10 h-7 text-center align-center text-white bg-primary-500 rounded-full baseline'>01</div>
                        <div>
                            <h1 className='font-bold mb-5 text-black '>Daily monitoring: day to day over see</h1>
                            <p className='text-gray-10 '>Daily montoring require the right applied knowledge,
                                very well men are considered skillful based on what they 
                                know.
                            </p>
                        </div>
                        
                    </div>
                    <div className='flex flex-row my-10'>
                        <div className='mr-5 w-10 h-7 text-center align-center text-white bg-primary-500 rounded-full baseline'>01</div>
                        <div>
                            <h1 className='font-bold mb-5 text-black'>Daily monitoring: day to day over see</h1>
                            <p className='text-gray-10'>Daily montoring require the right applied knowledge,
                                very well men are considered skillful based on what they 
                                know.
                            </p>
                        </div>
                        
                    </div>
                    <div className='flex flex-row my-10'>
                        <div className='mr-5 w-10 h-7 text-center align-center text-white bg-primary-500 rounded-full baseline'>01</div>
                        <div>
                            <h1 className='text-black mb-5 font-bold'>Daily monitoring: day to day over see</h1>
                            <p className='text-gray-10'>Daily montoring require the right applied knowledge,
                                very well men are considered skillful based on what they 
                                know.
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div> */}
       


   </section>)
    }
      else {
    
  return (
   <section className="w-full bg-gray-20 py-40">
               <motion.div
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText> {id}</HText>
            <p className="py-5">
              Our classes provide you with the right environment, to start up, 
              improve your business. With our pictorial collection of live
               materials learning becomes easy.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 basis-3/5 md:mt-0">
            <form>
                <input 
                placeholder="First name"/>
                <input 
                placeholder="Last name"/>
                <input 
                placeholder="Email"/>
                <input 
                placeholder="Age"/>
                <select>
                    <option>Age</option>
                    <option>Age</option>
                </select>
                <select>
                    <option>3 month</option>
                    <option>Age</option>
                </select>
                <input />
                <button>Submit</button>
            </form>
        </div>
        </motion.div>
   </section>
  )}
}

export default Appointment;