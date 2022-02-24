import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './pages/home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
    </Routes>
  );
}

export default App;
