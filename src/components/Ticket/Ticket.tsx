import React, { FC } from 'react';
import { ITicket } from '../../types/types';
import { declination, durationFormat, timeOfDeparture } from './format';

import './Ticket.css';

interface TicketProps {
  ticket: ITicket;
}

const Ticket: FC<TicketProps> = ({ ticket }) => {
  const {
    price,
    carrier,
    segments: [there, back],
  } = ticket;

  return (
    <li className="ticket">
      <div className="ticket__header">
        <span>{new Intl.NumberFormat('ru-RU').format(price)}</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </div>
      <table className="ticket__table">
        <thead>
          <tr>
            <th>{`${there.origin} - ${there.destination}`}</th>
            <th>В пути</th>
            <th>{declination(there.stops.length)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{timeOfDeparture(there.date, there.duration)}</td>
            <td>{durationFormat(there.duration)}</td>
            <td>{there.stops.join(',')}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>{`${back.origin} - ${back.destination}`}</th>
            <th>В пути</th>
            <th>{declination(back.stops.length)}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{timeOfDeparture(back.date, back.duration)}</td>
            <td>{durationFormat(back.duration)}</td>
            <td>HKG, JNB</td>
          </tr>
        </tbody>
      </table>
    </li>
  );
};

export default Ticket;
