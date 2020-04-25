import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Navigation from '../components/Navigation';
import SessionsToday from '../components/SessionsToday';

const SessionsTodayRoute: React.FC<RouteComponentProps> = () => (
  <section className="SessionsTodayRoute">
    <h1 className="mb-5">Today's sessions</h1>
    <Navigation hideHomeLink={true} />
    <SessionsToday />
  </section>
);

export default SessionsTodayRoute;
