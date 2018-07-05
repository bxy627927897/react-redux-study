/*
* @Author: msi-pc
* @Date:   2018-07-03 17:58:06
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-05 11:06:44
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
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, text: '已删除'}
          : todo
      )
		default:
			return state
	}
}

export default todos