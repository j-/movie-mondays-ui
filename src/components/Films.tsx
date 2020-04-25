import * as React from 'react';
import { useSelector } from 'react-redux';
import sortBy from 'lodash/sortBy';
import { getAllFilms } from '../store';

const Films: React.FC = () => {
  const films = sortBy(useSelector(getAllFilms), 'title');
  return (
    <ul className="Films">
      {films.map((film) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};

export default Films;
