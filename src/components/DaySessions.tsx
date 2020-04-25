import * as React from 'react';
import format from 'date-fns/format';
import sortBy from 'lodash/sortBy';
import { Session as SessionType } from '../types';
import SessionsList from './SessionsList';

export interface Props {
  day: string;
  sessions: SessionType[];
}

const dayFormat = 'iiii do MMMM';

const DaySessions: React.FC<Props> = ({ day, sessions }) => (
  <SessionsList sessions={sortBy(sessions, 'time')}>
    <strong>{format(new Date(day), dayFormat)}</strong>
  </SessionsList>
);

export default DaySessions;
