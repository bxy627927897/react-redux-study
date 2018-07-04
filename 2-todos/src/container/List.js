/*
* @Author: msi-pc
* @Date:   2018-07-03 17:55:56
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 10:52:18
*/
import AllList from '../components/AllList'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
	todos: state.todos
})

export default connect(
	mapStateToProps
	)(AllList)