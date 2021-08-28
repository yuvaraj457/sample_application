import React from 'react';
import { MDBRow } from 'mdbreact';

import ProductListContainer from '../../../containers/products/product-list.container';

export const Mens = ({products}) => {
    return (
        <div className="mens-product page-container">            
            <MDBRow className='row-cols-1 row-cols-md-5 g-4 product-row '>
                {products.map((item, index) => item.productType === 'mens' && <ProductListContainer key={index} data={item} />)}
            </MDBRow>
        </div>
    )
}
