import * as React from 'react';
import { Session as SessionType } from '../types';
import Session from './Session';
import './SessionsList.css';

export interface Props {
  sessions: SessionType[];
}

const SessionsList: React.FC<Props> = ({ sessions, children }) => (
  <div className="SessionsList">
    {children && <div className="SessionsList-children">{children}</div>}
    <ul className="SessionsList-sessions">
      {sessions.map((session) => (
        <li key={session.id} className="SessionsList-session">
          <Session session={session} />
        </li>
      ))}
    </ul>
  </div>
);

export default SessionsList;
