import { useEffect, useState } from "react";
import Navbar from '@/scenes/navbar';
import { SelectedPage } from './shared/types';
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";
import Slider from "./scenes/Slider";
import Shop from "./scenes/Shop";
import Category from "./scenes/category";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Appointment from "./pages/Appointment";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="aspp bg-gray-20">
      <BrowserRouter>
      <Navbar isTopOfPage={isTopOfPage} />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/schedule" element={<Schedule />}/>
            <Route path="/book" element={<Book />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/appointment/:id" element={<Appointment />}/>
          </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
   