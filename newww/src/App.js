
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home_emp from './components/Home_emp';
import Add_emp from './components/Add_emp';

function App() {
  return (
    <div >
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home_emp />}></Route>
        <Route path='/add' element={<Add_emp />}></Route>
      </Routes>
      </BrowserRouter>
  
 
    </div>
  );
}

export default App;
