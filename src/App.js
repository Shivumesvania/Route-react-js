import Homepage from './Homepage';
import About from './About';
import Content from './Contect';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 
function App() {
  return (
     
    <>
       <Router>
         <Routes>
           <Route path='/' element={ <Homepage/>}/>
           <Route path='/Homepage' element={ <Homepage/>}/>
           <Route path='/About' element={ <About/>}/>
           <Route path='/Contect' element={ <Content/>}/>
         </Routes>
       </Router>
    </>
     
  );
}

export default App;
