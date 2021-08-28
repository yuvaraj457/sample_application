import React from 'react';
import { MDBRow, MDBCardTitle } from 'mdbreact';

import ProductListContainer from '../../containers/products/product-list.container';


export default function ProductDetails({ products }) {
    let m=0,w=0,a=0,t=0;
    return (
        <>
            <MDBCardTitle className='product-topic'>Today's Deal </MDBCardTitle>
            
            <MDBRow className='row-cols-1 row-cols-md-5 g-4 product-row'>
                {products.map((item, index) => item.productType === 'todaysDeal' && ++t <= 5 && <ProductListContainer key={index} data={item} />)}
            </MDBRow>

            <MDBCardTitle className='product-topic'>Men's Collections</MDBCardTitle>
            <MDBRow className='row-cols-1 row-cols-md-5 g-4 product-row'>
                {products.map((item, index) => item.productType === 'mens' && ++m <= 5 && <ProductListContainer key={index} data={item} />)}
            </MDBRow>

            <MDBCardTitle className='product-topic'>Women's Collections</MDBCardTitle>
            <MDBRow className='row-cols-1 row-cols-md-5 g-4 product-row'>
                {products.map((item, index) => item.productType === 'womens' && ++w <= 5 &&<ProductListContainer key={index} data={item} />)}
            </MDBRow>

            <MDBCardTitle className='product-topic'>Accessories</MDBCardTitle>
            <MDBRow className='row-cols-1 row-cols-md-5 g-4 product-row'>
                {products.map((item, index) => item.productType === 'accessories' && ++a <= 5 &&<ProductListContainer key={index} data={item} />)}
            </MDBRow>

            
            
        </>
    );
}