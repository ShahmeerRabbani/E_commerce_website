import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import StarRatings from "react-star-ratings";
import { API_URL } from "../Config/Constraints";
import axios from "axios";

const ProductDetail = () => {
  const location = useLocation();
  const [count, setCount] = useState(1)
  const [refresh, setRefresh] = useState(false)
  
  
  const details = location.state;
  const rate = location.state.rating.rate
  const review = location.state.rating.review

  const handleIncrement = () => {
    if(count >= 5){
      return;
    }
    setCount(count + 1)
  }
 
  const handleDecrement = () => {
    if(count <= 1){
      return;
    }
    setCount(count -1)
  }


  const [arrData, setArrData] = useState([])    
  const [cart, setCart] = useState([])

   const fetchData =async () => {
    await axios.get(`${API_URL}/images`)
     
     .then((response) => {
       setArrData(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    }


  
  useEffect(() => {
    const storedCart = JSON.parse(sessionStorage.getItem("cartData")) || [];
    setCart(storedCart);
    fetchData()
  }, []);
  
  
  const productId = location.state.id;
  const handleAddCart = () => {
    setCart((prevState) => {

      const alreadyExists = prevState.some((item) => item.id === productId);

  if (alreadyExists) {
    alert("Item already exists in the cart!");
    return prevState; // Return the previous state without changes
  }

      const filterData = arrData.filter((item) => {
        return item.id == productId
      })
      const updateCart =  [...prevState, ...filterData]

      sessionStorage.setItem('cartData', JSON.stringify(updateCart))

      return updateCart;
    }) 
    setRefresh(!refresh)
  }
 

  return (
    <div className="Product_Detail">
      <Navbar refresh={refresh}/>
      <div className="Display_div">


        <div className="Display_img">
          <div className="display_img_main">
            <img src={`${API_URL}${details.image}`} alt="product" />
          </div>
          <div className="display_img_color">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>


        <div className="Display_text">
          <h2>{details.name}</h2>
         <div>
         <StarRatings
            rating={rate}
            starDimension="15px"
            starSpacing="0px"
            starRatedColor="#FFC107"
          />
          <span style={{color: '#999B9E', fontSize: '12px', marginLeft: '5px', fontWeight: 600}}>({rate} and {review} Review)</span>
         </div>
          <h1>${details.price}</h1>

          <div style={{display: 'flex', gap: '50px'}}>
            <div className="avail_color">
              <span>Available Color</span>
              <p>
              <div></div>
              <div></div>
              </p>
            </div>
          <div className="add_btn">
            <span>Quantity</span>
            <p>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            </p>
          </div>
          </div>


          <div className="event_btn">
            <button>BUY IT NOW</button>
            <button onClick={handleAddCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
