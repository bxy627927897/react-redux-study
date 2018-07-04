/*
* @Author: msi-pc
* @Date:   2018-07-04 09:56:37
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-07-04 10:52:25
*/

import { connect } from 'react-redux'
import Button from '../components/Button'
import { setVisibilityFilter } from '../action'

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Button)