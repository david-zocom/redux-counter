/*
Två sätt att göra samma sak:
handleClick = event => {
	this.props.dispatch(actionIncreaseByOne());
	this.props.dispatch({ type: 'INCREASE_BY_ONE' });
}
*/



let actionIncreaseByOne = () => {
	return {
		type: 'INCREASE_BY_ONE'
	}
}
let actionUpdate = (amount) => {
	return {
		type: 'UPDATE',
		amount: amount
	}
}
let actionAddAnimal = name => {
	return {
		type: 'ADD_ANIMAL',
		name: name
	}
}
export { actionIncreaseByOne, actionUpdate,
	actionAddAnimal };
