import { BrowserRouter, Route, Routes as Router } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <BrowserRouter>
        <Navbar />
        <Router>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Home />} />
        </Router>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
