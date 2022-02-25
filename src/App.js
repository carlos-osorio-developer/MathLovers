import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Calculator from './components/calculator';
import Home from './pages/home';
import Quote from './pages/quotes';
import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
      </Route>
    </Routes>
  );
}

export default App;
