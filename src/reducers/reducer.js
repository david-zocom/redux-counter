import {combineReducers} from 'redux';

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
			return state + 1;

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
}

let rootReducer = combineReducers({
	value: counterReducer,
	animals: animalReducer,
	numberOfClicks: clicksReducer
});

export default rootReducer;
