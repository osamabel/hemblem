import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <div className="App bg-red">
      <Header/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
    </div>
  );
}

export default App;
