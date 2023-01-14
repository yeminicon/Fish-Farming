import React from 'react';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  import { motion } from "framer-motion";
  import { BenefitType, SelectedPage } from "@/shared/types";
  import Benefit from "./Benefit";


  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Hire the best in town with the right tools and facilities your work is as good as done, trust an expert, We are ready!",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Diversity is what we pride our self in, applied knowledge is our geared power, with Kin interest in achieving your recommendation.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Trainer and expert combined to form the ultimate utopia of learning. Impacting is never a dull moment, with our Expert believe in Us.",
    },
  ];
  

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

type Props = {}

const Category = (props: Props) => {
  return (
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
  )
}

export default Category