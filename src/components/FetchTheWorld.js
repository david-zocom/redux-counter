import React, {Component} from 'react';
import {actionFetchFailed, actionFetchGotData, actionUserFetchData} from '../actions/actions.js';
import {NO_DATA, LOADING/*, LOADED*/} from '../actions/constants.js';
import {connect} from 'react-redux';


class FetchTheWorld extends Component{
	render() {
		let content;
		if( this.props.fetchState === LOADING ) {
			content = <div>Loading...</div>;
		} else if( this.props.fetchState === NO_DATA ) {
			content = <div>No data.</div>;
		} else {
			const dataList = this.props.data.map( x => (
				<div key={x.name}>{x.name}, {x.population}</div>
			) );
			content = <div> {dataList} </div>;
		}
		return (
			<div>
				<button onClick={this.handleClickFetchData}>Hämta data</button>
				{content}
			</div>
		)
	}
	handleClickFetchData = event => {
		const url = 'https://forverkliga.se/JavaScript/api/simple.php?world';
		this.props.dispatch(actionUserFetchData());

		fetch(url)
		.then(response => {
			return response.json();
		})
		.then(json => {
			this.props.dispatch(actionFetchGotData(json));
		})
		.catch(message => {
			this.props.dispatch(actionFetchFailed(message));
		})
	}
}
let mapStateToProps = state => {
	return {
		fetchState: state.world.fetchState,
		data: state.world.worldData
	};
}
export default connect(mapStateToProps)(FetchTheWorld);

//
