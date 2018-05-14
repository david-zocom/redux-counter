
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
export { actionIncreaseByOne, actionUpdate };
