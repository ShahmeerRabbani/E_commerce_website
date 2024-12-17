import React, { useEffect, useState } from 'react'
import { IoMdCart } from 'react-icons/io'
import { IoMenu } from 'react-icons/io5'
import { MdOutlineSearch } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Navbar = ({refresh}) => {

  const navigate = useNavigate()

  const handleCartPage = () => {
    navigate('/addCart')
  }

  
    const [badge, setBadge] = useState(0)

    const handleBadge = () => {
        const getItem = JSON.parse(sessionStorage.getItem('cartData'))
        console.log(getItem)
    setBadge(getItem == null ? 0 : getItem.length)
    // setBadge(getItem.length)
    }

    useEffect(()=>{
      handleBadge()
    }, [refresh])

    // useEffect(()=>{
    //     handleBadge()

    //       // Listen for sessionStorage changes in the current tab
    // const handleStorageChange = (event) => {
    //     if (event.key === "cartData") {
    //       handleBadge(); // Update badge when "cartData" changes
    //     }
    //   };
  
    //   // Listen for storage changes (cross-tab updates)
    //   window.addEventListener("storage", handleStorageChange);
  
    //   return () => {
    //     window.removeEventListener("storage", handleStorageChange);
    //   };
    // }, [])
    

  return (
   <>
   <div className="Navbar">
   <div className="nav_left">
   <div className="nav1">
    <span>Cariana</span>
   </div>
    <div className="nav2">
        <ul>
            <li onClick={() => navigate('/')}>Home</li>
            <li>Products</li>
            <li>Services</li>
            <li>Stores</li>
        </ul>
    </div>
   </div>
   <div className="nav_right">

    <div className="nav3">
        <ul>
            <li onClick={handleCartPage}><IoMdCart/>
            <span className='badge'>{badge}</span>
            </li>
            <li><MdOutlineSearch/> </li>
            <li><IoMenu/> </li>
        </ul>
    </div>
   </div>
   </div>
   </>
  )
}

export default Navbar