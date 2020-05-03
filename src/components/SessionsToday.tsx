import * as React from 'react';
import { useToday } from '../use-today';
import SessionsForDay from './SessionsForDay';

const SessionsToday: React.FC = () => {
  const today = useToday();
  return <SessionsForDay date={today} />;
};

export default SessionsToday;
