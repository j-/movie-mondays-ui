import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllFilms } from '../store';
import Navigation from '../components/Navigation';
import SessionsForFilm from '../components/SessionsForFilm';
import FilmLink from '../components/FilmLink';

export interface Params {
  filmId: string;
}

const FilmRoute: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const films = useSelector(getAllFilms);
  const filmId = match.params.filmId;
  const film = films.find((film) => film.id === filmId);
  if (!film) return null;
  return (
    <section className="FilmRoute">
      <h1 className="mb-5">
        <FilmLink film={film} />
      </h1>
      <Navigation />
      <nav className="nav flex-column mt-3 mb-4">
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noopener noreferrer" href={`https://www.palacecinemas.com.au/movies/${filmId}/`}>"{film.title}" on the Palace Cinemas website</a>
        </li>
      </nav>
      <SessionsForFilm filmId={filmId} />
    </section>
  );
};

export default FilmRoute;
