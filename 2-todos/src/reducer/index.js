/*
* @Author: msi-pc
* @Date:   2018-07-03 17:51:33
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 10:40:44
*/
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
	todos,
	visibilityFilter
})
