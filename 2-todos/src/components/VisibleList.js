/*
* @Author: msi-pc
* @Date:   2018-07-03 19:23:50
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-05 11:00:43
*/
import React from 'react'

const VisibleList = ({ todos, toggleTodo, toggleDelete }) => (
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
				<button onClick={() => toggleDelete(todo.id)}>删除该任务</button>
			</div>
		)}
	</div>
)

export default VisibleList