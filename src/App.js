import React,{useEffect} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {createStore} from 'redux'
import { Provider } from "react-redux";
import axios from 'axios'
import Home from "./pages/Home";

const initialStore={
currency:[],
currentCurrency:[]
}

function reducer(state,action){
  if(action.type==='ADDITEM'){
    const result=state.currency.filter((item)=>item.id===action.payload.id)
    const reamaining= state.currency.filter((item)=>item.id!==action.payload.id)
    return {...state,currentCurrency:[...state.currentCurrency,...result],currency:reamaining}
  }
  if(action.type==='LOAD'){
   return {...state,currency:action.payload}
  }
  if(action.type==='SEARCH'){
console.log(action.payload)
if(action.payload.input===''){
  return {...state,currency:JSON.parse(localStorage.getItem('save'))}

}else{
const result=state.currency.filter((item)=>item.name===action.payload.input)
if(result.length===0){
return {...state}  
}else{
return {...state,currency:result}  

}
}
  }
  
if(action.type==='DELETEITEM'){
const result=state.currentCurrency.filter((item)=>item.id!==action.payload.id)
  return {...state,currentCurrency:result}
}  

return state
}

const store=createStore(reducer,initialStore)

function App() {
  useEffect(()=>{
const fetchData=async(req,res)=>{
try {
  const data=await axios.get('https://data.messari.io/api/v1/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours')

store.dispatch({type:"LOAD",payload:data.data.data})
localStorage.setItem('save',JSON.stringify(data.data.data))

} catch (error) {
console.log(error)
  
}
}
fetchData()
  },[])
  

  return (
    <main >
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
   </Provider>
    </main>
  );
}

export default App;
