/*
* @Author: msi-pc
* @Date:   2018-07-03 19:23:50
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 11:10:58
*/
import React from 'react'

const VisibleList = ({ todos, toggleTodo }) => (
	<div
		style={{marginTop: '20px', color: 'blue'}}>
		选择可见的任务——已完成、未完成、所有
		{todos.map(todo => 
			<div
				key={todo.id}
        onClick={() => toggleTodo(todo.id)}
				style={{
		      textDecoration: todo.completed ? 'line-through' : 'none'
		    }}>
				{todo.text}
			</div>
		)}
	</div>
)

export default VisibleList