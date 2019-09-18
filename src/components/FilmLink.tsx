import * as React from 'react';
import { Film } from '../types';
import Rating from './Rating';

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  film: Film;
}

const FilmLink: React.FC<Props> = ({ film, ...props }) => (
  <a
    className="FilmLink"
    href={`https://www.palacecinemas.com.au/movies/${film.id}`}
    target="_blank"
    rel="nofollow"
  >
    {film.title} <Rating rating={film.rating} /> - {film.runtimeMinutes} MIN
  </a>
);

export default FilmLink;
