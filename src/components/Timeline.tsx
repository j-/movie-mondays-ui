import * as React from 'react';
import classNames from 'classnames';
import { addTime, subtractTime } from '../time';
import FormatTime from './FormatTime';

export interface Props {
  now?: number;
  doorsMinutes?: number;
  trailersMinutes?: number;
  runtimeMinutes: number;
  timeTrailers: number;
}

export const DOORS_MINUTES = 10;
export const TRAILERS_MINUTES = 15;

const Timeline: React.FC<Props> = ({
  now = -Infinity,
  doorsMinutes = DOORS_MINUTES,
  trailersMinutes = TRAILERS_MINUTES,
  runtimeMinutes,
  timeTrailers,
}) => {
  const timeDoors = subtractTime(timeTrailers, doorsMinutes);
  const timeStart = addTime(timeTrailers, trailersMinutes);
  const timeFinish = addTime(timeStart, runtimeMinutes);

  return (
    <ul className="SessionTimeline list-group list-group-horizontal-lg">
      <li className={classNames('list-group-item flex-fill', now > timeDoors && 'text-muted')}>
        <span className="display-4">
          <FormatTime time={timeDoors} />
        </span><br />
        <span>Doors open</span>
      </li>
      <li className={classNames('list-group-item flex-fill', now > timeTrailers && 'text-muted')}>
        <span className="display-4">
          <FormatTime time={timeTrailers} />
        </span><br />
        <span>Trailers start ({doorsMinutes} min. later)</span>
      </li>
      <li className={classNames('list-group-item flex-fill', now > timeStart && 'text-muted')}>
        <span className="display-4">
          <FormatTime time={timeStart} />
        </span><br />
        <span>Movie starts ({trailersMinutes} min. later)</span>
      </li>
      <li className={classNames('list-group-item flex-fill', now > timeFinish && 'text-muted')}>
        <span className="display-4">
          <FormatTime time={timeFinish} />
        </span><br />
        <span>Movie ends ({runtimeMinutes} min. later)</span>
      </li>
    </ul>
  );
};

export default Timeline;
