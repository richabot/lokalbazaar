import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getcatgories } from '../store/action'
import banner1 from "../images/banner.webp"

import logo from "../images/header_logo.png"
import navi from "../images/cloths.webp"
import "../styles/homepage.css"
import { FaExternalLinkAlt, FaMapMarkerAlt, FaRegHeart, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

import Navbar from './Navbar';
import { Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
const Homepage = () => {
  //redux part
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.categoryReducer.cat)
    useEffect(() => {
      dispatch(getcatgories())
    }, [])
    
 




const [show, setShow] = React.useState(false)
const handleClick = () => setShow(!show)



const data3 =[
{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC-_P6zQGX-0dgskxqH48HdhhlNBbSrPjwg&usqp=CAU',
  title:"Big Spicy Panneer W...",
  stars:'⭐⭐⭐⭐⭐',
  location:'3 km',
  cutoff_price:'₹316',
  price:'₹305'

},
{
  img:'https://i.ytimg.com/vi/MM6hinhfVr8/maxresdefault.jpg',
  title:"Mc Big Spicy Panneer Bur...",
  stars:'⭐⭐⭐⭐⭐',
  location:'3 km',
  cutoff_price:'₹157',
  price:'₹150'

},
{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC-_P6zQGX-0dgskxqH48HdhhlNBbSrPjwg&usqp=CAU',
  title:"MC Big Spicy Panneer Bur...",
  stars:'⭐⭐⭐⭐⭐',
  location:'3 km',
  cutoff_price:'199',
  price:'159'

},
{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC-_P6zQGX-0dgskxqH48HdhhlNBbSrPjwg&usqp=CAU',
  title:"MC Big Spicy Panneer Bur...",
  stars:'⭐⭐⭐⭐⭐',
  location:'3 km',
  cutoff_price:'199',
  price:'159'

},
{
  img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC-_P6zQGX-0dgskxqH48HdhhlNBbSrPjwg&usqp=CAU',
  title:"MC Big Spicy Panneer Bur...",
  stars:'⭐⭐⭐⭐⭐',
  location:'3 km',
  cutoff_price:'199',
  price:'159'

}

]
  return (
    // <div>
   <div>
    <Navbar/>


    <div className='clothes'>
            <div className='text'>

            <Heading className='h1tag'>We are here to provide <br /> all services</Heading>
            
          <br />
            <p>Company that provides loacal search for different services in India <br /> over the phone and online </p>
<br />
            <InputGroup size='md' >

      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Search product anywhere in India '
        borderRadius='20px'

        // flexWrap={'wrap'}



      />
      <InputRightElement width='4.5rem' onClick={handleClick}>
        
        
          {show ? <RxCross2/> : <BsSearch />}


        
      </InputRightElement>
    </InputGroup>

            </div>
            <div className='imgs'>

            <img className='clothy' src="https://i.postimg.cc/wBpgKykV/cloths.webp" alt="clothes" />
          
  



  

            </div>

            
        </div>
        

        <div className='categories'>
<div>

            <Heading size='lg' color='blueviolet'>Choose looking for</Heading>
</div>
<div className='cat-img'>


{count.map((cat,index)=>{
 
  return(
    <div key={index}>
      <div  style={{margin:"auto",textAlign:"center"}}>
    <Link  to= {`product/${cat}`}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfM2DjQx__TH33cT8FvRwPaATVKsSvhTDWw&usqp=CAU"/></Link>
   <Link key={index} to= {`product/${cat}`} >{cat}</Link>
   </div>
    </div>
)

})}


</div>
        </div>
<br /><br />

        {/* sellers */}
       
        <div className='sellers'>
<div className='listing'>

            <Heading size='lg' color='blueviolet'>Shops Nearby you</Heading>
            <Link>see all 👉</Link>
</div>
<div className='sel-img'>

<img className="richbanner" src={banner1} alt="" />

</div>
        </div>

        <div className='banner'>
            <img  src="https://i.postimg.cc/L6JHjMXz/banner.webp" alt="banner" />

        </div>



        <div className='deals'>
<div className='products'>


            <Heading size='lg' color='blueviolet'>Deal of the Day</Heading>

            <Link>see all 👉</Link>
</div>
<div className='prod-img'>


{data3.map((el,index)=>{
    return (
        
        <div key={index}className='deal'>




        <img src={el.img} alt='deal-img' />


        <Heading as={'h1'} >{el.title}</Heading>
     <p>{el.stars}</p>
     <p><s>{el.cutoff_price}</s></p>
     <p className='price'>{el.price}</p>
     <p>{el.location}</p>


</div>
  
  
  )
})}

</div>
        </div>
        
       


   </div>





//redux part
    // {count.map((cat,index)=>(
    //    <Link key={index} to= {`product/${cat}`} >{cat}</Link>
    // ))}
    // </div>
 


  )
}

export default Homepage