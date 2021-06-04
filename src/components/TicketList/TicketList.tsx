import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/UseTypedSelector';
import Loader from '../Loader';

import Ticket from '../Ticket';

import './TicketList.css';

const TicketList: FC = () => {
  const tickets = useTypedSelector((state) => state.tickets.list);
  const isLoaded = useTypedSelector((state) => state.tickets.loading);

  const list = tickets.map((item) => <Ticket key={item.id} ticket={item} />).slice(0, 10);

  return <ul className="ticket-list">{!isLoaded ? <Loader /> : list}</ul>;
};

export default TicketList;
