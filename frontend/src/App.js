
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
  
import Home from './Pages/Home'
import Aboutus from './Pages/AboutUs'
import Usedcarloan from './Pages/UsedCarLoan'
import Personaloan from './Pages/PersonalCarLoan'
import Loginsignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path = '/AboutUs' element ={<Aboutus/>}/>
        <Route path='/UsedCarLoan' element = {<Usedcarloan/>} />
        <Route path= '/PersonalLoan' element={<Personaloan/>} />
        <Route path='/login' element={<Loginsignup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>  
     
    </div>
  );
}

export default App;
