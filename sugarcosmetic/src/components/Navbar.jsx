import { Button, Icon, Select, Stack,Text } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Register } from '../PrabhatComponents/Register/Register'
import {Link} from "react-router-dom"
import { FaUser } from 'react-icons/fa'
import './nav.css'
import { Login } from '../PrabhatComponents/Login/Login'

const Navbar = ({flow,setflow,active,setActive,hadleclick, HandleClose,user,setuser }) => {

 

  return (
    <>

    <div id='nav'>
 
        <div className='mainBox'>
            <div className='gif'/>
<img src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="" />

            </div>
{/* //           serch box............  */}
            <div className='search'>
{/* //               here to add live search functionality required.......................... */}
                <input type="text" />
            </div>
            <div className='btn'>
                <button>search</button>
            </div>
     
   
            {!flow ? (
        <Button onClick={()=>hadleclick()}>
          <Text _hover={{ textDecoration: "underline" }}>Register</Text>/
          <Text _hover={{ textDecoration: "underline" }}>Login</Text>
        </Button>
      ):(
        <Stack align="center" direction="row">
          <Icon as={FaUser} />
          <Select width="200px" onChange={(e)=>{if(e.target.value=="Logout")setflow(false)}}>
            <option value={user}>Hi {user}</option>
            <option value="Logout">Logout</option>
          </Select>
        </Stack>
      )
      }
  
               
                <Link to="">
                     <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
  
                </Link>
         

<Link to="/">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
</Link>




<Link to="">
    <img src="https://in.sugarcosmetics.com/desc-images/discountIcon.svg" alt="" />
</Link>



            </div>
 

        <div className='hoverBox'>
            {/* <h3>MAKEUP</h3> */}
            
            <div className="topnav" id="myTopnav"><div className="dropdown">
    <button className="dropbtn">MAKEUP 
    </button>
    <div className="dropdown-content">
      <Link to="#">LIPS</Link>
      <Link to="#">FACE</Link>
      <Link to="#">EYE</Link>
    </div> </div> </div> 
            {/* <h3>BRUSHES</h3> */}
            <div className="topnav" id="myTopnav"><div className="dropdown">
    <button className="dropbtn">BRUSHES 
    </button>
    <div className="dropdown-content">
      <Link to="#">FACE BRUSHES</Link>
      <Link to="#">EYE BRUSHES</Link>
      
    </div> </div> </div>
            {/* <h3>SKINCARE</h3> */}
            <div className="topnav" id="myTopnav"><div className="dropdown">
    <button className="dropbtn">SKINCARE 
    </button>
    <div className="dropdown-content">
      <Link to="#"> MOISTURIZERS</Link>
      <Link to="#">SUNSCREEN</Link>
      <Link to="#">SETTING MISTS</Link>
      <Link to="">COFFEE CULTURE RANGE</Link>
      <Link to="">SHEET MASK COMBO</Link>
      <Link to="">CITRUS GOT REAL RANGE</Link>
      <Link to="">AQUAHOLIC RANGE</Link>
      <Link to="">MASKS</Link>
    </div> </div> </div>
            {/* <h3>TRENDING</h3> */}
            <div className="topnav" id="myTopnav"><div className="dropdown">
    <button className="dropbtn">TRENDING 
    </button>
    <div className="dropdown-content">
      <Link to="#">SUGER MARCH STATION</Link>
      <Link to="#">MAKEUP KITS</Link>
      <Link to="#">BESTSELLERS</Link>
      <Link to="#">SUGAR SETS</Link>
      <Link to="#">VELUE SETS</Link>
    </div> </div> </div>
            {/* <h3>BLOG</h3> */}
            <div className="topnav" id="myTopnav"><div className="dropdown">
    <button className="dropbtn">BLOG 
    </button>
    <div className="dropdown-content">
      <Link to="#">FEATURED</Link>
      <Link to="#">MACKUP</Link>
      <Link to="#">SKINCARE</Link>
    </div> </div> </div>
            {/* <h3>OFFERS</h3> */}
            <div className="topnav" id="myTopnav"><div className="dropdown">
                                      {/* orignal link usewd */}
    <button className="dropbtn"><Link to="https://in.sugarcosmetics.com/pages/offer"> OFFERS </Link>    
    </button>
     </div> 
     </div>
            {/* <h3>STORES</h3> */}
            <div className="topnav" id="myTopnav"><div className="dropdown">
                                         {/* orignal link usewd */}
    <button className="dropbtn"><Link to="https://in.sugarcosmetics.com/stores"> STORES </Link>    
    </button>
     </div> 
     </div>
  
        </div>

 </>
  )
}

export default Navbar


