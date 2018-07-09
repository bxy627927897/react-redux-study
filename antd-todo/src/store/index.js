/*
* @Author: msi-pc
* @Date:   2018-07-09 15:10:26
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-09 16:24:16
*/
import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(
	reducer,
 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //创建了一个数据的公共存储仓库

export default store