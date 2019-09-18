export interface Compare<T> {
  (a: T, b: T): number
}

export function compareFactory<T, R>(getter: (obj: T) => R): Compare<T> {
  return (a, b) => {
    const valA = getter(a);
    const valB = getter(b);
    return (
      valA < valB ? -1 :
        valA > valB ? 1 : 0
    );
  };
}

export function composeComparators<T>(...comparators: Compare<T>[]): Compare<T> {
  return (a, b) => {
    for (const compare of comparators) {
      const result = compare(a, b);
      if (result === 0) continue;
      return result;
    }
    return 0;
  }
}

/* Examples:

const compareTitle = compareFactory<{ title: string }, string>(({ title }) => title);
const compareTime = compareFactory<{ time: number }, number>(({ time }) => time);
const sort = composeComparators<{ title: string, time: number }>(compareTitle, compareTime);

*/
