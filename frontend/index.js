import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/components/App';

const appRoot = document.getElementById('app');

const Start = () => (
	<Provider>
				<App />
	</Provider>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Start />, appRoot);
});
