import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        // console.log(product);
        const { id, title, image, price, category } = product;
        return (
            <div className='four wide column' key={id}>
                <Link to={`/details/${id}`}>
                    <div className='uicard'>
                        <div className='card'>
                            <div className='images'>
                                <img src={image} alt={title} />
                            </div>
                            <div className='content'>
                                <div className='header'>{title}</div>
                                <div className='price'>$ {price}</div>
                                <div className='meta'> category : {category}</div>
                             

                            </div>

                        </div>
                    </div>
                </Link>
                    
            </div>
        )
    })

    return (
        <>
            {renderList}
        </>
    );
}


export default ProductComponent;