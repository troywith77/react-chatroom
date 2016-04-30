import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import Root from './containers/Root';

const rootEl = document.querySelector('#root');

render(
	<Provider store={store}>
		<Root />
	</Provider>
	,
	rootEl
)