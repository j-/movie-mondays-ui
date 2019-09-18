import * as React from 'react';

const formatDate = (date: Date) => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const formatNow = () => formatDate(new Date());

export const useToday = () => {
  const [date, setDate] = React.useState(formatNow());
  React.useEffect(() => {
    const interval = setInterval(() => {
      const newDate = formatNow();
      if (date !== newDate) setDate(newDate);
    }, 1000 * 60); // Every minute
    return () => clearInterval(interval);
  });
  return date;
};
