import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About.js';
import Home from './components/Home.js';
import Users from './components/Users.js';

function App() {
  const name = "John";
  return (
    <Container>
      <Router>
        <h1>Router Demo</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={`/about/${name}`}>About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/:name" component={About} />
          <Route path="/users" component={Users} />
          <Route render={() => <h3>404: Page not found</h3>} />
        </Switch>
      </Router >
    </Container>
  );
}

export default App;
