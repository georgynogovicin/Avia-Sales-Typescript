import React from 'react';

import './Filters.css';

const Filters = () => (
  <aside className="filters">
    <h2 className="filters__header">Количество пересадок</h2>
    <ul className="filters__list">
      <li className="filters__list-item">
        <div className="filters__check" />
        <label className="filters__label">
          <input type="checkbox" className="visualy-hidden" />
          Все
        </label>
      </li>
      <li className="filters__list-item">
        <div className="filters__check filters__check--active" />
        <label className="filters__label">
          <input type="checkbox" className="visualy-hidden" />
          Без пересадок
        </label>
      </li>
      <li className="filters__list-item">
        <div className="filters__check filters__check--active" />
        <label className="filters__label">
          <input type="checkbox" className="visualy-hidden" />1 пересадка
        </label>
      </li>
      <li className="filters__list-item">
        <div className="filters__check filters__check--active" />
        <label className="filters__label">
          <input type="checkbox" className="visualy-hidden" />2 пересадка
        </label>
      </li>
      <li className="filters__list-item">
        <div className="filters__check" />
        <label className="filters__label">
          <input type="checkbox" className="visualy-hidden" />3 пересадка
        </label>
      </li>
    </ul>
  </aside>
);

export default Filters;
