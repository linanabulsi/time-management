import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import AddNewTime from "./pages/AddNewTime/AddNewTime";
import Dashboard from "./pages/Dashboard/Dashboard";
import Page from "./hoc/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Page path="/dashboard" component={Dashboard} />
          <Page path="/add-new-time" component={AddNewTime} />
          <Redirect from="/" to="/dashboard" />
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/add-new-time">
            <AddNewTime />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
