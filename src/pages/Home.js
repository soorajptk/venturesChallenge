import React from 'react'
import { Link } from 'react-router-dom'
import { GoPlus } from "react-icons/go";
import ItemContainer from '../components/ItemContainer'
import {connect} from 'react-redux'
import Search from '../components/Search';
import AddItem from '../components/AddItem';

function Home(state) {
  return (
    <div className='container'>
      <div className='page1'>
        <ItemContainer/>
        <div className='homebtn'>
        <GoPlus/>
        <Link className='Homebtn' to={'/'}> add cryptoCurrency</Link>
        </div>

      </div>
        <div className='page2'>
    <Search/>

    {
      state.state.currency.map((item,ind)=>{
        return <AddItem key={ind} {...item}/>
      })
    }
      
    </div>
        </div>
  )
}
const mapStateToProps=(state)=>{
return {state}
}


export default connect(mapStateToProps) (Home)