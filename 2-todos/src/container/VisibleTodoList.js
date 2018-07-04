/*
* @Author: msi-pc
* @Date:   2018-07-04 09:47:43
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 11:13:17
*/
import React from 'react'
import { connect } from 'react-redux'
import VisibleList from '../components/VisibleList'
import { VisibilityFilters, changeToggle } from '../action'

const setVisibleList = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = state => ({
	todos: setVisibleList(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(changeToggle(id))
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(VisibleList)