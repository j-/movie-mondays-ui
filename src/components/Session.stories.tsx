import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { DecoratorFn } from '@storybook/react';
import Session from './Session';

const withRouter: DecoratorFn = (storyFn) => <StaticRouter>{storyFn()}</StaticRouter>;

export default {
  title: 'Session',
  component: Session,
  decorators: [withRouter],
};

export const Past = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '1970-01-01',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const Future = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const AllocatedSeating = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: true,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const NoFreeTickets = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: true,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const PreviewScreening = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: true,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const SpecialEvent = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: true,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const BabyFriendly = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: true,
    isSellingFast: false,
    isSoldOut: false,
  }} />
);

export const SellingFast = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: true,
    isSoldOut: false,
  }} />
);

export const SoldOut = () => (
  <Session session={{
    id: 'x',
    filmId: 'y',
    date: '2222-12-31',
    time: 1200,
    isAllocatedSeating: false,
    isNoFreeTickets: false,
    isPreviewScreening: false,
    isSpecialEvent: false,
    isBabyFriendly: false,
    isSellingFast: false,
    isSoldOut: true,
  }} />
);
