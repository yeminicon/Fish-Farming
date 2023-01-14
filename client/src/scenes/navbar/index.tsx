import React, {useState} from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
// import Link from "./Link";
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { NavLink, Link } from 'react-router-dom';

type Props = {
    isTopOfPage: boolean;
   
}

const Navbar = ({ isTopOfPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] =useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    const NavResult = " transition duration-500 hover:text-primary-300";

  return (
    <nav>
        <div 
         className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween}  w-full gap-16`}>
                     {/* LEFT SIDE */}
            <h1 className='font-bold text-3xl font-montserrat'>Moderite</h1>

                        {/* RIGHT SIDE */}    
                        {isAboveMediumScreens ? (<div className={`${flexBetween}  w-full`}>
                    <div className={`${flexBetween}  gap-8 text-sm`}>
                   
                    </div>
                    <div className={`${flexBetween}  gap-8 font-montserrat text-sm`}>
                    <Link
                    className={NavResult}
                   
                    to="/"
               
                  >Home</Link>
                  <Link
                  className={NavResult}
                    to="/schedule"
                   
                  >Schedule</Link>
                 <Link
                 className={NavResult}
                    to="/book"
                   
                  >Book</Link>
                 <Link
                 className={NavResult}
                    to="/contact"
                   
                  >Contact Us</Link>
                                    
                                    <ActionButton>Hire an Expert</ActionButton>
                                </div>
                        </div>) : (
                            <button
                            className="rounded-full bg-secondary-500 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                          >
                            <Bars3Icon className="h-6 w-6 text-white" />
                          </button>
                        )}
                </div>

            </div>
             
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
 {/* CLOSE ICON */}
 <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          
          <Link
                    className={NavResult}
                   
                    to="/"
               
                  >Home</Link>
                  <Link
                  className={NavResult}
                    to="/schedule"
                   
                  >Schedule</Link>
                 <Link
                 className={NavResult}
                    to="/book"
                   
                  >Book</Link>
                 <Link
                 className={NavResult}
                    to="/contact"
                   
                  >Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;