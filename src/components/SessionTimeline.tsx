import * as React from 'react';
import { Session as SessionType } from '../types';
import FormatTime from './FormatTime';
import { useSelector } from 'react-redux';
import { getAllFilms } from '../store';
import { addTime, subtractTime } from '../time';
import { useNow } from '../use-now';
import './SessionTimeline.css';

export interface Props {
  session: SessionType;
}

const DOORS_MINUTES = 10;
const TRAILERS_MINUTES = 15;
const DEFAULT_RUNTIME = 120;

const SessionTimeline: React.FC<Props> = ({ session }) => {
  const now = useNow();
  const films = useSelector(getAllFilms);
  const film = films.find((film) => film.id === session.filmId);

  if (!film) return null;

  const { runtimeMinutes } = film;

  const timeTrailers = session.time;
  const timeDoors = subtractTime(timeTrailers, DOORS_MINUTES);
  const timeStart = addTime(timeTrailers, TRAILERS_MINUTES);
  const timeFinish = addTime(timeStart, runtimeMinutes || DEFAULT_RUNTIME);

  return (
    <ul className="SessionTimeline">
      <li className={now > timeDoors ? 'SessionTimeline-past' : 'SessionTimeline-future'}>
        <FormatTime time={timeDoors} />: Doors open
      </li>
      <li className={now > timeTrailers ? 'SessionTimeline-past' : 'SessionTimeline-future'}>
        <FormatTime time={timeTrailers} />: Trailers start ({DOORS_MINUTES} min. later)
      </li>
      <li className={now > timeStart ? 'SessionTimeline-past' : 'SessionTimeline-future'}>
        <FormatTime time={timeStart} />: Movie starts ({TRAILERS_MINUTES} min. later)
      </li>
      <li className={now > timeFinish ? 'SessionTimeline-past' : 'SessionTimeline-future'}>
        <FormatTime time={timeFinish} />: Movie ends ({runtimeMinutes} min. later)
      </li>
    </ul>
  );
};

export default SessionTimeline;
