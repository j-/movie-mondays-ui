import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllFilms, getAllSessions } from '../store';
import { useToday } from '../use-today';
import { sortTitle } from '../sort-title';
import FilmSessions from './FilmSessions';
import './SessionsToday.css';

const SessionsToday: React.FC = () => {
  const today = useToday();
  const films = useSelector(getAllFilms);
  const sessionsToday = useSelector(getAllSessions)
    .filter((session) => session.date === today);
  const getFilmById = (filmId: string) => films.find((film) => film.id === filmId);
  const getSessionsByFilmId = (filmId: string) => sessionsToday.filter((session) => session.filmId === filmId);
  const filmIds = sessionsToday
    .map((session) => session.filmId)
    .sort((a, b) => {
      const filmA = getFilmById(a)!;
      const filmB = getFilmById(b)!;
      return sortTitle(filmA.title, filmB.title);
    })
    .filter((item, i, arr) => i === 0 || item !== arr[i - 1]);
  return (
    <ul className="SessionsToday">
      {filmIds.map((filmId) => (
        <li key={filmId} className="mt-3 mb-3">
          <div className="card card-body">
            <FilmSessions
              film={getFilmById(filmId)!}
              sessions={getSessionsByFilmId(filmId)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SessionsToday;
