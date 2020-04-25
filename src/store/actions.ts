import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FetchSessionsResult } from '../types';
import { RootReducerState } from '.';

export const ACTION_FETCH_START = 'FETCH_START';

export interface ActionFetchStart extends Action<typeof ACTION_FETCH_START> {}

export const isActionFetchStart = (action: Action): action is ActionFetchStart => action.type === ACTION_FETCH_START;

export const ACTION_FETCH_ERROR = 'FETCH_ERROR';

export interface ActionFetchError extends Action<typeof ACTION_FETCH_ERROR> {
  payload: {
    message: string;
  };
}

export const isActionFetchError = (action: Action): action is ActionFetchError => action.type === ACTION_FETCH_ERROR;

export const ACTION_FETCH_SUCCESS = 'FETCH_SUCCESS';

export interface ActionFetchSuccess extends Action<typeof ACTION_FETCH_SUCCESS> {
  payload: FetchSessionsResult;
}

export const isActionFetchSuccess = (action: Action): action is ActionFetchSuccess => action.type === ACTION_FETCH_SUCCESS;

export type FetchActionType = ActionFetchStart | ActionFetchError | ActionFetchSuccess;
export type ActionFetch = ThunkAction<void, RootReducerState, void, FetchActionType>;

export const fetchSessions = (): ActionFetch => async (dispatch) => {
  dispatch<ActionFetchStart>({
    type: ACTION_FETCH_START,
  });
  try {
    const res = await fetch('https://z79bu.sse.codesandbox.io/');
    const payload = await res.json() as FetchSessionsResult;
    dispatch<ActionFetchSuccess>({
      type: ACTION_FETCH_SUCCESS,
      payload,
    });
  } catch (err) {
    dispatch<ActionFetchError>({
      type: ACTION_FETCH_ERROR,
      payload: {
        message: err.message,
      },
    });
  }
};
