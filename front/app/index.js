import React from 'react'
import { Link  } from 'react-router'

import messages from '../messages'
import user from '../user'


class App extends React.Component {
	
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-9"><Link to="/" >Home</Link></div>
            <user.loginStatus />
          </div>
          <messages.messages/>
          {this.props.children}
      </div>
    );
  }
}

export default App

