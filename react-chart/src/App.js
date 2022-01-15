import './App.css';
import Chart1 from './components/Chart1';
import Lessons from './components/Lessons';
import LearningPercentage from './components/LearningPercentage';
import Chart2 from './components/Chart2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Chart1/>
     <Lessons/>
     <LearningPercentage/>
     <Chart2/>
     <Footer/>
    </div>
  );
}

export default App;
