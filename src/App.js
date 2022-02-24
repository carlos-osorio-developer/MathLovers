import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Calculator from './components/calculator';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
      </Route>
    </Routes>
  );
}

export default App;
