import React from 'react';
import fakData from '../../fakeData';
import {useState} from 'react';
const Shop = () => {
    const first10=fakData.slice(0,10);
    const [products,setProducts] = useState(first10);
    return (
        <div>
            <ul>
            {
                products.map(product=><li>{product.name}</li>)
            }
            </ul>
        </div>
    );
};

export default Shop;