import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import messages from '../messages'
import user from '../user'
import events from '../events'
import bookings from '../bookings'

import {withRouter} from 'react-router-dom';

import {
    Container,
    Row,
    Col
} from 'reactstrap';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getUser();
        this.props.getEvents();
        this.props.getUserBookings();
    }

    componentWillReceiveProps(nextProps) { //refresh bookings/events if we log in/out
        if (this.props.User !== null && this.props.User !== nextProps.User) {
            this.props.getUserBookings();
            this.props.getEvents(); //need to drop the detailed event models if present
        }
    }

    render() {

        //prevent render until we have the basic data available, this makes child components much simpler.
        if (this.props.User === null || this.props.Events === null || this.props.Bookings === null) return <div>Loading
            Data</div>;

        const envMarker = this.props.Env === 'dev' ? <div className="envMarker"><p>TEST</p></div> : null;

        return (
            <React.Fragment>
                {envMarker}
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h2 className="align-middle">{window.location.hostname}</h2>
                        </Col>
                        <Col sm="auto">
                            <img className="float-right" src="/commonground.svg" style={{height: "75px"}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/">Home</Link>
                        </Col>
                        <Col sm="auto">
                            <user.loginStatus/>
                        </Col>
                    </Row>
                    <Row>
                        <messages.messages/>
                    </Row>
                    {this.props.children}
                    <Row>
                        <Col>
                            <footer><p className="small text-center">&copy; 2018 <a
                                href="https://www.woodcraft.org.uk/">Woodcraft
                                Folk</a>, Source on <a href="https://github.com/RalphSleigh/bookings">Github</a>.</p>
                            </footer>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

//store.dispatch(user.actions.getUser());

const mapStateToProps = (state) => {
    let User = state.getIn(["User", "user"]);
    let Events = state.getIn(["Events", "events"]);
    let Bookings = state.getIn(["Bookings", "bookings"]);
    let Env = state.get("App");
    return {User, Events, Bookings, Env};
};

const mapDispatchToProps = {
    getUser: user.actions.getUser,
    getEvents: events.actions.getEvents,
    getUserBookings: bookings.actions.getUserBookings
};

var VisibleApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default withRouter(VisibleApp);




