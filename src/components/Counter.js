import React, {Component} from 'react';
import {actionIncreaseByOne, actionUpdate} from '../actions/actions.js';
//import Actions from '../actions/actions.js';
//Actions.actionUpdate
import {connect} from 'react-redux';

class Counter extends Component {
	render() {
		return (
			<div>
				Value is: 14 or {this.props.value} <br/>
				<button onClick={this.handleClickIncrease}>Increase</button>
				<button onClick={event => this.props.dispatch(actionUpdate(-1))}>Decrease</button>
				<button onClick={event => this.props.dispatch(actionUpdate(100))}>Explode</button>
			</div>
		)
	}
	handleClickIncrease = event => {
		// this.setState eller this.props.x()
		let action = actionIncreaseByOne();
		console.log('Increase clicked, dispatching action:', action);
		this.props.dispatch(action);
	}
}
let mapStateToProps = state => {
	return {
		value: state.value
	};
}

export default connect(mapStateToProps)(Counter);


//
