import React from 'react';
import { useParams } from 'react-router';

import ProductSummary from '../products/product-detailview';

export const ProductDetail = (props) => {
    let { id } = useParams();
    return (
        <div className="page-container">
            <ProductSummary id={id} />
        </div>
    )
}
