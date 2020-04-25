import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllSessions, getAllFilms } from '../store';
import Navigation from '../components/Navigation';
import SessionDetails from '../components/SessionDetails';
import SessionTimeline from '../components/SessionTimeline';
import FilmLink from '../components/FilmLink';

export interface Params {
  sessionId: string;
}

const SessionRoute: React.FC<RouteComponentProps<Params>> = ({ match }) => {
  const sessions = useSelector(getAllSessions);
  const films = useSelector(getAllFilms);
  const sessionId = match.params.sessionId;
  const session = sessions.find((session) => session.id === sessionId);
  if (!session) return null;
  const filmId = session.filmId;
  const film = films.find((film) => film.id === filmId);
  if (!film) return null;
  return (
    <section className="SessionRoute">
      <h1 className="mb-5">
        <FilmLink film={film} />
      </h1>
      <Navigation />
      <nav className="nav flex-column mt-3 mb-4">
        <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noopener noreferrer" href={`https://ticketing.palacecinemas.com.au/Ticketing/visSelectTickets.aspx?cinemacode=300&txtSessionId=${sessionId}`}>Buy tickets for this session</a>
        </li>
      </nav>
      <h3>Details</h3>
      <SessionDetails session={session} />
      <h3>Times</h3>
      <SessionTimeline session={session} />
    </section>
  );
};

export default SessionRoute;
