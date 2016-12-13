import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './routes.js'
import store from './store.js'
import user from './user'

store.dispatch(user.actions.getUser());


const provider = <Provider store={store}>{Routes}</Provider>


render(provider, document.getElementById('root'));