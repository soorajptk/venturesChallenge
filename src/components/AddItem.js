import React from 'react'
import { GoPlus } from "react-icons/go";
import {connect} from 'react-redux'

function AddItem({symbol,name,additem}) {
  return (
    <div className='addItem'>
        <div>
            <p>{name}</p>
            <p>{symbol}</p>
        </div>
        <div>
           <button onClick={()=>additem()}  className='additembtn'> <GoPlus className='icon' /></button> 
        </div>
    </div>
  )
}
function mapDisaptchToProps(dispatch,ownProps){
const {id}=ownProps
  return {additem:()=>dispatch({type:'ADDITEM',payload:{id}})}
}


export default connect(null,mapDisaptchToProps) (AddItem)