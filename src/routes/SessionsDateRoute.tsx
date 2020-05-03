import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import parseDate from 'date-fns/parse';
import formatDate from 'date-fns/format';
import Navigation from '../components/Navigation';
import Week from '../components/Week';
import SessionsForDay from '../components/SessionsForDay';
import { useToday } from '../use-today';

export interface Params {
  date: string;
}

const SessionsTodayRoute: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const { date } = match.params;
  const today = useToday();
  const todayDate = parseDate(today, 'yyyy-MM-dd', 0);
  const selectedDate = parseDate(date, 'yyyy-MM-dd', 0);
  return (
    <section className="SessionsTodayRoute">
      <h1 className="mb-5">Sessions for {formatDate(selectedDate, 'iiii do MMMM')}</h1>
      <Navigation hideHomeLink={true} />
      <Week today={todayDate} selected={selectedDate} />
      <SessionsForDay date={date} />;
    </section>
  );
};

export default SessionsTodayRoute;
