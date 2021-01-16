import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './layouts/Home';
import Profile from './layouts/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <Login /> */}
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/events">
          {/* <Events /> */}
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
