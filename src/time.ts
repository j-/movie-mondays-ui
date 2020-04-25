export const formatTime = (time: number) => {
  const hh = Math.floor(time / 100) % 12 || 12;
  const mm = String(time % 100).padStart(2, '0');
  const ampm = time < 1200 ? 'am' : 'pm';
  return `${hh}:${mm}${ampm}`;
};

export const addTime = (time: number, byMinutes: number) => {
  const beforeHH = Math.floor(time / 100);
  const beforeMM = time % 100;
  let afterMM = beforeMM + byMinutes;
  let afterHH = beforeHH + Math.floor(afterMM / 60);
  afterMM %= 60;
  afterHH %= 24;
  return afterHH * 100 + afterMM;
};

export const subtractTime = (time: number, byMinutes: number) => {
  const beforeHH = Math.floor(time / 100);
  const beforeMM = time % 100;
  let afterMM = (((beforeMM - byMinutes) % 60) + 60) % 60;
  let afterHH = (beforeHH - Math.abs(Math.floor((beforeMM - byMinutes) / 60)) + 24) % 24;
  afterMM %= 60;
  return afterHH * 100 + afterMM;
};
