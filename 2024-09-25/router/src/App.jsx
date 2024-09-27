import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
