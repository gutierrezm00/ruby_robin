import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

const appRoot = document.getElementById('app');
console.log('test');
const Start = () => (
	<p>
		TEST
	</p>
	// <Provider>
	// 	<p>
	// 		TEST
	// 	</p>
	// 			{/* <App /> */}
	// </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Start />, appRoot);
});
