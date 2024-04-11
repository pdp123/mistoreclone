import React from 'react'
import '../styles/ProductReviews.css'
import ProductReviewCard from './ProductReviewCard'

const ProductReviews = ({productReviews}) => {
  return (
    <div className="ProductReviews">
        {productReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} index={index} key={item.image} review={item.review}/>
        ))}
    </div>
  )
}

export default ProductReviews