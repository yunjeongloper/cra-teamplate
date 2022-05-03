import { Routes, Route, Navigate } from 'react-router-dom';

import About from './container/About';
import Home from './container/Home';
import NotFound from './container/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="redirect" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
