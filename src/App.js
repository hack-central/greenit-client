import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './layouts/Home';

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
      </Switch>
    </Router>
  );
}

export default App;
