import React, { useState } from 'react'
import styles from './Cards.module.css'
import StarRatings from 'react-star-ratings'
import MenImg from '../../assets/thumbnail.png'
import { API_URL } from '../../Config/Constraints'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({ item, id, name, img, rate, price}) => {

  const navigate = useNavigate()  

  const handleProductDetail = (id) => {
    navigate(`/productDetail/${id}`, {state: item})
  }

  return (
    <div className={styles.cardBox}>
    <div className={styles.cardImg}>
      {/* <div className={styles.cate}>Category</div> */}
      <img src={`${API_URL}${img}`} alt="api-img" />
    </div>
    <div className={styles.cardContext}>
      <span style={{color: '#333230', fontSize: 16, textAlign: 'center', lineHeight: '20px'}}>{name}</span>
      <StarRatings
      rating={rate}
      starDimension="15px"
      starSpacing="0px"
      starRatedColor='#FFC107'
      />
      <span style={{fontWeight: 600, fontSize: 14}}>${price}</span>
      <button onClick={()=> handleProductDetail(id)} className={styles.ad_btn}>Detail</button>
    </div>
  </div>

  )
}

export default ProductCard