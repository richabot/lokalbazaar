import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {BsSearch,BsCart,BsHeart} from "react-icons/bs"
import {BiLogIn} from "react-icons/bi"
import {FaBars, FaTimes} from "react-icons/fa"


import "../styles/navbar.css"

const Navbar = () => {
    const [clicked,setClicked] = useState(false)
    const handleClick = ()=>{
        setClicked(!clicked)

    }


  return (
    <div className='navigation position-sticky navi'>
        <Link >
            
        <img  className='logoimg' src="https://i.postimg.cc/4NjX5F7j/header-logo.png" alt="logo" />
        </Link>
        
        <ul className={clicked?"list active":"list"}>

            <li><Link className='links'> Vidhyarthi Bazar </Link></li>

            <li><Link className='links'><HiOutlineLocationMarker className='icons' style= {{color:"blueviolet"}}  /></Link></li>
            <li><Link className='links'><BsSearch className='icons' /></Link></li>

            <li><Link className='links'><BsCart className='icons' /></Link></li>

            <li><Link className='links'><BsHeart className='icons' /></Link></li>

            <li><Link className='links'><BiLogIn className='icons' /></Link></li>


        </ul>
        <div className='hamburger' onClick={handleClick} >

            {clicked ?
(<FaTimes size={20}  />):
(<FaBars size={20}  />)
        }
        </div>


    </div>
  )
}

export default Navbar