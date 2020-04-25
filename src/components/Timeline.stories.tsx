import React from 'react';
import Timeline from './Timeline';

export default {
  title: 'Timeline',
  component: Timeline,
};

export const BeforeSession = () => (
  <Timeline
    now={2000}
    timeTrailers={2030}
    runtimeMinutes={169}
  />
);

export const MidSession = () => (
  <Timeline
    now={2100}
    timeTrailers={2030}
    runtimeMinutes={169}
  />
);
