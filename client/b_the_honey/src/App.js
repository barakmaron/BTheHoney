
import { React}  from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Shop from './components/Shop';

function App() {
  return (
    <Router>
      <div className="container">
        <Header></Header>
        <div className='main_content'>
          <Routes>
              <Route path='/' element={<Navigate to="/home" />}/>
              <Route path='/home' element={<Home></Home>} />
              <Route path='/shop' element={<Shop></Shop>} />

              <Route path='/login' element={<Login></Login>} />
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
