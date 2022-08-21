import './App.css';
import Areachart from './components/Areachart';
import Barchart from './components/Barchart';
import Linechart from './components/Linechart';
import Piechart from './components/Piechart';



function App() {
 
    

  return (
    <div className="App">
    <Linechart/>
    <Areachart/>
    <Barchart/>
    <Piechart/>
    </div>
  );
}

export default App;
