import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { increase_counter } from '../redux/actions/CounterAction'

const IncreaseCounter = (props) => {
  return (
    <div >
      <button style={{width:"50px",height:"50px",borderRadius:"50%"}}  onClick={() => { props.actions.increase_counter() }}>+</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ increase_counter }, dispatch) }
}

export default connect(null,mapDispatchToProps)(IncreaseCounter)