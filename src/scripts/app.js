import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super();
	}
	componentWillMount(){
		console.log('Mounting');
	}
	render(){
		return (
			<div>
				<h1>Hello!</h1>
			</div>
		)
	}
	componentDidMount(){
		console.log('Mounted');
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
