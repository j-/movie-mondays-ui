import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllFilms, getAllSessions } from '../store';
import { useToday } from '../use-today';
import FilmSessions from './FilmSessions';

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
      const filmA = getFilmById(a);
      const filmB = getFilmById(b);
      if (filmA.title < filmB.title) {
        return -1;
      } else if (filmA.title > filmB.title) {
        return 1;
      } else {
        return 0;
      }
    })
    .filter((item, i, arr) => i === 0 || item !== arr[i - 1]);
  return (
    <ul className="SessionsToday">
      {filmIds.map((filmId) => (
        <li key={filmId}>
          <FilmSessions
            film={getFilmById(filmId)}
            sessions={getSessionsByFilmId(filmId)}
          />
        </li>
      ))}
    </ul>
  );
};

export default SessionsToday;
