import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/action/ProductAction';
import ProductComponent from './ProductComponent';

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispacth = useDispatch();

    const fecthProducts = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`)

            .catch((err) => {
                console.log("ProductError", err);
            })
        dispacth(setProducts(response.data));
    };

    useEffect(() => {
        fecthProducts();
    }, []);


    return (
        <div className='ui grid container'>
            <ProductComponent />
        </div>
    )
}

export default ProductList; 