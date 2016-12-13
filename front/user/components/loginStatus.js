import React from 'react'
import { connect } from 'react-redux'
import { Link  } from 'react-router'

import { doLogout } from '../actions.js'

class LoginStatus extends React.Component{
	
	constructor(props) {
    	super(props);

		this.logout = this.logout.bind(this);
  	}

	logout(e) {
		e.preventDefault();
		this.props.doLogout();
	}

	render() {
		const data = this.props.User.toObject();

		if(data.id == 1)var link = <Link to="/user" >Login</Link>;
		else var link = <a onClick={this.logout} href="#">Logout</a>;
		
		return(
			<div className="col-md-3">
				<p className="pull-right">Logged in as: <b>{data.UserName}</b> ({link})</p>
			</div>
		)
	}	
}

const mapStateToProps = (state) => {
  var {User} = state.toObject();
  return {User};
}
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/

const mapDispatchToProps = {doLogout};

var VisibleLoginStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginStatus);

export default VisibleLoginStatus;