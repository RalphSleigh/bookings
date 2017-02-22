import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import guestUUID from './util.js'
import Routes from './routes.js'
import store from './store.js'

const provider = <Provider store={store}>{Routes}</Provider>

console.log( document.getElementById('root'));
render(provider, document.getElementById('root'));