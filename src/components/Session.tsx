import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Session as SessionType, getSessionPath } from '../types';
import { useNow } from '../use-now';
import { useToday } from '../use-today';
import FormatTime from './FormatTime';
import './Session.css';

export interface Props {
  session: SessionType;
}

const Session: React.FC<Props> = ({ session }) => {
  const now = useNow();
  const today = useToday();
  const { date, time, isSellingFast, isSoldOut } = session;
  const to = getSessionPath(session);
  const className = classNames('Session', {
    'Session--past': today >= date && now > time,
    'Session--is-selling-fast': isSellingFast,
    'Session--is-sold-out': isSoldOut,
  });
  const title = (
    isSellingFast ? 'Selling fast' :
    isSoldOut ? 'Sold out' :
    'Tickets available'
  );
  return (
    <Link className={className} to={to} title={title}>
      <FormatTime time={time} />
    </Link>
  );
};

export default Session;
