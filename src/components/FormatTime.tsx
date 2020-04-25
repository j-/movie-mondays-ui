import * as React from 'react';
import { formatTime } from '../time';

export interface Props {
  time: number;
}

const FormatTime: React.FC<Props> = ({ time }) => (
  <>{formatTime(time)}</>
);

export default FormatTime;
