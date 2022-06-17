import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';

function App(){
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>

    </div>
    <Footer />
    </Router>
  );
}

export default App;
