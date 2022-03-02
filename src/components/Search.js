import React from 'react'
import {connect} from 'react-redux'

function Search({dispatch}) {
  return (
    <div className='inpContainer'>

        <input onChange={(e)=>dispatch({type:'SEARCH',payload:{input:e.target.value}})} className='inp' placeholder='Serach here..'  type="text"  />
    </div>
  )
}

function mapDispatchToProps(state){
  // console.log({state})
  return {...state}
}


export default connect(mapDispatchToProps) (Search)