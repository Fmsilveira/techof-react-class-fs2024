import { Routes, Route } from 'react-router-dom'
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import APage from './components/APage';
import BPage from './components/BPage';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='' element={<HomePage />} />
      <Route path='/a' element={<APage />} />
      <Route path='/b' element={<BPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
