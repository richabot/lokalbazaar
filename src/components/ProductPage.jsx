import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { catdetails } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import Productdisplay from './Products'
import { NavLink } from 'react-router-dom';
import Products from './Products'
const Productpage = () => {
    const {category} =useParams()
   
const dispatch=useDispatch()
const details=useSelector((state)=>state.categoryReducer.details)
 
useEffect(() => {

    dispatch(catdetails(category))
   
}, [category])

  return (
  <>
    <Products/>
  </>

  )
}

export default Productpage




 {/* {details.map((r))} */}
        {/* {details.map((r)=>(
           <>
            <div>{r.category}</div>
            <div>{r.description}</div>
           <img src={r.image}></img>
           </>
        ))} */}
