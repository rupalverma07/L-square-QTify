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
      <div style={{borderBottom:"1px solid #34c94b", marginBottom:"10px", paddingBottom:"7px"}}>
      <Section>Top Albums</Section> 
      </div>
      <Section>New Albums</Section>
    </div>
  );
}

export default App;
