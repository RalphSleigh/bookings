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

        return data.id === 1 ? <LoginForm doLogin={this.props.doLogin} env={this.props.env}/> :
            <UserProfile user={data}/>;
    }
}

const mapStateToProps = (state) => {
    const User = state.getIn(["User", "user"]);
    const env = state.get("App");
    return {User, env};
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
            <Col sm={this.props.env === 'dev' ? 7 : 12}>
                <Card>
                    <CardBody>
                        <CardTitle>Social Login</CardTitle>
                        <CardText>Please use one of the following services to authenticate:</CardText>
                        <Row>
                            <Col sm={this.props.env === 'dev' ? 6 : 5}>
                                <GoogleLoginButton onClick={() => {
                                    window.location = '/auth/google'
                                }} style={localStorage.userId && localStorage.userId !== 'goog' ? {filter: 'grayscale(50%)', opacity: 0.5} : {}} />
                                <FacebookLoginButton text="Login with Facebook" onClick={() => {
                                    window.location = '/auth/facebook'
                                }} style={localStorage.userId && localStorage.userId !== 'face' ? {filter: 'grayscale(50%)', opacity: 0.5} : {}} />
                                <MicrosoftLoginButton onClick={() => {
                                    window.location = '/auth/microsoft'
                                }} style={localStorage.userId && localStorage.userId !== 'micr' ? {filter: 'grayscale(50%)', opacity: 0.5} : {}} />
                                <MyYahooLoginButton onClick={() => {
                                    window.location = '/auth/yahoo'
                                }} style={localStorage.userId && localStorage.userId !== 'yaho' ? {filter: 'grayscale(50%)', opacity: 0.5} : {}} />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            {this.props.env === 'dev' ?
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
                </Col> : null}
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

    const {style, ...buttonProps} = props;

    const customProps = {
        style: {background: "#2f2268", ...style},
        activeStyle: {background: "#16094F"}

    };


    return <SocialLoginButton{...{...customProps, ...buttonProps}}>
        <FontAwesomeIcon style={{verticalAlign: 'middle', width: "1em", marginLeft: "0.6em", marginRight: "0.6em"}}
                         icon={faYahoo}/>
        <span style={{verticalAlign: 'middle'}}>Log on with Yahoo!</span>
    </SocialLoginButton>
};

