import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
  const[{basket},dispatch]=useStateValue();
  console.log("object")
  const addTobasket = () => {
      dispatch ({
        type: "ADD_TO_BASKET",
        item : {
          id:id,
          title:title,
          price:price,
          rating:rating,
          image:image
      },
    });
  };
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className='product_rating'>{Array(rating).fill().map((_, i)=>(<p >🌟</p>))}
            
            </div>
        </div>
        <img src={image}></img>
        <button onClick={addTobasket}>Add to Basket</button>
        
    </div>
  )
};

export default Product;
