/*
* @Author: msi-pc
* @Date:   2018-07-04 09:51:08
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 10:27:10
*/
import React from 'react'
import FilterConButton from '../container/FilterConButton'
import { VisibilityFilters } from '../action'

const Buttons = () => (
	<div>
		<FilterConButton filter={VisibilityFilters.SHOW_ALL}>
			All
		</FilterConButton>
		<FilterConButton filter={VisibilityFilters.SHOW_ACTIVE}>
			未完成
		</FilterConButton>
		<FilterConButton filter={VisibilityFilters.SHOW_COMPLETED}>
			已完成
		</FilterConButton>
	</div>
)

export default Buttons