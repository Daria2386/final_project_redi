import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Booking from './components/Booking';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className='app min-h-screen' >
<Nav />
<Home />
<Booking />
     <Calculator />
     <Footer />
    </div>
  );
}

export default App;
