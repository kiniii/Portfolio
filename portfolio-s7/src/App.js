import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div>
      <Homepage />
      <div className='h-screen bg-gradient-to-b from-custom_black to-custom_lightblack'>
        <About />
        <CaseStudy />
      </div>
    </div>
  );
}

export default App;



