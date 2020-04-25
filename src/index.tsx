import * as React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootReducerState } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import { fetchSessions } from './store/actions';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk as ThunkMiddleware<RootReducerState>,
  ),
));

const rootElement = document.getElementById('root');
render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  rootElement
);

store.dispatch(fetchSessions());
