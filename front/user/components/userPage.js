import React from 'react'
import { connect } from 'react-redux'
import { doLogin } from '../actions.js'

class UserPage extends React.Component{
	
	render() {
		const data = this.props.User.toObject();

		var page = data.id === 1 ? <LoginForm doLogin={this.props.doLogin}/> : <UserProfile user={data} />;

		return(
			<div className="row">
				{page}
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

const mapDispatchToProps = {doLogin};

var VisibleUserPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

export default VisibleUserPage;

class LoginForm extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = {email: "",password: ""}
    	this.updateEmail = this.updateEmail.bind(this);
			this.updatePassword = this.updatePassword.bind(this);
			this.submit = this.submit.bind(this);
  	}
	
	updateEmail(e) {
		this.setState({email:e.target.value});
	}
	
	updatePassword(e) {
		this.setState({password:e.target.value});
	}
	
	submit(e) {
		e.preventDefault();
		this.props.doLogin(this.state);
		this.setState({password:""});
	}
	
	render() {
		return(
		<div className="col-sm-12">
		<h3>Log in</h3>
		<form>
			<div className="form-group">
 			   <label for="LoginFormEmail">Email address</label>
  				<input type="email" value={this.state.email} className="form-control" id="LoginFormEmail" placeholder="Email" onChange={this.updateEmail}/>
  			</div>
  			<div className="form-group">
    			<label for="LoginFormPassword">Password</label>
    			<input type="password" value={this.state.password} className="form-control" id="LoginFormPassword" placeholder="Password" onChange={this.updatePassword} />
 			 </div>
			  <button type="submit" onClick={this.submit} class="btn btn-default">Submit</button>
		</form>
		</div>
		)
	}
}

class UserProfile extends React.Component{


	render() {
		return (
			<div className="col-sm-12">
				<p>Logged in as {this.props.user.UserName}, email: {this.props.user.Email} </p>
			</div>
		)
	}


}