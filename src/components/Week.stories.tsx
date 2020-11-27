import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { DecoratorFn } from '@storybook/react';
import Week from './Week';

const withRouter: DecoratorFn = (storyFn) => <StaticRouter>{storyFn()}</StaticRouter>;

export default {
  title: 'Week',
  component: Week,
  decorators: [withRouter],
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
