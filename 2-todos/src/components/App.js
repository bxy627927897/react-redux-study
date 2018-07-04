/*
* @Author: msi-pc
* @Date:   2018-07-03 17:23:13
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 11:05:34
*/
import React from 'react'
import Header from '../container/Header'
import List from '../container/List'
import VisibleTodoList from '../container/VisibleTodoList'
import Buttons from './Buttons'

const App = () => (
	<div>
		<Header/>
		<List/>
		<VisibleTodoList/>
		<Buttons/>
	</div>
)

export default App