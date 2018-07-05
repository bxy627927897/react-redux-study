/*
* @Author: msi-pc
* @Date:   2018-07-03 17:58:06
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-05 11:14:56
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
    case 'TOGGLE_DELETE':
      return state.filter(todo =>
        todo.id !== action.id
      )
		default:
			return state
	}
}

export default todos