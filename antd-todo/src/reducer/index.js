/*
* @Author: msi-pc
* @Date:   2018-07-09 15:19:05
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-09 17:50:47
*/

const defaultState = {
	inputValue: '',
	list: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'CHANGE_INPUT_VALUE':
			return {...state, inputValue: action.value};
		case 'ADD_TODO':
			let newstate = {...state};
			newstate.list.push(newstate.inputValue);
			return newstate;
		case 'DELETE_TODO':
			let newstate2 = {...state};
			newstate2.list.splice(action.index, 1);
			console.log(newstate2);
			return newstate2;
		default:
			return state;
	}
}