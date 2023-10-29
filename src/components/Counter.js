import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h3 style={{marginTop:"40px"}}>{props.counter}</h3>
    </div>
  )
}

function mapStateToProps(state) {
  return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(Counter);
