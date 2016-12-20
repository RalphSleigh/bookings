import React from 'react'
import { Link  } from 'react-router'
import { connect } from 'react-redux'

import messages from '../messages'
import user from '../user'


class App extends React.Component {
	
  constructor(props) {
    super(props);
  }
  
  render() {
	//prevent render until we have a user,, to prevent permission errors on deep links for logged in users.
	if(this.props.User === null) return <div>Loading</div>;
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

const mapStateToProps = (state) => {
  let User = state.get("User");
  return {User};
}

const mapDispatchToProps = {};

var VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default VisibleApp;


