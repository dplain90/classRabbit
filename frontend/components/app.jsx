import React from 'react';
import { Link } from 'react-router';
import NavContainer from './nav/nav_container';

const App = ({ children }) => (
  <div>
    <NavContainer />
    {children}
  </div>
);

export default App;
