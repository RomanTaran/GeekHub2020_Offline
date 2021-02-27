import './App.css';
import React from "react";
import Api1 from "./pages/Api1";
import Api2 from "./pages/Api2";
import Api3 from "./pages/Api3";
import Main from "./pages/Main"
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom"

class App extends React.PureComponent {
  render() {
    return (
     <Router>
        <Route exact path='/' component={Main}/>
        <Route path='/Api1' component={Api1}/>
        <Route path="/Api2" component={Api2}/>
        <Route path='/Api3' component={Api3}/>
      </Router>
    )
  }
}
export default withRouter(App)

