import {combineReducers} from 'redux';
import {NO_DATA, LOADING, LOADED} from '../actions/constants.js';

let animalReducer = (state=[], action) => {
	switch( action.type ) {
		case 'ADD_ANIMAL':
			return [...state, action.name];

		default:
			return state;
	}
}
let counterReducer = (state=14, action) => {
	switch( action.type ) {
		case 'INCREASE_BY_ONE':
			return state + LOADING;

		case 'UPDATE':
			return state + action.amount;

		default:
			return state;
	}
}
let clicksReducer = (state=0, action) => {
	switch( action.type ) {
		case 'INCREASE_BY_ONE':
		case 'UPDATE':
		case 'ADD_ANIMAL':
			return state + 1;

		default:
			return state;
	}
};
let worldReducer = (state={fetchState: NO_DATA, worldData: null}, action) => {
	switch( action.type ) {
		case 'USER_FETCH_DATA':
			return {
				...state,
				fetchState: LOADING
			};
		case 'FETCH_FAILED':
			return {
				...state,
				fetchState: NO_DATA
			};  // future version: eventuellt dela upp i två versioner, så att vi kan visa felmeddelanden: NO_DATA och FETCH_ERROR
		case 'FETCH_GOT_DATA':
			return {
				...state,
				fetchState: LOADED,
				worldData: action.data
			}
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	value: counterReducer,
	animals: animalReducer,
	numberOfClicks: clicksReducer,
	world: worldReducer
});

export default rootReducer;
