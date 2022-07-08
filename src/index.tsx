import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store'
import reportWebVitals from './reportWebVitals'
import {App} from './App'
import './index.scss'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
