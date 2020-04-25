import * as React from 'react';
import { Link } from 'react-router-dom';
import { Film, getFilmPath } from '../types';
import Rating from './Rating';
import './FilmLink.css';

export interface Props {
  film: Film;
}

const FilmLink: React.FC<Props> = ({ film }) => (
  <Link className="FilmLink" to={getFilmPath(film)}>
    <span className="FilmLink-title">
      {film.title}
    </span>
    <span className="FilmLink-rating">
      <Rating rating={film.rating} />
    </span>
  </Link>
);

export default FilmLink;
