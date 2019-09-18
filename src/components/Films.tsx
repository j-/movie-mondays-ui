import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllFilms } from '../store';

const Films: React.FC = () => {
  const films = [...useSelector(getAllFilms)].sort((a, b) => (
    a.title < b.title ? -1 :
    a.title > b.title ? 1 : 0
  ));
  return (
    <ul className="Films">
      {films.map((film) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};

export default Films;
