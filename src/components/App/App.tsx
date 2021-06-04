import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getSearchId, getTickets } from '../../redux/actions';

import Filters from '../Filters';
import Sort from '../Sort';
import TicketList from '../TicketList';
import { useTypedSelector } from '../hooks/UseTypedSelector';

import './App.css';
import logo from '../../img/Logo.svg';

const App: FC = () => {
  const dispatch = useDispatch();
  const searchId = useTypedSelector((state) => state.searchId.searchId);
  const ticketIsEnd = useTypedSelector((state) => state.tickets.isFinish);
  const tickets = useTypedSelector((state) => state.tickets.list);

  useEffect(() => {
    dispatch(getSearchId());
  }, [dispatch]);

  useEffect(() => {
    if (!ticketIsEnd && searchId) dispatch(getTickets(searchId));
  }, [searchId, dispatch, ticketIsEnd, tickets]);

  return (
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
};

export default App;
