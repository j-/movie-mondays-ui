import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  hideHomeLink?: boolean;
}

const Navigation: React.FC<Props> = ({ hideHomeLink }) => (
  <nav className="nav flex-column mt-3 mb-4">
    {hideHomeLink || <li className="nav-item"><Link to="/" className="nav-link">&larr; Home</Link></li>}
    <li className="nav-item"><Link to="/movies" className="nav-link">All movies</Link></li>
  </nav>
);

export default Navigation;
