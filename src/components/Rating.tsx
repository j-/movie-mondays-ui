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
  const title = (
    rating === 'G' ? 'General' :
    rating === 'PG' ? 'Parental Guidance' :
    rating === 'M' ? 'Mature' :
    rating === 'MA15+' ? 'Mature Accompanied' :
    rating === 'R18+' ? 'Restricted' :
    rating === 'CTC' ? 'Check the Classification' :
    null
  );
  return <span className={className} title={title}>{rating}</span>;
};

export default Rating;
