import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import SessionsTodayRoute from '../routes/SessionsTodayRoute';
import SessionsMondayRoute from '../routes/SessionsMondayRoute';
import SessionsDateRoute from '../routes/SessionsDateRoute';
import SessionRoute from '../routes/SessionRoute';
import FilmRoute from '../routes/FilmRoute';
import FilmsRoute from '../routes/FilmsRoute';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Navbar />
      <div className="container pt-5 pb-5 pl-2 pr-2">
        <Route path="/" exact={true} component={SessionsTodayRoute} />
        <Switch>
          <Route path="/sessions/today" exact={true} component={SessionsTodayRoute} />
          <Route path="/sessions/monday" exact={true} component={SessionsMondayRoute} />
          <Route path="/sessions/:date" component={SessionsDateRoute} />
        </Switch>
        <Route path="/session/:sessionId" component={SessionRoute} />
        <Route path="/movie/:filmId" component={FilmRoute} />
        <Route path="/movies" component={FilmsRoute} />
      </div>
    </Router>
  </div>
);

export default App;
