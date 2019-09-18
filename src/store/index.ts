import { combineReducers } from 'redux';
import * as films from './reducer-films';
import * as sessions from './reducer-sessions';

export interface RootReducerState {
  films: films.ReducerState;
  sessions: sessions.ReducerState;
}

export default combineReducers<RootReducerState>({
  films: films.default,
  sessions: sessions.default,
});

export const getAllFilms = (state: RootReducerState) => (
  films.getAllFilms(state.films)
);

export const getAllSessions = (state: RootReducerState) => (
  sessions.getAllSessions(state.sessions)
);

export const getSessionsForDate = (state: RootReducerState, date: string) => (
  sessions.getSessionsForDate(state.sessions, date)
);
