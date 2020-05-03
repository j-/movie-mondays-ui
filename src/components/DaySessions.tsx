import * as React from 'react';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';
import sortBy from 'lodash/sortBy';
import { Session as SessionType } from '../types';
import SessionsList from './SessionsList';

export interface Props {
  day: string;
  sessions: SessionType[];
}

const DaySessions: React.FC<Props> = ({ day, sessions }) => (
  <SessionsList sessions={sortBy(sessions, 'time')}>
    <strong>
      <Link to={'/sessions/' + format(new Date(day), 'yyyy-MM-dd')}>
        {format(new Date(day), 'iiii do MMMM')}
      </Link>
    </strong>
  </SessionsList>
);

export default DaySessions;
