import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Graph from '../js/graph'

export default function Default() {
	return (
		<Router>
			<Graph></Graph>
		</Router>
	);
}
