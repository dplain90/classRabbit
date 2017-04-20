import React from 'react';
import { Link } from 'react-router';
import NavContainer from './nav/nav_container';
import BottomNav from './nav/bottom_nav';


const App = ({ children }) => (
  <div>
    <NavContainer />
    <div className="main-container">
      {children}
    </div>
    <BottomNav />
  </div>
);

export default App;
