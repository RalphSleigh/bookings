import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {browserHistory} from 'react-router'

//confirmation page for bookings


class ApplyThanksPage extends React.Component {

    constructor(props) {
        super(props);

    }


    render() {

        const event = this.props.Event.toJS();
        const user = this.props.User.toJS();

        return (<div>
                <div className="row">
                    <div className="col-sm-12">
                        <h3>Thanks for your interest in {event.name}</h3>
                        <p>You will be e-mailed on {user.email} when one of our team has approved you to book</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    let User = state.get("User");
    let Event = state.getIn(["Events", "events", parseInt(props.match.params.eventId)]);
    return {User, Event}
};

//const getEvent = event.actions.getEvent
const mapDispatchToProps = {};

const VisibleThanksPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(ApplyThanksPage);

export default VisibleThanksPage;