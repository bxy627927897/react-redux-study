/*
* @Author: msi-pc
* @Date:   2018-07-09 18:47:32
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-09 18:55:44
*/


export const deleteItem = (index) => ({
	type: 'DELETE_TODO',
  index
})


export const changeInput = (index) => ({
	type: 'CHANGE_INPUT_VALUE',
  value: index
})


export const addItem = (index) => ({
	type: 'ADD_TODO'
})