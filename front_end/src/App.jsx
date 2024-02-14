import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import LoanPartHomePage from './Components/LoanPartHomePage/LoanPartHomePage';
import Patners from './Components/Patners/Patners';
import Apply_Mobile from './Components/Apply_Mobile/Apply_Mobile';
import Testimonial from './Components/Testimonial/Testimonial';
import Menus from './Components/Navbar/Menus';
import { useEffect, useState } from 'react';
import FAQ from './Components/FAQ/FAQ';
import Process from './Components/Process/Process';
import Footer from './Components/Footer/Footer';
import Refer from './Components/Refer/Refer';
import EMI from './Components/EMI/EMI';
import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  const [menuIsActive,setMenuIsActive] = useState(false);
    const handleMenu = ()=>{
      setMenuIsActive((prev)=>!prev);  
    }

  useEffect(()=>{
      AOS.init({
        duration:1000,
        easing: 'ease-in-out'
      })
  },[])

  return (
    <div className="App">
      <Navbar handleMenu={handleMenu}/>
      <Menus isActive={menuIsActive} handleMenu={handleMenu}/>
      <Hero/>
      <LoanPartHomePage/>
      <EMI/>
      <Patners/>
      <Apply_Mobile/>
      <Testimonial/>
      <Process/>
      <Refer/>
      <FAQ/>
      <Footer/>
      <div>
        
      </div>
    </div>
  );
}

export default App;
