import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import diadiemDl from './pages/diadiemDl';
import diadiemAn from './pages/diadiemAn';
import camnangDl from './pages/camnangDl';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/diadiemDl' component={diadiemDl} />
        <Route path='/diadiemAn' component={diadiemAn} />
        <Route path='/camnangDl' component={camnangDl} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
