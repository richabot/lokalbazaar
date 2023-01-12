import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';
import { catdetails } from '../store/action';
import { FaCartPlus } from 'react-icons/fa';
import "../styles/product.css"
import  Navbar from './Navbar.jsx';
import { AccordionIcon, AccordionItem, AccordionPanel, Box,Accordion, AccordionButton } from '@chakra-ui/react';

// import { Accordion, AccordionButton } from 'react-bootstrap';

    const Products = () => {

        const {category} =useParams()
        
        console.log(category,"param")
    const dispatch=useDispatch()
    const details=useSelector((state)=>state.categoryReducer.details)
    const [filter, setFilter] = useState(details);
    useEffect(() => {
      console.log("hi")
        dispatch(catdetails(category))
       
    }, [category])
    // useEffect(() => {
    // console.log(filter,"fl")
    // }, [filter])
    
    const filterProduct = (cate) => {
        console.log(cate,"sjskjs")
        const updateList = details.filter((x) => 
      {
        
       
       setFilter(updateList);
      //  console.log(filter,"imageine it")
      })
      console.log(updateList,"ayush")
       
    }
    console.log(details,"details")
        return (
            <>
            <Navbar/>

     <div className='purplebox'>
<img className='imageset' src="../Images/Capture.PNG" alt="" />
</div>






               <div className="container">
            <div className="row">

            <div className="col-md-3 my-3">

<div className="position-sticky" style={{ top: "100px" }}>
    {/* <button className="btn btn-outline-dark m-1 btn-sm" >All</button>
    <button className="btn btn-outline-dark m-1 btn-sm" >Women's Clothing</button>
    <button className="btn btn-outline-dark m-1 btn-sm" >Men's Clothing</button>
    <button className="btn btn-outline-dark m-1 btn-sm">Jewelery</button>
    <button className="btn btn-outline-dark m-1 btn-sm" >Electronics</button> */}
    {/* <p>Latest</p>
   <p>Price:High to Low</p> 
   <p>Price:Low to High</p>  */}
  <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      Sort By
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Price:High to Low
    </AccordionPanel>
    <AccordionPanel pb={4}>
    Price:Low to High
    </AccordionPanel>
  </AccordionItem>


</Accordion>
</div>
<div className="col-md-3 my-3">




</div>
</div>

<div className="col-md-9 py-md-3">
<div className="row">
    {details.map((product) => {
        return (
            <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                <div className="card h-100">
                    <img src={product.image} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                    <div className="m-3 mb-0">
                        <small className="card-title">{product.title.substring(0, 50)}...</small>
                    </div>
                    <div style={{ marginTop: "auto" }}>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="m-3 blockit"  style={{marginBottom:"100px !important"}}><b>MPR </b></div>

                           
                          
                        </div>
                        <div className="m-3"  style={{marginTop: "-16px !important" ,textDecoration: "line-through"}}><b>Rs {parseInt(product.price)*70}</b></div>
                            <div className="m-3"  style={{color:"red" ,marginTop:"-16px! important"}}><b>Rs {parseInt(product.price)*70-500}</b></div>
                    </div>
                    
                              <div className='d-flex justify-content-between align-items-center'>
                              <button className="btn  btn-sm m-3 border-primary btnclass">
                                    Add 🛒
                                    {/* <i className="fa fa-arrow-right text-muted"></i> */}
                                    
                                </button>
                              
                                <div class="contai">
  
  
  
  <div class="quantity">
    <a href="#" class="quantity__minus"><span>-</span></a>
    <input name="quantity" type="text" class="quantity__input" value="1"/>
    <a href="#" class="quantity__plus"><span>+</span></a>
  </div>
  
</div>
                            
                              </div>
                           
                </div>
                
            </div>
        )
    })}
</div>

</div>



                </div>
                </div>
            </>
        )
    }

   


export default Products


