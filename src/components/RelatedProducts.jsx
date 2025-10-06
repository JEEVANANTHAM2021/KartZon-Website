import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';

const RelatedProducts = ({category, subCategory}) => {

    const [related, setRelated] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(()=>{

        if ( products.length > 0);

            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(products [0,5]);

    },[products])
    
    return (
    <div>RelatedProducts</div>
  )
}

export default RelatedProducts