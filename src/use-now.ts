import * as React from 'react';

const getTime = (date: Date) => {
  return date.getHours() * 100 + date.getMinutes();
};

const getNow = () => getTime(new Date());

export const useNow = () => {
  const [time, setTime] = React.useState(getNow());

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getNow();
      if (time !== newTime) setTime(newTime);
    }, 1000 * 60); // Every minute

    return () => clearInterval(interval);
  });

  return time;
};
