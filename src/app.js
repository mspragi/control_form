import React, { Component, Fragment } from 'react';
import Form from "./component/control";
import './component/login.css'
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Fragment>
        <Form/>
      </Fragment>
     );
  }
}
 
export default App;