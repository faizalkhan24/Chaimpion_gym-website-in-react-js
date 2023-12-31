import './App.css';
import Hero from './componets/Hero';
import Program from './componets/programs/program';
import Resons from './componets/resons/resons';
import Plan from './componets/plans/plan';
import Testimonials from './componets/testimonials/testimonials';
import Join from './componets/join/join';
import Footer from './componets/footer/footer';
function App() {
  return (
    <div className="App">
     <Hero/>
     <Program/>
     <Resons/>
     <Plan/>
     <Testimonials/>
     <Join/>
     <Footer/>
    </div>
  );
}

export default App;
