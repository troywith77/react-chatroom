import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root'

const rootEl = document.querySelector('#root');

render(
	<Root />,
	rootEl
)