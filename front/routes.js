import React from 'react'
//import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom';

import App from './app'
import user from './user'
import events from './events'
import bookings from './bookings'
import manage from './manage'

//import store from './store.js'


export default (
	<App>
		<Switch>
			<Route exact path="/" component={events.listPage} />
			<Route path="/user" component={user.userPage} />
			<Route path="/event/create" component={events.createPage} />
            <Route path="/event/:eventId(\d+)">
				<Switch>
                    <Route exact path="/event/:eventId(\d+)/book" component={bookings.myBookingPage}/>
                    <Route exact path="/event/:eventId(\d+)/book/thanks" component={bookings.thanksPage}/>
                    <Route exact path="/event/:eventId(\d+)/edit" component={events.editPage}/>
                    <Route exact path="/event/:eventId(\d+)/manage"
                           component={manage.containerPage /* Loads all Bookings for an event */}/>
				</Switch>
			</Route>
			<Route path="/booking/:bookingId" component={bookings.loader}>
                <Route path="/booking/:bookingId(\d+)/edit" component={bookings.editPage}/>
			</Route>
			<Route path="/cancel" component={bookings.cancelPage} />
            <Route path="/guestUUID/:eventId(\d+)/:guestUUID" component={bookings.myBookingPage}/>
		</Switch>
	</App>
)





/*

export default (<Router history={browserHistory}>
	<Route path="/" component={App}>
		<IndexRoute component={events.listPage} />
		<Route path="user" component={user.userPage} />
		<Route path="event/create" component={events.createPage} />
		<Route path="event/:eventId/">
			<Route path="book" component={bookings.myBookingPage} />
			<Route path="book/thanks" component={bookings.thanksPage} />
			<Route path="edit" component={events.editPage} />
			<Route path="manage" component={manage.containerPage }>
				<IndexRoute component={manage.participants} />
				<Route path="participants" component={manage.participants} />
				<Route path="bookings" component={manage.bookings} />
				<Route path="kp" component={manage.kp} />
			</Route>
		</Route>
		<Route path="booking/:bookingId/" component={bookings.loader}>
			<Route path="edit" component={bookings.editPage} />
		</Route>
		<Route path="cancel" component={bookings.cancelPage} />
		<Route path="guestUUID/:eventId/:guestUUID" component={bookings.myBookingPage} />
	</Route>
</Router>);

*/