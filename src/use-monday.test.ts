import { mocked } from 'ts-jest/utils';
import { renderHook } from '@testing-library/react-hooks'
import { useToday } from './use-today';
import { useMonday } from './use-monday';

jest.mock('./use-today', () => ({
  useToday: jest.fn(),
}));

test.each([
  ['2020-05-03', '2020-05-04'], // Sunday
  ['2020-05-04', '2020-05-04'], // Monday
  ['2020-05-05', '2020-05-11'], // Tuesday
  ['2020-05-06', '2020-05-11'], // Wednesday
  ['2020-05-07', '2020-05-11'], // Thursday
  ['2020-05-08', '2020-05-11'], // Friday
  ['2020-05-09', '2020-05-11'], // Saturday
  ['2020-05-10', '2020-05-11'], // Sunday
  ['2020-05-11', '2020-05-11'], // Monday
  ['2020-05-12', '2020-05-18'], // Tuesday
])('when today is %s then Monday is %s', (today, monday) => {
  mocked(useToday).mockReturnValue(today);
  const { result } = renderHook(() => useMonday());
  expect(result.current).toBe(monday);
});
