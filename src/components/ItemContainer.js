import React from 'react'
import Item from './Item'
import {connect} from 'react-redux'

function ItemContainer({currentCurrency}) {
console.log(currentCurrency)
  return (

    <div >
      {
        currentCurrency.map((item,ind)=>{
          return <Item key={ind} {...item}/>
        })
        

      }

    </div>
  )
}
const mapStateToProps=(state)=>{
return {currentCurrency:state.currentCurrency}
}
export default connect(mapStateToProps) (ItemContainer)