import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import FoodItem from "./components/FoodItem";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" Component={Home}/>
        <Route path="/:category/:foodId" Component={FoodItem}/>
      </Switch>
    </Router>
  )
}
export default App