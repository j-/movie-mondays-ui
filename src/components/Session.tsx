import * as React from 'react';
import { Session as SessionType } from '../types';
import './Session.css';

export interface Props {
  session: SessionType;
}

const formatTime = (time: number) => {
  const hh = Math.floor(time / 100) % 12 || 12;
  const mm = String(time % 100).padStart(2, '0');
  const ampm = time < 1200 ? 'am' : 'pm';
  return `${hh}:${mm}${ampm}`;
};

const Session: React.FC<Props> = ({ session }) => {
  const { id, time } = session;
  const href = `https://ticketing.palacecinemas.com.au/Ticketing/visSelectTickets.aspx?cinemacode=300&txtSessionId=${id}`;
  return (
    <a className="Session" href={href}>
      {formatTime(time)}
    </a>
  );
};

export default Session;
