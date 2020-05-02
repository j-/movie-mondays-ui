import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import parseDate from 'date-fns/parse';
import Navigation from '../components/Navigation';
import Week from '../components/Week';
import SessionsToday from '../components/SessionsToday';
import { useToday } from '../use-today';

const SessionsTodayRoute: React.FC<RouteComponentProps> = () => {
  const today = parseDate(useToday(), 'yyyy-MM-dd', 0);
  const selected = today;
  return (
    <section className="SessionsTodayRoute">
      <h1 className="mb-5">Today's sessions</h1>
      <Navigation hideHomeLink={true} />
      <Week today={today} selected={selected} />
      <SessionsToday />
    </section>
  );
};

export default SessionsTodayRoute;
