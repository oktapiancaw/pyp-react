// /* eslint-disable react/jsx-no-duplicate-props */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Goals from "./pages/Goals";
import Debt from "./pages/Debt";
import Transaction from "./pages/Transaction";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/goals" exact component={Goals} />
        <Route path="/debt" exact component={Debt} />
        <Route path="/trans" exact component={Transaction} />
      </Switch>
    </Router>
  );
}

export default App;
