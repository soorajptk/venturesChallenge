import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import {connect} from 'react-redux'

function Item({name,symbol,metrics,deleteitem}) {
 
  return (
    <article className='singleItem'>
      <div className='singleItemContainer'>
      <div className='itemPart'>
      <img className='imgBit' src="https://bitcoin.org/img/icons/opengraph.png?1644775669" alt="bitcurrency" />

      </div>
      <div className='itemPart1'>
        <p>{name}</p>
        <h5 className='para'>{symbol}</h5>
      </div>
      <div className='itemPart2'>
        <p>$ {metrics.market_data.price_usd.toFixed(4)}</p>
        <h5 className={metrics.market_data.percent_change_usd_last_24_hours<0 ? 'red' : 'green'} >{metrics.market_data.percent_change_usd_last_24_hours.toFixed(4)}</h5>
      </div>
      <button onClick={()=>deleteitem()} className='deleteBtn'><AiTwotoneDelete/></button>
              

      </div>
         </article>
    )
}
function mapDisaptchToProps(dispatch,ownProps){
const {id}=ownProps
  return{
    deleteitem:()=>dispatch({type:"DELETEITEM",payload:{id}})
  }
}
export default connect(null,mapDisaptchToProps) (Item)