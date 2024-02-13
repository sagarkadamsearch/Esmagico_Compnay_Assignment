import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import LoanPartHomePage from './Components/LoanPartHomePage/LoanPartHomePage';
import Patners from './Components/Patners/Patners';
import Apply_Mobile from './Components/Apply_Mobile/Apply_Mobile';
import Testimonial from './Components/Testimonial/Testimonial';
import Menus from './Components/Navbar/Menus';
import { useState } from 'react';

function App() {
  const [menuIsActive,setMenuIsActive] = useState(false);
    const handleMenu = ()=>{
      setMenuIsActive((prev)=>!prev);  
    }

  return (
    <div className="App">
      <Navbar handleMenu={handleMenu}/>
      <Menus isActive={menuIsActive} handleMenu={handleMenu}/>
      <Hero/>
      <LoanPartHomePage/>
      <Patners/>
      <Apply_Mobile/>
      <Testimonial/>
      <div>
        
      </div>
    </div>
  );
}

export default App;
