import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import parseDate from 'date-fns/parse';
import Navigation from '../components/Navigation';
import Week from '../components/Week';
import SessionsForDay from '../components/SessionsForDay';
import { useToday } from '../use-today';
import { useMonday } from '../use-monday';

const SessionsTodayRoute: React.FC<RouteComponentProps> = () => {
  const today = useToday();
  const monday = useMonday();
  const todayDate = parseDate(today, 'yyyy-MM-dd', 0);
  const selectedDate = parseDate(monday, 'yyyy-MM-dd', 0);
  return (
    <section className="SessionsTodayRoute">
      <h1 className="mb-5">Monday's sessions</h1>
      <Navigation hideHomeLink={true} />
      <Week today={todayDate} selected={selectedDate} />
      <SessionsForDay date={monday} />
    </section>
  );
};

export default SessionsTodayRoute;
