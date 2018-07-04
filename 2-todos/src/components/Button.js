/*
* @Author: msi-pc
* @Date:   2018-07-04 09:57:14
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 10:26:28
*/

import React from 'react'

const Button = ({active, onClick, children}) => (
	<button
		onClick={onClick}
		disabled={active}
		style={{
           marginLeft: '4px',
       }}
	>
	{children}
	</button>
)

export default Button