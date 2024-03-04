import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage';
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import Aboutpage from './pages/Aboutpage';
import Countriespage from './pages/countriespage';


function App() {
  return (
    <div className="App">
  
<BrowserRouter>
<Routes>
  <Route path='/' element={<Homepage/>}> </Route>
  <Route path='/Aboutpage' element={<Aboutpage/>}> </Route>
  <Route path='/Countriespage' element={<Countriespage/>}> </Route>
    
    
 
</Routes>
</BrowserRouter>
 
    
    </div>
  );
}

export default App;


