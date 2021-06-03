import React from 'react';

import './Ticket.css';
import s7 from '../../img/S7_Logo.png';

const Ticket = () => (
  <li className="ticket">
    <div className="ticket__header">
      <span>13 400 Р </span>
      <img src={s7} alt="S7" />
    </div>
    <table className="ticket__table">
      <thead>
        <tr>
          <th>MOW – HKT</th>
          <th>В пути</th>
          <th>2 пересадки</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:45 – 08:00</td>
          <td>21ч 15м</td>
          <td>HKG, JNB</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>MOW – HKT</th>
          <th>В пути</th>
          <th>2 пересадки</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>10:45 – 08:00</td>
          <td>21ч 15м</td>
          <td>HKG, JNB</td>
        </tr>
      </tbody>
    </table>
  </li>
);

export default Ticket;
