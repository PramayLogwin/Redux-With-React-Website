import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
    selectedProduct,
    removeSelectedProduct,
    Add
} from '../redux/action/ProductAction';


const ProductDetails = () => {
    // const [counter, setCounter] = useState(0);
    const [toggle, setToggle] = useState(true);

    const product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispacth = useDispatch();
    // console.log(product);

    useEffect(() => {
        const fetchProductDetails = async (id) => {
            // console.log("Product",id)

            const getDetails = await axios.get(`https://fakestoreapi.com/products/${id}`)
                .catch(err => {
                    console.log("Error", err);
                    // console.log();
                });

            dispacth(selectedProduct(getDetails.data));
        }

        if (productId & productId !== "") fetchProductDetails(productId);
        return () => {
            dispacth(removeSelectedProduct())
            // console.log("removeSelectedProduct")
        }
    }, [productId])

    const AddToCart = (product) => {

        dispacth(Add(product));

    }

    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <h1>Loading....!</h1>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>


                                {toggle ? <div className="ui vertical animated button" tabIndex="0" onClick={() => AddToCart(product)}>
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div> : <div className="ui vertical animated button" tabIndex="0" onClick={() => AddToCart(product)}>
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Go to Cart</div>
                                </div>

                                }

                                {/* <div className='Counter'>
                                    <button className='incrementBtn'  onClick={() => { setCounter(counter + 1) }}>+</button>
                                    <h3 className='productCounter'>{counter}</h3>
                                    <button className='decrementBtn' onClick={() => { setCounter(counter - 1) }}>-</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default ProductDetails;