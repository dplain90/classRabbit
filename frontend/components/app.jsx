import React from 'react';
import { Link } from 'react-router';
import NavContainer from './nav/nav_container';
import BottomNav from './nav/bottom_nav';
import store from '../store/store';



const App = ({ children }) =>
{
  return (
  <div className="app-container">
    <NavContainer />
    <div className="main-container">
      {children}
      <BottomNav />
    </div>
  </div>);
};

export default App;
