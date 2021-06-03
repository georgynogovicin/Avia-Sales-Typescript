import React from 'react';

import Filters from '../Filters';
import Sort from '../Sort';
import TicketList from '../TicketList';

import './App.css';
import logo from '../../img/Logo.svg';

const App = () => (
  <div className="container">
    <header className="header">
      <img src={logo} alt="Logo" />
    </header>
    <Filters />
    <section className="main">
      <Sort />
      <TicketList />
    </section>
  </div>
);

export default App;
