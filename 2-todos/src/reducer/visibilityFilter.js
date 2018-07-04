/*
* @Author: msi-pc
* @Date:   2018-07-04 10:28:25
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 10:42:01
*/
import {VisibilityFilters} from '../action'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action)=> {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter