import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllFilms } from '../store';
import { sortTitle } from '../sort-title';
import Navigation from '../components/Navigation';
import FilmLink from '../components/FilmLink';

const FilmsRoute: React.FC<RouteComponentProps> = () => {
  const films = useSelector(getAllFilms)
    .sort((left, right) => sortTitle(left.title, right.title));
  return (
    <section className="FilmRoute">
      <h1 className="mb-5">All movies</h1>
      <Navigation />
      <ul className="list-unstyled">
        {films.map((film) => (
          <li key={film.id}>
            <FilmLink film={film} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilmsRoute;
