import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

import App from './app'
import user from './user'
import events from './events'
import bookings from './bookings'

export default <Router history={browserHistory}>
    				<Route path="/" component={App}>
						<IndexRoute component={events.listPage} />
						<Route path="user" component={user.userPage} />
						<Route path="event/create" component={events.createPage}/>
						<Route path="event/:eventId/">
							<Route path="book" component={bookings.createPage} />
							<Route path="edit" component={events.editPage} />
						</Route>
					</Route>
				</Router>