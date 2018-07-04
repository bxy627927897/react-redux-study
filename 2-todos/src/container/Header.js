/*
* @Author: msi-pc
* @Date:   2018-07-03 17:27:51
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-03 19:12:27
*/
import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../action'

const Header = ({ dispatch }) => {
	let input

	function addTask() {
		if (!input.value.trim()) {
			return
		}
		dispatch(addToDo(input.value))
		input.value = ''
	}

	return (
		<div>
			<input ref={userinput => input = userinput} />
			<button onClick={addTask}>
				Add Task
			</button>
		</div>
		)
}

export default connect()(Header)