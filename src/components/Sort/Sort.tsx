import React from 'react';

import './Sort.css';

const Sort = () => (
  <nav className="sort">
    <button type="button" className="sort__button sort__button--active">
      Самый дешевый
    </button>
    <button type="button" className="sort__button">
      Самый быстрый
    </button>
    <button type="button" className="sort__button">
      Оптимальный
    </button>
  </nav>
);

export default Sort;
