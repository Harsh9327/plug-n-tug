import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Firstpage } from './components/Firstpage';
import Mainpage from './components/Mainpage';
import Bookingslot from './pages/Bookingslot';

function App() {
   //    window.localStorage.getItem("isLoggedIn");
   //   console.log("isLoggedIn");
  return ( 
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<Firstpage/>}/>
         <Route path='/mainpage' element={<Mainpage/>}/>   
         <Route path='/Bookingslot' element={<Bookingslot/>}/> 
      </Routes>
   </BrowserRouter>
 
  );
}

export default App;
