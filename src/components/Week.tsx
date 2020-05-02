import * as React from 'react';
import classNames from 'classnames';
import addDays from 'date-fns/addDays';
import formatDate from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';

export interface Props {
  today: Date;
  selected: Date;
}

const Day: React.FC<{
  date: Date;
  isToday: boolean;
  isSelected: boolean;
}> = ({ date, isToday, isSelected }) => {
  const label = isToday ? 'Today' : formatDate(date, 'iiii');
  const isMonday = date.getDay() === 1;
  const className = classNames(
    'nav-link',
    isSelected && 'active',
    !isSelected && isMonday && 'border border-primary',
  );
  return (
    <li className="nav-item">
      <a className={className} href="#">{label}</a>
    </li>
  );
};

const Week: React.FC<Props> = ({ today, selected }) => {
  const d0 = today;
  const d1 = addDays(d0, 1);
  const d2 = addDays(d0, 2);
  const d3 = addDays(d0, 3);
  const d4 = addDays(d0, 4);
  const d5 = addDays(d0, 5);
  const d6 = addDays(d0, 6);
  return (
    <ul className="nav nav-pills nav-fill">
      <Day date={d0} isToday={isSameDay(today, d0)} isSelected={isSameDay(selected, d0)} />
      <Day date={d1} isToday={isSameDay(today, d1)} isSelected={isSameDay(selected, d1)} />
      <Day date={d2} isToday={isSameDay(today, d2)} isSelected={isSameDay(selected, d2)} />
      <Day date={d3} isToday={isSameDay(today, d3)} isSelected={isSameDay(selected, d3)} />
      <Day date={d4} isToday={isSameDay(today, d4)} isSelected={isSameDay(selected, d4)} />
      <Day date={d5} isToday={isSameDay(today, d5)} isSelected={isSameDay(selected, d5)} />
      <Day date={d6} isToday={isSameDay(today, d6)} isSelected={isSameDay(selected, d6)} />
    </ul>
  );
};

export default Week;
