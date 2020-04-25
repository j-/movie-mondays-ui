const canonicalExpr = /^(?:(The) )(.*?)$/;

const canonicalTitle = (original: string) => (
  original.replace(canonicalExpr, (_original, the, title) => (
    `${title}, ${the}`
  ))
);

export const sortTitle = (left: string, right: string) => {
  left = canonicalTitle(left);
  right = canonicalTitle(right);
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
};
