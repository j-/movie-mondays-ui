import * as React from 'react';
import { Session as SessionType } from '../types';
import { useSelector, getFilmById } from '../store';
import { useNow } from '../use-now';
import Timeline from './Timeline';

export interface Props {
  session: SessionType;
}

export const DEFAULT_RUNTIME = 120;

const SessionTimeline: React.FC<Props> = ({ session }) => {
  const now = useNow();
  const film = useSelector((state) => getFilmById(state, session.filmId));

  if (!film) return null;

  return (
    <Timeline
      now={now}
      timeTrailers={session.time}
      runtimeMinutes={film.runtimeMinutes || DEFAULT_RUNTIME}
    />
  );
};

export default SessionTimeline;
