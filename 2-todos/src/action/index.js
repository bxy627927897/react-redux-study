/*
* @Author: msi-pc
* @Date:   2018-07-03 17:46:36
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-05 10:58:59
*/
let id = 0;

export const addToDo = text=>({
	type: 'ADD_TODO',
	id: id++,
	text
})

export const setVisibilityFilter = filter=>({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

export const changeToggle = id=>({
	type: 'TOGGLE_CHANGE',
	id
})

export const deleteToggle = id=>({
	type: 'TOGGLE_DELETE',
	id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}