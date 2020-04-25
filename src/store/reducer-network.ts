import { Reducer } from 'redux';
import { isActionFetchStart, isActionFetchSuccess, isActionFetchError } from './actions';

export interface ReducerState {
  readonly isFetching: boolean;
  readonly fetchingError: string | null;
}

const DEFAULT_STATE: ReducerState = {
  isFetching: false,
  fetchingError: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionFetchStart(action)) {
    return {
      ...state,
      isFetching: true,
      fetchingError: null,
    };
  }
  
  if (isActionFetchSuccess(action)) {
    return {
      ...state,
      isFetching: false,
      fetchingError: null,
    };
  }

  if (isActionFetchError(action)) {
    return {
      ...state,
      isFetching: false,
      fetchingError: action.payload.message,
    };
  }

  return state;
};

export default reducer;

export const isFetching = (state: ReducerState) => state.isFetching;
export const isFetchingError = (state: ReducerState) => state.fetchingError !== null;
export const getFetchingError = (state: ReducerState) => state.fetchingError;
