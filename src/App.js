import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Routing from './Router';
// import RequireAuthDemo from './ProtectedRoutes/RequireAuthDemo.jsx';
// import RefsDemo from './RefsDemo/RefsDemo.jsx';
// import GenericContainerDemo from './GenericContainer/GenericContainerDemo.jsx';
// import CustomFormDemo from './CustomForm/CustomFormDemo';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
    }
  }
  render() {

    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark ">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item active"><Link to="/">Home</Link></li>
              <li><Link to="/loaderdemo">Loader Demo</Link></li>
              {/* <li><Link to="/genericcontainer">Generic Container/State abstraction</Link></li>
            <li><Link to="/customform">CustomForm</Link></li>
            <li><Link to="/refsdemo">Refs Demo</Link></li>
             <li><Link to="/requireauth">Protected Routes Demo</Link></li> */}
            </ul>
          </nav>
          <Routing />
        </div>
      </Router>

    );
  }
}


export default App;