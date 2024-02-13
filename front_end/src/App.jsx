import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import LoanPartHomePage from './Components/LoanPartHomePage/LoanPartHomePage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <LoanPartHomePage/>
      <div>
        
      </div>
    </div>
  );
}

export default App;
