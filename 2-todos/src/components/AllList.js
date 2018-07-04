/*
* @Author: msi-pc
* @Date:   2018-07-03 18:47:43
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-03 19:18:18
*/
import React from 'react'

const AllList = ({ todos }) => (
	<div>
		所有任务
		{todos.map(todo => 
			<div
				key={todo.id}>
				{todo.text}
			</div>
		)}
	</div>
)

export default AllList