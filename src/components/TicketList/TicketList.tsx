import React, { FC } from 'react';

import Ticket from '../Ticket';

import './TicketList.css';

const TicketList: FC = () => (
  <ul className="ticket-list">
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
  </ul>
);

export default TicketList;
