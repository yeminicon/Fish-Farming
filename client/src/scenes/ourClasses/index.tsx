import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image1.jpg";
import image6 from "@/assets/image6.jpg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Hatchery",
    description:
      "Hire the best in town with the right tools and facilities your work is as good as done, trust an expert, We are ready to move with!",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Nursery",
    description:
      "Diversity is what we pride our self in, applied knowledge is our geared power, with Kin interest in achieving your recommendation.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Grow-out",
    description:
      "Trainer and expert combined to form the ultimate utopia of learning. Impacting is never a dull moment, with our Expert believe in u.",
  },
];


const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const image = `w-[300px] h-[300px]`

type Props = {
  
};

const OurClasses = () => {
  return (
    <section id="ourclasses" className="w-full bg-gray-20 py-40">
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
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Our classes provide you with the right environment, to start up, 
              improve your business. With our pictorial collection of live
               materials learning becomes easy.
            </p>
          </div>
        </motion.div>

        <section className='mx-auto min-h-full w-4/6 py-20'>

          <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                  >
                    {/* map through an array  */}
                    {benefits.map((benefit: BenefitType) => (
                      <Benefit
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                      />
                    ))}
                  </motion.div>



  </section>
  {/*
   <section className="overflow-hidden text-gray-700">
   <div className="container ">
 <div className=" mx-auto flex flex-row w-[300px] h-[300px]">
  {classes.map((item:ClassType, index) => (
      <div className=" m-5">
        <img src={item.image} />
      </div>
  ))}
    
 </div>
  
</div> 
</section> */}

<section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image1} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-classfull p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image2} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image3} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image4} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image5} />
        </div>
      </div>
      <div className="flex flex-wrap w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src={image6} />
        </div>
      </div>
    </div>
  </div>
</section>

       
      </motion.div>
    </section>
  );
};

export default OurClasses;
