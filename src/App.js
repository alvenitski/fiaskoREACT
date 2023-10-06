import './App.css';
//Importation components
import {Neura} from './components/Neura1/index.js';
import {Meta} from './components/Meta/index.js';
import {Canvas} from './components/Canvas/index.js';
import {StaresCarousel} from './components/Stares/index.js';
import {Triptych} from './components/Triptych/index.js';
//Creation variables communes a chaque component
const text = (<p>acrylic and newspapers on cardboard <br/>40x60cm <br/>2023.</p>)

function App() {
  return (
    <div  className='container'>
        <Neura text={text} />   
        <Meta text={text}/> 
        <Canvas/> 
        <StaresCarousel/> 
        <Triptych/>
           
    </div>
  );
}

export default App;
