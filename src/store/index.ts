import { combineReducers } from 'redux';
import * as films from './reducer-films';
import * as network from './reducer-network';
import * as sessions from './reducer-sessions';

export interface RootReducerState {
  films: films.ReducerState;
  network: network.ReducerState;
  sessions: sessions.ReducerState;
}

export default combineReducers<RootReducerState>({
  films: films.default,
  network: network.default,
  sessions: sessions.default,
});

export const getAllFilms = (state: RootReducerState) => (
  films.getAllFilms(state.films)
);

export const isFetching = (state: RootReducerState) => (
  network.isFetching(state.network)
);

export const isFetchingError = (state: RootReducerState) => (
  network.isFetchingError(state.network)
);

export const getFetchingError = (state: RootReducerState) => (
  network.getFetchingError(state.network)
);

export const getAllSessions = (state: RootReducerState) => (
  sessions.getAllSessions(state.sessions)
);

export const getSessionsForDate = (state: RootReducerState, date: string) => (
  sessions.getSessionsForDate(state.sessions, date)
);
