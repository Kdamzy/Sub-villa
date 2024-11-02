import React from 'react'
import './CartItems.css'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import  remove from '../Assets/remove.svg'

const CartItems = () => {
    const {all_product,CartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className='cartitems-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(CartItems[e.id]>0)
            {
                return <div>
                    <div className='cartitems-format cartitems-main'>
                        <img src={e.image} alt='' className='carticon' />
                        <p>{e.name}</p>
                        <p>₦{e.new_price}</p>
                        <button className='cartquantity'>{CartItems[e.id]}</button>
                        <p>₦{e.new_price*CartItems[e.id]}</p>
                        <img className='removeicon-image' src={remove} onClick={()=>{removeFromCart(e.id)}} alt='' />
                    </div>
                    <hr/>
            </div>
            }
            return null;
        })}
        <div className='cartitem-down'>
                <div className='cart-total'>
                    <h1>Cart Total</h1>
                    <div className='cart-total-item'>
                        <p>Subtotal</p>
                        <p>₦{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className='cart-total-item'>
                        <p>Delivery Fee</p>
                        <p>₦{0}</p>
                    </div>
                    <hr />
                    <div className='cart-total-item'>
                        <h3>Total</h3>
                        <h3>₦{getTotalCartAmount()}</h3>
                    </div>
                    <button>CHECKOUT</button>
                </div>
                <div className='coupon-section'>
                    <p>Enter your coupon code here</p>
                    <div className='promocode'>
                        <input type='text' placeholder='Coupon Code'/>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems