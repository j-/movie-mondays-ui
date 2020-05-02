import * as React from 'react';
import { useSelector } from 'react-redux';
import { getAllSessions } from '../store';
import { useToday } from '../use-today';
import DaySessions from './DaySessions';
import './SessionsForFilm.css';

export interface Props {
  filmId: string;
}

const SessionsForFilm: React.FC<Props> = ({ filmId }) => {
  const today = useToday();
  const filmSessions = useSelector(getAllSessions)
    .filter((session) => session.filmId === filmId);
  const sessionDates = filmSessions
    .map((session) => session.date)
    .filter((date) => date >= today)
    .sort()
    .filter((item, i, arr) => i === 0 || arr[i - 1] !== item);
  return (
    <ul className="SessionsForFilm">
      {sessionDates.map((date) => (
        <li key={date} className="mt-3 mb-3">
          <div className="card card-body">
            <DaySessions
              day={date}
              sessions={filmSessions.filter((session) => session.date === date)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SessionsForFilm;
