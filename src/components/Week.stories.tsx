import React from 'react';
import Week from './Week';

export default {
  title: 'Week',
  component: Week,
};

export const TodayIsSelected = () => (
  <Week
    today={new Date(2020, 4, 2)}
    selected={new Date(2020, 4, 2)}
  />
);

export const TomorrowIsSelected = () => (
  <Week
    today={new Date(2020, 4, 2)}
    selected={new Date(2020, 4, 3)}
  />
);

export const MondayIsSelected = () => (
  <Week
    today={new Date(2020, 4, 2)}
    selected={new Date(2020, 4, 4)}
  />
);
