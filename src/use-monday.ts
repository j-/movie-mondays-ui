import parseDate from 'date-fns/parse';
import formatDate from 'date-fns/format';
import addDays from 'date-fns/addDays';
import { useToday } from './use-today';

const FORMAT = 'yyyy-MM-dd';

export const useMonday = () => {
  const today = parseDate(useToday(), FORMAT, 0);
  const toAdd = (8 - today.getDay()) % 7;
  return formatDate(addDays(today, toAdd), FORMAT);
};
