import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Dashboard, Error, PrivateRoute, AuthWrapper } from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
