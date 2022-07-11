import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveCartItems } from './redux/action/ProductAction';

const CartBox = (prouct) => {
    // if(product){
    const products = useSelector((state) => state.cart.cart);
    const dispacth = useDispatch();

    const removeBtnId = (product) => {
        dispacth(RemoveCartItems(product))
    }
    const renderList = products.map((product) => {
        const { id, title, image, price, category ,quantity} = product;
        return (
            <div className='cartbox' key={id}>

                <div className='cartDetails'>
                    <div className='cart'>
                        <div className='cartImages'>
                            <img src={image} alt={title} />
                        </div>
                        <div className='cartContent'>
                            <div className='cartHeader'>Product : {title}</div>
                            <div className='cartPrice'>Price : $ {price}</div>
                            <div className='cartMeta'> Category : {category}</div>
                            <div className='cartMeta'> Quantity : {quantity}</div>
                            <button onClick={() => removeBtnId(product)} className='removebtn'>Remove</button>

                           
                        </div>
                    </div>
                </div>


            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    );
}


export default CartBox;