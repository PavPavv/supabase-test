import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// ui
import Main from './pages/Main/Main';
import Test from './pages/Test/Test';
import Id from './pages/Id/Id';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className='container'>
          <nav>
            <h1>SupaBase test</h1>
            <Link to='/'>Main</Link>
            <Link to='/test'>Test</Link>
          </nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/test' element={<Test />} />
        <Route path='/:id' element={<Id />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
