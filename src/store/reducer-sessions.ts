import { Reducer } from 'redux';
import { Session } from '../types';
import { isActionFetchSuccess } from './actions';

export interface ReducerState {
  readonly [id: string]: Session;
}

const DEFAULT_STATE: ReducerState = {};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
  if (isActionFetchSuccess(action)) {
    return {
      ...state,
      ...action.payload.entities.sessions,
    };
  }

  return state;
};

export default reducer;

export const getAllSessions = (state: ReducerState) => (
  Object.values(state)
);

export const getSessionsForDate = (state: ReducerState, date: string) => (
  getAllSessions(state)
    .filter((session) => session.date === date)
    .sort((a, b) => a.time - b.time)
);
