import * as React from 'react';
import sortBy from 'lodash/sortBy';
import { Film as FilmType, Session as SessionType } from '../types';
import FilmLink from './FilmLink';
import SessionsList from './SessionsList';

export interface Props {
  film: FilmType;
  sessions: SessionType[];
}

const FilmSessions: React.FC<Props> = ({ film, sessions }) => (
  <SessionsList sessions={sortBy(sessions, 'time')}>
    <strong><FilmLink film={film} /></strong>
  </SessionsList>
);

export default FilmSessions;
