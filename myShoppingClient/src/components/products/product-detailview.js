import React, { useState } from 'react'
import { MDBMedia, MDBBtnGroup, MDBBtn, MDBContainer, MDBAlert } from 'mdbreact';

import { apiTarget } from '../../config.json';
import { ProductStar } from './product-star';
import { Link } from 'react-router-dom';


export default function ProductDetailView(props) {
    const [message, setMessage] = useState(false)
    const product = props.product;
    let show;
    if (message) {
        show = <MDBContainer>
            <MDBAlert color="success" className="cart-alert" dismiss>
                <strong>Added to cart</strong>
            </MDBAlert>
        </MDBContainer>
    }
    return (
        <div>
            {product && <>
                <MDBMedia>
                    <MDBMedia left className="mr-3" href="#">
                        <MDBMedia className="detail-view-img" object src={product.productImage && apiTarget + `/static/images/${product.productImage}`} alt="" />
                    </MDBMedia>
                    <MDBMedia body>
                        <MDBMedia heading>
                            {product.productName}
                        </MDBMedia>
                        <ProductStar star={product.productStar} />
                        <del>Rs {product.productMrp}/-</del>&nbsp;
                        Rs {product.productPrice}/-
                        <hr />
                        <p><b>FREE delivery: Sunday</b>, Aug 15 on orders over ₹499.00 shipped by Amazon Details</p>
                        <p>Fastest delivery: <b>Tomorrow</b></p>
                        <p> Order within 11 hrs and 22 mins</p>

                        <div>
                            <MDBBtnGroup className='mt-4'>
                                <MDBBtn color="unique" size='sm' onClick={() => { setMessage(true); props.addProductToCart(product) }}>Add to cart</MDBBtn>
                                <Link to='/check-out'>
                                    <MDBBtn color="primary" size='sm'>&nbsp;Buy now&nbsp;</MDBBtn>
                                </Link>
                            </MDBBtnGroup>
                        </div>
                        {show}


                    </MDBMedia>
                </MDBMedia>
            </>
            }
        </div>

    )
}
