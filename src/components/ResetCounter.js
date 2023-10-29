import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reset_counter } from '../redux/actions/CounterAction'
const ResetCounter = (props) => {
  return (
    <div >
      <button style={{width:"50px",height:"50px",borderRadius:"50%",marginLeft:"10px"}}  onClick={() => {props.actions.reset_counter() }}>Reset</button>
    </div>
  )
}

function mapDispatchtoprops(dispatch){
  return{actions:bindActionCreators({reset_counter},dispatch)}
}

export default connect(null,mapDispatchtoprops)(ResetCounter)
