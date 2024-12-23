import React, { useContext } from 'react'
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dd from '../Components/Assets/dropdown1.png';
import Item from '../Components/Items/Items'



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1-6</span>out of 25 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dd} alt=''/>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
          if (props.category.toLowerCase()===item.category.toLowerCase()) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
