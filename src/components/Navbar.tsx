import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isFetching } from '../store';
import { fetchSessions } from '../store/actions';
import NetworkState from './NetworkState';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const disableRefresh = useSelector(isFetching);
  const onClickRefresh = React.useCallback<React.ReactEventHandler>((e) => {
    e.preventDefault();
    dispatch(fetchSessions());
  }, [dispatch]);
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top flex-row">
      <div className="container">
        <Link className="navbar-brand" to="/">Movie Mondays</Link>
        <span className="ml-auto navbar-text"><NetworkState /></span>
        <div className="ml-3">
          <button
            className="btn btn-outline-light"
            type="button"
            onClick={onClickRefresh}
            disabled={disableRefresh}
          >
            Refresh
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
