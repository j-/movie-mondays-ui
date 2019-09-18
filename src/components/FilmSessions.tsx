import * as React from 'react';
import { Film as FilmType, Session as SessionType } from '../types';
import FilmLink from './FilmLink';
import Session from './Session';
import './FilmSessions.css';

export interface Props {
  film: FilmType;
  sessions: SessionType[];
}

const FilmSessions: React.FC<Props> = ({ film, sessions }) => {
  const children = [...sessions]
    .sort((a, b) => a.time - b.time)
    .map((session) => (
      <li key={session.id} className="FilmSessions-session">
        <Session session={session} />
      </li>
    ));
  return (
    <div className="FilmSessions">
      <div className="FilmSessions-film"><FilmLink film={film} /></div>
      <ul className="FilmSessions-sessions">{children}</ul>
    </div>
  );
};

export default FilmSessions;
