import React, { useContext, useState } from 'react'
import './Navbar.css'
import cart from '../Assets/cart.png'
import shop from '../Assets/image.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
const{getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={shop} alt='' />
        </div>
        <ul className='navmenu'>
            <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to={'/'}>Shop</Link> {menu ==="shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("men")}}><Link style={{textDecoration: 'none'}} to={'/mens'}>Men</Link> {menu ==="men"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("women")}}><Link style={{textDecoration: 'none'}} to={'/womens'}>Women</Link> {menu ==="women"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kid")}}><Link style={{textDecoration: 'none'}} to={'/kids'}>Kids</Link> {menu ==="kid"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to={'/login'}><button>Login</button></Link>
           <Link to={'/cart'}><img src={cart} alt='' className='image' /></Link> 
            <div className='navcartcount'>{getTotalCartItems()}</div>
        </div>
        
    </div>
  )
}

export default Navbar

