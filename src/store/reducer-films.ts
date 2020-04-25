import { Reducer } from 'redux';
import { Film } from '../types';
import { isActionFetchSuccess } from './actions';

export interface ReducerState {
  readonly [id: string]: Film;
}

const DEFAULT_STATE: ReducerState = {};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionFetchSuccess(action)) {
    return {
      ...state,
      ...action.payload.entities.films,
    };
  }

  return state;
};

export default reducer;

export const getAllFilms = (state: ReducerState): Film[] => (
  Object.values(state)
);
