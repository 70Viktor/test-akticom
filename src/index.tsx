import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

const rootEl = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootEl)
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
)
