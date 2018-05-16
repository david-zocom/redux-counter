import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAddAnimal} from '../actions/actions.js';


class Animals extends Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };
	}
	render() {
		const list = this.props.animalList.map(
			(a, index) => ( <li key={a+index}>{a}</li> )
		);
		return (
			<div>
				Djur
				<ul> {list} </ul>
				<input type="text"
					placeholder="Djurnamn"
					onChange={e => this.setState({ input: e.target.value})}
					value={this.state.input} />
				<button onClick={this.handleClickAddAnimal}>Lägg till</button>
			</div>
		)
	}
	handleClickAddAnimal = event => {
		let action = actionAddAnimal(this.state.input);
		console.log('Animals.handleClickAddAnimal: action=', action);
		this.props.dispatch(action);
	}
}
let mapStateToProps = state => {
	return {
		animalList: state.animals
	}
}
export default connect(mapStateToProps)(Animals);

//
