import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import user from './user'
import events from './events'
import bookings from './bookings'
import manage from './manage'

import store from './store.js'

export default (<Router history={browserHistory}>
    				<Route path="/" component={App /*Loads User, Events and User's own Bookings*/}>
						<IndexRoute component={events.listPage} />
						<Route path="user" component={user.userPage} />
						<Route path="event/create" component={events.createPage}/>
						<Route path="event/:eventId/">
							<Route path="book" component={bookings.myBookingPage} />
							<Route path="book/thanks" component={bookings.thanksPage}/>
							<Route path="edit" component={events.editPage} />
							<Route path="manage" component={manage.loader}>
								<IndexRoute component={manage.overviewPage} />
								<Route path="overview" component={manage.overviewPage} />
							</Route>
						</Route>
						<Route path="booking/:bookingId/">
							<Route path="edit" component={bookings.editPage} />
						</Route>
					</Route>
				</Router>);

