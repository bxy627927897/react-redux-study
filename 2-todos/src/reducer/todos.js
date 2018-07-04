/*
* @Author: msi-pc
* @Date:   2018-07-03 17:58:06
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 11:10:01
*/
const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					complete: false
				}
			]
		case 'TOGGLE_CHANGE':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
		default:
			return state
	}
}

export default todos