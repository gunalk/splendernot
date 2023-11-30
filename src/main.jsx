import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { store } from './store/store'

import { Provider } from 'react-redux'


import Router from './Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Router/>
</Provider>,
)
