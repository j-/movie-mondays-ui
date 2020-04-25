import React from 'react';
import Rating from './Rating';

export default {
  title: 'Rating',
  component: Rating,
};

export const RatingG = () => <Rating rating="G" />;
export const RatingPG = () => <Rating rating="PG" />;
export const RatingM = () => <Rating rating="M" />;
export const RatingMA15 = () => <Rating rating="MA15+" />;
export const RatingR18 = () => <Rating rating="R18+" />;
export const RatingCTC = () => <Rating rating="CTC" />;
export const RatingALL = () => <Rating rating="ALL" />;
export const RatingOther = () => <Rating rating="Other" />;

export const AllRatings = () => (
  <ul>
    <li><RatingG /></li>
    <li><RatingPG /></li>
    <li><RatingM /></li>
    <li><RatingMA15 /></li>
    <li><RatingR18 /></li>
    <li><RatingCTC /></li>
    <li><RatingALL /></li>
    <li><RatingOther /></li>
  </ul>
);
