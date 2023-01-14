import React from 'react'
import av1 from "@/assets/avatar-ali.png"
import av2 from "@/assets/avatar-anisha.png"
import av3 from "@/assets/avatar-richard.png"
type Props = {}

const Testimonial = (props: Props) => {
  return (
<section>
    <div className='container my-10 mx-auto'>
      <div className="flex flex-col md:flex-row mx-auto mb-20">
        <div className='md:w-1/2'>
          <h1  className='mx-auto text-primary-500 px-4 md:text-left text-4xl text-center font-bold font-montserrat'>
            What People are saying about us!!
            </h1>
        </div>
        <div className='md:w-1/2'>
          <h2 className='mx-auto px-4 text-primary-300 text-center font-montserrat md:text-left'>Everythimg everywhere require Growth, 
            but life challenges pushes people off and all</h2>
        </div>
      </div>
       
        <div className='flex flex-col space-x-6 md:flex-row'>
        <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={av1} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Angela Yu</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Moderite has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
            <h4 className='text-primary-300'>Web Developer</h4>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={av2}className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “With Moderite comprehensive, guide i was able
                            to start my farm from a layman point of view, Thanks to the remarkabke 
                            and delegent team.”
            </p>
            <h4 className='text-primary-500'>Medical Doctor</h4>
          </div>
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src={av3} className="w-16 -mt-14" alt="" />
            <h5 className="text-lg font-bold">Diego Marnana</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Moderite has charged my pespectives. My team ability to
              maintain changes in our farm activities has increased greatly
               at all times keeps
              everyone motivated.”
              </p>
              <h4 className='text-primary-300'>Business Owner</h4>
           
          </div>
           

        </div>

    </div>
</section>  )
}

export default Testimonial