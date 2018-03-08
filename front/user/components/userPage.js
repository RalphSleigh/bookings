import React from 'react'
import {connect} from 'react-redux'
import {doLogin} from '../actions.js'
import {FacebookLoginButton, GoogleLoginButton, MicrosoftLoginButton} from 'react-social-login-buttons';
import SocialLoginButton from 'react-social-login-buttons/lib/buttons/SocialLoginButton';
import {
    Button,
    Row,
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faYahoo from '@fortawesome/fontawesome-free-brands/faYahoo'


class UserPage extends React.Component {

    render() {
        const data = this.props.User.toObject();

        return data.id === 1 ? <LoginForm doLogin={this.props.doLogin}/> : <UserProfile user={data}/>;
    }
}

const mapStateToProps = (state) => {
    const User = state.getIn(["User", "user"]);
    return {User};
};
/*
const mapDispatchToProps = (dispatch) => {
  return {
    doLogin:(credentials) => dispatch(doLogin(credentials))
  }
}
*/

const mapDispatchToProps = {doLogin};

const VisibleUserPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);

export default VisibleUserPage;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""}
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateEmail(e) {
        this.setState({email: e.target.value});
    }

    updatePassword(e) {
        this.setState({password: e.target.value});
    }

    submit(e) {
        e.preventDefault();
        this.props.doLogin(this.state);
        this.setState({password: ""});
    }

    render() {
        return (<Row>
            <Col sm={7}>
                <Card>
                    <CardBody>
                        <CardTitle>Social Login</CardTitle>
                        <CardText>Please use one of the following services to authenticate:</CardText>
                        <Row>
                            <Col sm={6}>
                                <GoogleLoginButton onClick={() => {
                                    window.location = '/auth/google'
                                }}/>
                                <FacebookLoginButton text="Login with Facebook" onClick={() => {
                                    window.location = '/auth/facebook'
                                }}/>
                                <MicrosoftLoginButton onClick={() => {
                                    window.location = '/auth/microsoft'
                                }}/>
                                <MyYahooLoginButton onClick={() => {
                                    window.location = '/auth/yahoo'
                                }}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col sm={5}>
                <Card>
                    <CardBody>
                        <CardTitle>Local Login</CardTitle>
                        <CardText>Only use this if Ralph has told you to.</CardText>
                        <Form>
                            <FormGroup row>
                                <Label for="email" sm={4}>
                                    Email Address
                                </Label>
                                <Col>
                                    <Input type="email"
                                           name="email"
                                           placeholded="e-mail"
                                           value={this.state.email}
                                           onChange={this.updateEmail}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={4}>
                                    Password
                                </Label>
                                <Col>
                                    <Input type="password"
                                           name="password"
                                           placeholded="password"
                                           value={this.state.password}
                                           onChange={this.updatePassword}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col sm={{size: 8, offset: 4}}>
                                    <Button type="submit"
                                            onClick={this.submit}
                                            color="primary">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>);
    }
}

class UserProfile extends React.Component {


    render() {
        return (
            <div className="col-sm-12">
                <p>Logged in as {this.props.user.userName}, email: {this.props.user.email} </p>
            </div>
        )
    }
}


const MyYahooLoginButton = (props) => {

    const customProps = {
        style: {background: "#2f2268"},
        activeStyle: {background: "#16094F"}

    };


    return <SocialLoginButton{...{...customProps, ...props}}>
        <FontAwesomeIcon style={{verticalAlign: 'middle', width: "1em", marginLeft: "0.6em", marginRight: "0.6em"}}
                         icon={faYahoo}/>
        <span style={{verticalAlign: 'middle'}}>Log on with Yahoo!</span>
    </SocialLoginButton>
};

