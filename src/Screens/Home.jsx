import React,{ useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Thumbnail from '../assets/thumbnail.png'
import Top_img1 from '../assets/top1.png'
import Top_img2 from '../assets/top2.png'
import Top_img3 from '../assets/top3.png'
import ProductCard from '../Components/Product_cards/ProductCard'
import axios from 'axios'
import { API_URL } from '../Config/Constraints'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [arrData, setArrData] = useState([])
    const navigate = useNavigate()
 
useEffect(()=>{
  fetchData()
}, [])
    
   const fetchData =async () => {
    await axios.get(`${API_URL}/images`)
     
     .then((response) => {
       setArrData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    }


  return (
    <div>
         <Navbar/>
      <div className='slider_img'>
        <div className='thumb_text'>
          <span>Best Selling Products</span>
          <p>Get the best deals on our products</p>
          <button>View Collection →</button>
        </div>
        <div className='thumb'>
        <img src={Thumbnail} alt="" />
        </div>
      </div>

      {/* <div className='transport'>
        <div className='container'></div>
      </div> */}

      <div className='container'>
        <div className="top">
        <div className='top_1'>
          <div className='top_img'>
            <img src={Top_img3} alt="" />
          </div>
          <div className='top_text'>
            <p>Clothes for men</p>
            <span>new model 2021 collection</span>
          </div>
        </div>
        
        <div className='top_2'>
          <div className="top_img">
            <img src={Top_img2} alt="" />
          </div>
          <div className='top_text'>
            <p>Clothes for men</p>
            <span>new model 2021 collection</span>
          </div>
        </div>
        </div>
      </div>

      <div className='All_product'>
        <div className="container">
          <div className="wrapper">
            {
              arrData.map((e, i) => {
                return(
                  <div className="product" key={i}>
                    <ProductCard item={e} id={e.id} name={e.name} img={e.image} rate = {e.rating.rate} price = {e.price}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home