import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrease_counter } from '../redux/actions/CounterAction'

const DecreaseCounter = (props) => {
  return (
    <div >
      <button style={{width:"50px",height:"50px",borderRadius:"50%",marginLeft:"10px"}}  onClick={() => {props.actions.decrease_counter() }}>-</button>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ decrease_counter }, dispatch) }
}

export default connect(null,mapDispatchToProps)(DecreaseCounter)
