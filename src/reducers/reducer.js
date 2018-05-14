
let rootReducer = (state={ value: 14 }, action) => {
	switch( action.type ) {

		case 'INCREASE_BY_ONE':
			return {
				...state,  // onödig här, bra i mer komplicerade state objekt
				value: state.value + 1
			};

		case 'UPDATE':
			return {
				...state,
				value: state.value + action.amount
			};

		default:
			return state;
	}
}

export default rootReducer;
