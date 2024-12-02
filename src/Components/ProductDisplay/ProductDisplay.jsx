import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star from '../Assets/star.png';
import stardull from '../Assets/starDull.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [quantity] = useState(0);

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={star} alt='' />
          <img src={stardull} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <div className='productdisplay-right-old'>${product.old_price}</div>
          <div className='productdisplay-right-new'>${product.new_price}</div>
        </div>
        <div className='productdisplay-right-description'>
          A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className='productdisplay-right-quantity'>
        <button onClick={() => addToCart(product.id, quantity)}>ADD TO CART</button>

        </div>
        
      </div>
    </div>
  );
};

export default ProductDisplay;
