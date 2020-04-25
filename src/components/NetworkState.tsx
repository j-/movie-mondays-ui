import * as React from 'react';
import { useSelector } from 'react-redux';
import {
  isFetching as selectIsFetching,
  isFetchingError as selectIsFetchingError,
  getFetchingError,
} from '../store';

const NetworkState: React.FC = () => {
  const isFetching = useSelector(selectIsFetching);
  const isFetchingError = useSelector(selectIsFetchingError);
  const fetchingError = useSelector(getFetchingError);
  if (isFetching) {
    return <>Loading&hellip;</>;
  } else if (isFetchingError) {
    return <>{fetchingError}</>;
  }
  return null;
};

export default NetworkState;
