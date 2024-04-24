import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Cards from './components/card/Cards';
import Section from './components/section/Section';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Cards/> */}
      <Section />
    </div>
  );
}

export default App;
