import * as React from 'react';
import classNames from 'classnames';
import './Rating.css';

export interface Props {
  rating: string;
}

const Rating: React.FC<Props> = ({ rating }) => {
  const className = classNames('Rating', {
    'Rating--g': rating === 'G',
    'Rating--pg': rating === 'PG',
    'Rating--m': rating === 'M',
    'Rating--ma': rating === 'MA15+',
    'Rating--r': rating === 'R18+',
    'Rating--ctc': rating === 'CTC',
  });
  return <span className={className}>{rating}</span>;
};

export default Rating;
