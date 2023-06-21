import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Booking from './components/Booking';
import Calculator from './components/Calculator';
import Services from './components/Services';
import Steps from './components/Steps';
import { Route, Routes } from 'react-router-dom';
import Confirmation from './components/Confirmation'
import Login from './components/Login';

function App() {
  return (
    <div className='app min-h-screen' >
       
<Nav />
<Routes>
  <Route path='/' element={[<Home />, <Services />, <Steps />]}/>

  <Route path='/booking' element={[<Calculator />, <Booking />]} />

  <Route  path='/confirmation' element={[<Confirmation />]}/>
  <Route path='/login' element={<Login/>} />
</Routes>



     
     <Footer />
     
    </div>
  );
}

export default App;
